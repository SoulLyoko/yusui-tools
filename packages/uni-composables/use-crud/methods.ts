import type { CrudState, Emitter, UseCrudMethodsOptions } from "./types";

import { cloneDeep, get, pick } from "lodash-unified";
import { filterObj, to } from "@yusui/utils";

export function useCrudMethods<T extends object = object, P extends object = object>({
  crudState,
  emitter,
  options
}: {
  crudState: CrudState<T, P>;
  emitter: Emitter<T, P>;
  options: UseCrudMethodsOptions<T>;
}) {
  /**
   * 获取列表数据
   * @param {boolean} isLoadmore true为分页加载数据，false为第一次获取数据
   */
  const getDataList =
    options.getDataList ??
    (async (isLoadmore = false) => {
      if (!isLoadmore) {
        crudState.pageOption.currentPage = 1;
        crudState.listData = [];
      }
      const { dataPath, totalPath, currKey, sizeKey, isPage, isSort } = crudState.crudOption;
      const { currentPage, pageSize } = crudState.pageOption;
      const page = isPage ? { [currKey]: currentPage, [sizeKey]: pageSize } : {};
      const sort = isSort ? crudState.sortOption : {};
      const params = cloneDeep({ ...crudState.searchForm, ...page, ...sort, ...crudState.queryForm }) as P;
      const [err] = await to(emitter.emitAsync("beforeGetList", params));
      if (err !== null) return;
      const { getList } = crudState.crudOption;
      if (!getList) return;
      crudState.loadStatus = "loading";
      try {
        const res = await getList(params);
        console.log("getDataList ~ res", res);
        const data = get({ res }, dataPath, []);
        crudState.listData = isLoadmore ? [...crudState.listData, ...data] : data;
        if (isPage) {
          crudState.pageOption.total = get({ res }, totalPath, 0);
          crudState.loadStatus = crudState.pageOption.total === crudState.listData.length ? "nomore" : "loadmore";
        } else {
          crudState.pageOption.total = crudState.listData.length;
          crudState.loadStatus = "nomore";
        }
        await emitter.emitAsync("afterGetList", res);
      } catch (err) {
        // listState.listData = [];
        // listState.pageOption.total = 0;
        // listState.loadStatus = "nomore";
      } finally {
        uni.stopPullDownRefresh();
        if (!isPage) crudState.loadStatus = "nomore";
      }
    });
  const handleDel =
    options.handleDel ??
    (async (row: T) => {
      const data = cloneDeep(row);
      const [err] = await to(emitter.emitAsync("beforeDel", data));
      if (err !== null) return;
      const { rowKey, remove } = crudState.crudOption;
      if (!remove) return;
      uni.showModal({
        title: "提示",
        content: "确认进行删除操作？",
        success: async ({ confirm }) => {
          if (confirm) {
            try {
              const res = await remove(row[rowKey as keyof T]);
              uni.showToast({ title: "删除成功", icon: "success" });
              await emitter.emitAsync("afterDel", res);
              handleRefresh();
            } catch (err) {
              console.error("handleDel ~ err", err);
            }
          }
        }
      });
    });
  const loadMore =
    options.loadMore ??
    (() => {
      if (crudState.loadStatus === "nomore") return;
      crudState.pageOption.currentPage!++;
      getDataList(true);
    });
  const handleRefresh =
    options.handleRefresh ??
    (() => {
      crudState.pageOption.currentPage = 1;
      getDataList();
    });
  const handleSearch = options.handleSearch ?? handleRefresh;
  const filterChange = options.filterChange ?? handleRefresh;
  const encodeData = options.encodeData ?? ((data: any) => encodeURIComponent(JSON.stringify(data)));
  const decodeData = options.decodeData ?? ((data: string) => JSON.parse(decodeURIComponent(data)));
  const getFormUrl =
    options.getFormUrl ??
    ((row: T, formType: string) => {
      const { formPath, formKeys } = crudState.crudOption;
      const formData = formKeys?.length ? pick(row, formKeys) : row;
      const url = `${formPath}?formType=${formType}&formData=${encodeData(formData)}`;
      return url;
    });
  const openForm =
    options.openForm ??
    ((row: T, formType: string) => {
      const { formPath } = crudState.crudOption;
      formPath && uni.navigateTo({ url: getFormUrl(row, formType) });
    });
  const handleAdd = options.handleAdd ?? ((row: T) => openForm(row, "add"));
  const handleEdit = options.handleEdit ?? ((row: T) => openForm(row, "edit"));
  const handleView = options.handleView ?? ((row: T) => openForm(row, "view"));

  /**
   * 获取表单数据
   * @param {Object} options onLoad的参数
   */
  const getFormData =
    options.getFormData ??
    (async (options: any) => {
      const { formType, formData } = options as { formData: string | object; formType: CrudState<T, P>["formType"] };
      crudState.formType = formType;
      let urlFormData = {};
      if (typeof formData === "string") {
        urlFormData = formData ? decodeData(formData) : {};
      } else if (typeof formData === "object") {
        urlFormData = formData || {};
      }
      const [err] = await to(emitter.emitAsync("beforeGetInfo", urlFormData));
      if (err !== null) return;
      const { getInfo, rowKey, dataPath } = crudState.crudOption;
      if (formType !== "add" && getInfo) {
        const res = await getInfo(urlFormData[rowKey as keyof typeof urlFormData]);
        console.log("getFormData ~ res", res);
        crudState.formData = get({ res }, dataPath, {} as T);
        await emitter.emitAsync("afterGetInfo", res);
      } else {
        crudState.formData = { ...crudState.formData, ...urlFormData };
        await emitter.emitAsync("afterGetInfo", urlFormData);
      }
    });
  /**
   * 提交数据
   * @param {Object} form 提交的表单数据
   * @param {Function} loading 取消加载按钮函数
   * @param {Function} back 返回上一页函数
   */
  const handleSubmit =
    options.handleSubmit ??
    (async (form: T, loading?: () => void, back?: () => void) => {
      const data = cloneDeep({ ...crudState.formData, ...form });
      const [err] = await to(emitter.emitAsync("beforeSubmit", data));
      if (err !== null) return loading?.();
      const { create, update, submitBack } = crudState.crudOption;
      if (!create || !update) loading?.();
      const submitMethod = { add: create, edit: update, view: () => Promise.resolve() };
      try {
        const res = await submitMethod[crudState.formType](filterObj(data));
        uni.showToast({ title: "保存成功", icon: "success" });
        await emitter.emitAsync("afterSubmit", res);
        submitBack && setTimeout(() => back?.(), 500);
      } catch (err) {
        loading?.();
        console.error(err);
      } finally {
        loading?.();
      }
    });

  return {
    getDataList,
    handleDel,
    loadMore,
    handleRefresh,
    handleSearch,
    filterChange,
    handleAdd,
    handleEdit,
    handleView,
    getFormData,
    handleSubmit,
    encodeData,
    decodeData,
    getFormUrl,
    openForm
  };
}
