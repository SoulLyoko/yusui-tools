import type { Ref } from "vue";
import type { AvueCrudInstance, AvueCrudProps, FormType } from "@smallwei/avue";
import type { Data } from "@yusui/types";
import type { CrudState, Emitter, UseCrudMethodsOptions } from "./types";

import { ElMessage, ElMessageBox } from "element-plus";
import { cloneDeep, get, omitBy, overSome, isNil, snakeCase } from "lodash-unified";
import { sleep, to } from "@yusui/utils";

export function useCrudMethods<T extends Data, P extends Data>({
  crudRef,
  crudState,
  emitter,
  options
}: {
  crudRef: Ref<AvueCrudInstance | undefined>;
  crudState: CrudState<T, P>;
  emitter: Emitter<T, P>;
  options: UseCrudMethodsOptions<T, P>;
}) {
  /**
   * 获取数据列表
   */
  const getDataList =
    options.getDataList ??
    (async () => {
      const { dataPath, totalPath, currKey, sizeKey, isPage, isSort, clearSelection } = crudState.crudOption;
      const { currentPage, pageSize } = crudState.pageOption;
      const page = isPage ? { [currKey]: currentPage, [sizeKey]: pageSize } : {};
      const sort = isSort ? crudState.sortOption : {};
      const params = cloneDeep({ ...crudState.searchForm, ...page, ...sort, ...crudState.queryForm }) as P;
      const [err] = await to(emitter.emitAsync("beforeGetList", params));
      if (err !== null) return;
      const { getList } = crudState.crudOption;
      if (!getList) return;
      crudState.tableLoading = true;
      // 延迟请求，解决avue渲染报错
      await sleep(100);
      try {
        const res = await getList(filterParams(params));
        console.log("getDataList ~ res", res);
        crudState.tableData = get({ res }, dataPath, []);
        crudState.pageOption.total = get({ res }, totalPath, 0);
        await emitter.emitAsync("afterGetList", res);
      } catch (err) {
        console.error("getDataList ~ err", err);
        crudState.tableData = [];
        crudState.pageOption.total = 0;
      } finally {
        clearSelection && crudRef?.value?.selectClear?.();
        crudState.tableLoading = false;
      }
    });
  /**
   * 数据添加
   * @param {Object} row 为当前的数据
   * @param {Function} done 为表单关闭函数
   * @param {Function} loading 为表单停止loading函数
   */
  const handleSave =
    options.handleSave ??
    (async (row: T, done?: () => void, loading?: () => void) => {
      const data = cloneDeep({ ...crudState.formData, ...row });
      const [err] = await to(emitter.emitAsync("beforeSave", data));
      if (err !== null) return loading?.();
      const { rowKey, create } = crudState.crudOption;
      if (!create) return loading?.();
      delete data[rowKey];
      try {
        const res = await create(filterRow(data));
        ElMessage.success("保存成功");
        await emitter.emitAsync("afterSave", res);
        done?.();
        return getDataList();
      } catch (err) {
        console.error("handleSave ~ err", err);
        loading?.();
      }
    });
  /**
   * 数据更新
   * @param {Object} row 为当前的数据
   * @param {Number} index 为当前更新数据的行数
   * @param {Function} done 为表单关闭函数
   * @param {Function} loading 为表单停止loading函数
   */
  const handleUpdate =
    options.handleUpdate ??
    (async (row: T, index?: number, done?: () => void, loading?: () => void) => {
      const data = cloneDeep({ ...crudState.formData, ...row });
      const [err] = await to(emitter.emitAsync("beforeUpdate", data));
      if (err !== null) return loading?.();
      const { update } = crudState.crudOption;
      if (!update) return loading?.();
      try {
        const res = await update(filterRow(data));
        ElMessage.success("保存成功");
        await emitter.emitAsync("afterUpdate", res);
        done?.();
        return getDataList();
      } catch (err) {
        console.error("handleUpdate ~ err", err);
        loading?.();
      }
    });
  /**
   * 删除行
   * @param {Object} row 行数据
   */
  const handleDel =
    options.handleDel ??
    (async (row: T) => {
      const data = cloneDeep(row);
      const [err] = await to(emitter.emitAsync("beforeDel", data));
      if (err !== null) return;
      const { rowKey, remove, delConfirm } = crudState.crudOption;
      if (!remove) return;
      delConfirm && (await ElMessageBox.confirm("确认进行删除操作？", "提示", { type: "warning" }));
      try {
        const res = await remove(data[rowKey]);
        ElMessage.success("删除成功");
        await emitter.emitAsync("afterDel", res);
        return getDataList();
      } catch (err) {
        console.error("handleDel ~ err", err);
      }
    });
  /**
   * 批量删除
   */
  const batchDel =
    options.batchDel ??
    (async () => {
      const data = cloneDeep(crudState.dataSelections);
      const [err] = await to(emitter.emitAsync("beforeBatchDel", data));
      if (err !== null) return;
      const { rowKey, remove, delConfirm } = crudState.crudOption;
      if (!remove) return;
      const length = data.length;
      if (!length) return ElMessage.warning("请选择删除项");
      delConfirm && (await ElMessageBox.confirm(`确认删除所选的${length}条数据？`, "提示", { type: "warning" }));
      const ids = data
        .map(item => item[rowKey])
        // 根据后端接口传数组或者逗号拼接的字符串
        .join(",");
      try {
        const res = await remove(ids);
        ElMessage.success("删除成功");
        await emitter.emitAsync("afterBatchDel", res);
        return getDataList();
      } catch (err) {
        console.error("batchDel ~ err", err);
      }
    });

  const hasKey$ = (v: any, k: string | string[]) => k.includes("$");
  const isEmptyString = (v: any) => v === "";
  /**
   * 过滤对象的undefined和null值
   * @param {Object} row 被过滤对象
   */
  const filterRow =
    options.filterRow ??
    ((row: T) => {
      return omitBy(row, overSome(isNil, hasKey$)) as T;
    });
  /**
   * 过滤搜索参数的undefined和null值和""值
   * @param {Object} params 被过滤对象
   */
  const filterParams =
    options.filterParams ??
    ((params: P) => {
      return omitBy(params, overSome(isNil, isEmptyString, hasKey$)) as P;
    });

  /**
   * 搜索
   * @param {Object} form 搜索表单数据
   * @param {Functoin} done 表单完成函数
   * @param {Boolean} isReset 是否是搜索重置
   */
  const searchChange =
    options.searchChange ??
    (async (form: P, done: () => void) => {
      crudState.pageOption.currentPage = 1;
      Object.keys(crudState.searchForm).forEach(key => {
        delete crudState.searchForm[key];
      });
      Object.keys(form).forEach((key: keyof P) => {
        crudState.searchForm[key] = form[key];
      });
      const [errB] = await to(emitter.emitAsync("beforeSearch", crudState.searchForm));
      if (errB !== null) return done?.();
      await getDataList();
      const [errA] = await to(emitter.emitAsync("afterSearch", crudState.searchForm));
      if (errA !== null) return done?.();
      done?.();
    });
  /**
   * 搜索重置
   */
  const searchReset =
    options.searchReset ??
    (async () => {
      Object.keys(crudState.searchForm).forEach(key => {
        delete crudState.searchForm[key];
      });
      await emitter.emitAsync("beforeSearchReset", crudState.searchForm);
      await getDataList();
      await emitter.emitAsync("afterSearchReset", crudState.searchForm);
    });
  /**
   * 多选
   * @param {Array} rows 选中行数据
   */
  const selectionChange =
    options.selectionChange ??
    ((rows: T[]) => {
      crudState.dataSelections = rows;
    });
  /**
   * 分页,每页条数
   * @param {Number} size 每页条数
   */
  const pageSizeChange =
    options.pageSizeChange ??
    ((size: number) => {
      crudState.pageOption.pageSize = size;
      return getDataList();
    });
  /**
   * 分页,当前页
   * @param {Number} current 当前页
   */
  const pageCurrentChange =
    options.pageCurrentChange ??
    ((current: number) => {
      crudState.pageOption.currentPage = current;
      return getDataList();
    });
  /**
   * 排序
   * @param {String} order 排序顺序
   * @param {String} prop 排序字段
   */
  const sortChange: AvueCrudProps<T>["onSortChange"] =
    options.sortChange ??
    (({ order, prop }) => {
      if (order && prop) {
        // crudState.sortOption = { order: order.replace("ending", "") as SortOption["order"], prop };
        crudState.sortOption = { [order.replace("ending", "s")]: snakeCase(prop) };
      } else {
        crudState.sortOption = {};
      }
      return getDataList();
    });
  /**
   * 打开弹窗前回调
   * @param done 打开弹窗函数
   * @param type 表单类型 add|edit|view
   */
  const beforeOpen =
    options.beforeOpen ??
    (async (done: () => void, type: FormType) => {
      crudState.formType = type;
      await emitter.emitAsync("beforeOpen", type);
      done();
      await emitter.emitAsync("afterOpen", type);
    });
  /**
   * 关闭弹窗前回调
   * @param done 关闭弹窗函数
   * @param type 表单类型 add|edit|view
   */
  const beforeClose =
    options.beforeClose ??
    (async (done: () => void, type: FormType) => {
      crudState.formType = type;
      await emitter.emitAsync("beforeClose", type);
      done();
      await emitter.emitAsync("afterClose", type);
    });

  return {
    getDataList,
    handleSave,
    handleUpdate,
    handleDel,
    batchDel,
    searchChange,
    searchReset,
    selectionChange,
    pageSizeChange,
    pageCurrentChange,
    sortChange,
    beforeOpen,
    beforeClose
  };
}
