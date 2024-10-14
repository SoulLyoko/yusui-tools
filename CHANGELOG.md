# [3.0.0-beta.59](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.58...v3.0.0-beta.59) (2024-10-14)


### Bug Fixes

* **utils:** 处理deserialize的参数为空的情况 ([8bf70ed](https://github.com/SoulLyoko/yusui-tools/commit/8bf70ed73f1cfd2d233ddcae1a7ed6a5047231dd))



# [3.0.0-beta.58](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.57...v3.0.0-beta.58) (2024-10-14)


### Bug Fixes

* **types:** 补充AvueCrud中卡片模式grid相关的类型 ([5ae2c7c](https://github.com/SoulLyoko/yusui-tools/commit/5ae2c7c0c94cd4b9c3663ef9051b936fe1a9383b))
* **uvue:** 保存collapse的展开状态 ([9afb71d](https://github.com/SoulLyoko/yusui-tools/commit/9afb71d874533740bd2fb5ae25494ad4714447c6))
* **uvue:** 修复cascader组件和select组件的值回显 ([053ac3c](https://github.com/SoulLyoko/yusui-tools/commit/053ac3c0da2ef44339b785d901d9a3e84bd98602))


### Features

* **flow-design:** 升级logicflow v2 ([b70119c](https://github.com/SoulLyoko/yusui-tools/commit/b70119c241c0e43443a9fe88230062fee5999b09))
* **types:** 适配avue新增支持dicData的函数和Promise类型，control的Promise类型 ([640908f](https://github.com/SoulLyoko/yusui-tools/commit/640908f2cd720fab20eda4c20b89d5768e3748d5))
* **types:** 新增`MaybePromise`类型 ([17e216e](https://github.com/SoulLyoko/yusui-tools/commit/17e216e40af621b4ee61989bfc3d7e0f7194b83b))
* **utils:** 新增函数getTreeDepth获取树的深度 ([902f615](https://github.com/SoulLyoko/yusui-tools/commit/902f61508f45ecb79cdf08c7f9753e9ccb01865b))
* **utils:** 新增isMobile,isJSON,encodeData,decodeData,jsonClone,优化serialize和deserialize ([e639876](https://github.com/SoulLyoko/yusui-tools/commit/e6398765d66488582220812c4a6d989697e834cc))
* **uvue:** 新增filter组件用于列表筛选 ([1835e36](https://github.com/SoulLyoko/yusui-tools/commit/1835e366869c49c81927b1a45e0701eff13f1b82))
* **uvue:** useCrud新增mock数据功能 ([07d4158](https://github.com/SoulLyoko/yusui-tools/commit/07d415876c170845d6a7da66441b6a3b399bb018))



# [3.0.0-beta.57](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.56...v3.0.0-beta.57) (2024-09-25)


### Bug Fixes

* **uvue:** form-item-default显示year-month类型 ([59c23c6](https://github.com/SoulLyoko/yusui-tools/commit/59c23c6eaf7c8d7be5af2899a7e99993f2618db9))



# [3.0.0-beta.56](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.55...v3.0.0-beta.56) (2024-09-23)


### Bug Fixes

* **uvue:** uvue-form-item显示year-month类型 ([ff0585c](https://github.com/SoulLyoko/yusui-tools/commit/ff0585c775f9736b66565dfce00f228b6ea23fa2))



# [3.0.0-beta.55](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.54...v3.0.0-beta.55) (2024-09-20)


### Bug Fixes

* **uvue-datetime-picker:** 添加类型为year-month的格式化默认值 ([2e75eba](https://github.com/SoulLyoko/yusui-tools/commit/2e75ebab557c7d2459459750b7024a11aeaee767))
* **uvue-select:** 处理dic为空的情况 ([9b186e2](https://github.com/SoulLyoko/yusui-tools/commit/9b186e24a4399b6618147d9b56d96af566ac83e0))



# [3.0.0-beta.54](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.53...v3.0.0-beta.54) (2024-09-10)


### Bug Fixes

* **uvue:** 修复配置合并方法 ([5df218c](https://github.com/SoulLyoko/yusui-tools/commit/5df218c3061d5b22e13a4b006f2018c7978d7a37))



# [3.0.0-beta.53](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.52...v3.0.0-beta.53) (2024-09-10)


### Bug Fixes

* **uvue:** 使用provide注入全局配置 ([34ae984](https://github.com/SoulLyoko/yusui-tools/commit/34ae98458bca5e0dbdaca96967f33895f57b1083))



# [3.0.0-beta.52](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.51...v3.0.0-beta.52) (2024-09-09)


### Features

* **uvue:** 支持全局配置 ([e35afdf](https://github.com/SoulLyoko/yusui-tools/commit/e35afdf9363c1ec0b2c2625bcd9ccbc67e685196))



# [3.0.0-beta.51](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.50...v3.0.0-beta.51) (2024-07-30)


### Bug Fixes

* **form-design:** 获取表单的方式从`props.tableData.row`改为`inject('formSafe')` ([5ba5ff8](https://github.com/SoulLyoko/yusui-tools/commit/5ba5ff889bed1554a44fa8cf58da708daf04e5b9))



# [3.0.0-beta.50](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.49...v3.0.0-beta.50) (2024-07-23)


### Bug Fixes

* **flow-design:** 表单配置字段选择的分组字段 ([c7cf542](https://github.com/SoulLyoko/yusui-tools/commit/c7cf54226c2682269fc757bf7703451b3ee452c4))



# [3.0.0-beta.49](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.48...v3.0.0-beta.49) (2024-07-22)


### Bug Fixes

* **uvue:** 从dayjs/esm导入dayjs ([d746c12](https://github.com/SoulLyoko/yusui-tools/commit/d746c129ecadf16593148cb37a9cb9ddb54eb52e))



# [3.0.0-beta.48](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.47...v3.0.0-beta.48) (2024-07-01)


### Bug Fixes

* **useDict:** dicFormatter传入参数改为res ([e96ed71](https://github.com/SoulLyoko/yusui-tools/commit/e96ed71399529b402ea144c85cb4107f7e5a9ece))
* **utils:** 从dayjs/esm导入dayjs ([6562d6d](https://github.com/SoulLyoko/yusui-tools/commit/6562d6d617e298099064c25cad0c127c98ed86ed))



# [3.0.0-beta.47](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.46...v3.0.0-beta.47) (2024-06-20)


### Bug Fixes

* **flow-design:** 节点的鼠标样式 ([3ef9579](https://github.com/SoulLyoko/yusui-tools/commit/3ef9579e71360e35de53711b9623e9d949f0318b))
* **flow-design:** 结束节点默认文字 ([2a9b1d1](https://github.com/SoulLyoko/yusui-tools/commit/2a9b1d10f36872542e106781d2e1c391ba93b8c0))



# [3.0.0-beta.46](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.45...v3.0.0-beta.46) (2024-06-12)


### Bug Fixes

* **flow-design:** 调整分办任务图标和noteFlow的文字位置 ([c36b4f3](https://github.com/SoulLyoko/yusui-tools/commit/c36b4f302179ec1b53aa4b2547c4cebbb23f7727))



# [3.0.0-beta.45](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.44...v3.0.0-beta.45) (2024-06-11)


### Features

* **flow-design:** 新增分办任务节点 ([0027f0f](https://github.com/SoulLyoko/yusui-tools/commit/0027f0f674527590ebe1ba978a84854a6d8d3400))



# [3.0.0-beta.44](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.43...v3.0.0-beta.44) (2024-06-03)


### Bug Fixes

* **pro-menu:** 折叠后显示title的tooltip ([938a285](https://github.com/SoulLyoko/yusui-tools/commit/938a2857f0d6410cc0226aaa56e64ff3919107ce))



# [3.0.0-beta.43](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.42...v3.0.0-beta.43) (2024-05-30)


### Bug Fixes

* **flow-design:** 表单配置的prop丢失 ([fba6dd9](https://github.com/SoulLyoko/yusui-tools/commit/fba6dd9df36dee8c91a598e16b2f05542f46bd8c))



# [3.0.0-beta.42](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.41...v3.0.0-beta.42) (2024-05-30)


### Features

* **flow-design:** 编辑json重置配置属性可自由输入属性 ([57ccd59](https://github.com/SoulLyoko/yusui-tools/commit/57ccd59b50d1378d4b0ea561b7d67f24604bf52d))
* **flow-design:** 表单配置可设置为默认值 ([40d7e55](https://github.com/SoulLyoko/yusui-tools/commit/40d7e55b35f664c4aaad9db43482d9691e144c89))



# [3.0.0-beta.41](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.40...v3.0.0-beta.41) (2024-05-28)


### Bug Fixes

* **flow-design:** 升级element-plus导致子表单套子表单报错 ([c6f52f7](https://github.com/SoulLyoko/yusui-tools/commit/c6f52f7eebe3c1abc5b6f1c638ab769d8482ffe0))
* **pro-crud:** 空数据时隐藏原来的empty ([4b244f8](https://github.com/SoulLyoko/yusui-tools/commit/4b244f8b68c3218b2922e1cb4ff9455f769c1d1b))


### Features

* **components:** 导出所有组件及相关函数 ([24f9e95](https://github.com/SoulLyoko/yusui-tools/commit/24f9e9531cf83dfce1855be2c6d813031f668941))



# [3.0.0-beta.40](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.39...v3.0.0-beta.40) (2024-05-27)


### Bug Fixes

* **flow-design:** 升级avue导致子表单套子表单报错 ([38451e5](https://github.com/SoulLyoko/yusui-tools/commit/38451e58036fe3adafbb74147a5257aa6b3e53e7))
* **pro-crud:** footer插槽改为body插槽 ([bbdb366](https://github.com/SoulLyoko/yusui-tools/commit/bbdb36681bebeeb3c5ab4da0cf7bbe9fd3d1b385))
* **types:** avue types ([6973c11](https://github.com/SoulLyoko/yusui-tools/commit/6973c11c4447b67186a00ab5fd813c33f0cb34c4))



# [3.0.0-beta.39](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.37...v3.0.0-beta.39) (2024-05-22)


### Bug Fixes

* **flow-design:** 找不到节点时不更新样式 ([c3eb6df](https://github.com/SoulLyoko/yusui-tools/commit/c3eb6df4559e06882f48e2e8615155878880f56e))
* **form-design:** editor-setter中useAttrs的问题 ([2c7353f](https://github.com/SoulLyoko/yusui-tools/commit/2c7353f35bc73901b8e80daad4b5f3a97c338267))
* **types:** avue types ([1959977](https://github.com/SoulLyoko/yusui-tools/commit/1959977b38d01a28fa26875a31b6b304e5e216f0))
* **use-crud:** beforeSearchReset和 ([748c995](https://github.com/SoulLyoko/yusui-tools/commit/748c99521437b55189910c5a563c9756b216f28c))



# [3.0.0-beta.38](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.37...v3.0.0-beta.38) (2024-05-16)


### Bug Fixes

* **form-design:** editor-setter中useAttrs的问题 ([a31abaa](https://github.com/SoulLyoko/yusui-tools/commit/a31abaaef5a99b950433e225568416338737bb69))
* **types:** avue types ([ce1fa4f](https://github.com/SoulLyoko/yusui-tools/commit/ce1fa4f0473a759565d9a655d0f40975fa57ccde))
* **use-crud:** beforeSearchReset和 ([c2096e5](https://github.com/SoulLyoko/yusui-tools/commit/c2096e525da3daffb9553781ddacfcf92e59cd4d))



# [3.0.0-beta.37](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.36...v3.0.0-beta.37) (2024-05-10)


### Features

* **flow-design:** 表单字段配置扩展 ([014d990](https://github.com/SoulLyoko/yusui-tools/commit/014d99038fc13560c8cba412e07030f74af76d40))



# [3.0.0-beta.36](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.2...v3.0.0-beta.36) (2024-05-07)


### Bug Fixes

* 表单宽度formWidth ([e2b03a6](https://github.com/SoulLyoko/yusui-tools/commit/e2b03a681f091a87d8c754e7eb68011b8709342d))
* 类型 ([24ff911](https://github.com/SoulLyoko/yusui-tools/commit/24ff911c1f764d358fd1b9fc83b1303f28eababd))
* 修复全局组件类型在nuxt失效的问题 ([b0e070c](https://github.com/SoulLyoko/yusui-tools/commit/b0e070c17761699a712c0f72fdc0515530ead0b4))
* avue types ([9e299eb](https://github.com/SoulLyoko/yusui-tools/commit/9e299ebeb2ea5b18602ca9591ecce887f5da1e03))
* avue types ([593d4b9](https://github.com/SoulLyoko/yusui-tools/commit/593d4b962e3a5ecd227f47dca4058558e0b4f7a1))
* **avue-patch:** 适配avue3.3.2 ([de8cf64](https://github.com/SoulLyoko/yusui-tools/commit/de8cf64a7cae31cbeea9a29c12c2f5dbd3f28d0e))
* **components:** 导出ProMenu ([f52e420](https://github.com/SoulLyoko/yusui-tools/commit/f52e420dc1e3a2d6e0197fcf3dddf381643c19ad))
* **components:** 提取global.d.ts ([05747b4](https://github.com/SoulLyoko/yusui-tools/commit/05747b4758a44dad29c248f87231cc64ea1dc864))
* **components:** 添加发布global.d.ts ([772ed77](https://github.com/SoulLyoko/yusui-tools/commit/772ed77a37426746ef3bebf950b1085e1d6beec7))
* **components:** pro-tree样式 ([df16b50](https://github.com/SoulLyoko/yusui-tools/commit/df16b50d80507de80565bab4944de634ddc478d9))
* **ep-menu:** 修复纵向折叠时子菜单不显示的问题 ([2226378](https://github.com/SoulLyoko/yusui-tools/commit/2226378bdd90a67fa98af2cfdd1ae41b78ca39f7))
* **ep-menu:** 修复纵向折叠时子菜单不显示的问题 ([b5e6278](https://github.com/SoulLyoko/yusui-tools/commit/b5e6278cb53128ee25d69d31a72963694a237edd))
* **flow-design:** 监听器 ([81e6444](https://github.com/SoulLyoko/yusui-tools/commit/81e64444784a2eb1cc01a89fa667cefe57278410))
* **flow-design:** 模板映射字段选择 ([a8e2b20](https://github.com/SoulLyoko/yusui-tools/commit/a8e2b20be837c9744f8be1dcc8bd194050829082))
* **flow-design:** 模板字段映射的设置问题 ([8dbaa95](https://github.com/SoulLyoko/yusui-tools/commit/8dbaa9535877c8eaae48c316675154444237910b))
* **flow-design:** 修改按钮和表单配置的字段 ([0ca4655](https://github.com/SoulLyoko/yusui-tools/commit/0ca465513d4c2e8f9646d026518173658297ae89))
* **flow-design:** 移除传阅任务 ([84c87b0](https://github.com/SoulLyoko/yusui-tools/commit/84c87b0162962be7422d97ba57b0197082b270b7))
* **flow-design:** 组件FlowDataOptions默认可清空 ([07b7034](https://github.com/SoulLyoko/yusui-tools/commit/07b7034ed4c32171c5411c11a3a92fa15a459f3e))
* **flow-design:** taskListener ([eaa70ad](https://github.com/SoulLyoko/yusui-tools/commit/eaa70ad3c74621db725a21b545532180517c928c))
* **flow-form:** 非待办时禁用表单 ([58c1e17](https://github.com/SoulLyoko/yusui-tools/commit/58c1e1778ab0078053628ea7fa60bb4b9a142bc1))
* **flow-form:** 修复在onBeforeSubmit修改表单值导致审批窗口重新加载的问题 ([8088646](https://github.com/SoulLyoko/yusui-tools/commit/8088646c11222f20d8bd30ec78906c92c9f685e8))
* **flow-form:** 修复afterGetDetail不触发的问题 ([5055e72](https://github.com/SoulLyoko/yusui-tools/commit/5055e727447dc0dba007db0575728ed0e596e66a))
* **flow-form:** 优化移动端滑动 ([fb318af](https://github.com/SoulLyoko/yusui-tools/commit/fb318af059df8b695472daf9438fd39f9982f415))
* **flow-pages:** 修复表格配置合并 ([c85b105](https://github.com/SoulLyoko/yusui-tools/commit/c85b1059d7fe3bae0fd2b618b5c6d76397554b4a))
* **form-design:** 优化设计器性能 ([4594b9f](https://github.com/SoulLyoko/yusui-tools/commit/4594b9fa9381fd54cad795a08d4b3175df78925d))
* **form-design:** 组件不可见时调低透明度 ([29d7ff4](https://github.com/SoulLyoko/yusui-tools/commit/29d7ff4d69fd000a2f774ba2482f9a76b28cbc51))
* **form-design:** label显示问题 ([3623357](https://github.com/SoulLyoko/yusui-tools/commit/36233570f0dacc4593f24fccf44c5960cfecead3))
* **IconSelect:** 处理collections为匹配方式时的问题 ([e4b6da9](https://github.com/SoulLyoko/yusui-tools/commit/e4b6da935d9dbcbde20086344097945d3e4b3450))
* **IconSelect:** tabs遵循collections的排序 ([71a294f](https://github.com/SoulLyoko/yusui-tools/commit/71a294f1e568657daba57b499b30b261632232f3))
* **mix:** 修复uno配置解析js文件会导致vue-dev-tools报错的问题 ([1f02f3a](https://github.com/SoulLyoko/yusui-tools/commit/1f02f3a74121a57aa323ac4f88691970eb147a47))
* **mix:** 虚拟模块的导入改为由外部完成 ([0155559](https://github.com/SoulLyoko/yusui-tools/commit/015555932d231ec885902d16f414e1d87a649155))
* **mix:** 移除flow-pages ([8b829e7](https://github.com/SoulLyoko/yusui-tools/commit/8b829e77a4855b5193041f53f2de294affa91061))
* **nuxt:** 从appConfig读取组件配置 ([ba41057](https://github.com/SoulLyoko/yusui-tools/commit/ba41057a4c3bbd56f00dba6cd7804d50b228cb47))
* **pro-menu:** sub-menu点击 ([fb67b12](https://github.com/SoulLyoko/yusui-tools/commit/fb67b12c58883a0e47d502e171043e0db4d8c51d))
* **pro-tree:** 修改Props的命名为ProTreeProps ([723ba77](https://github.com/SoulLyoko/yusui-tools/commit/723ba7760730395ee6724119394494ecf0e6c4ff))
* **pro-tree:** tag回显自定义label ([65502a1](https://github.com/SoulLyoko/yusui-tools/commit/65502a112451d1a840b0b57af7cf7bd78404455a))
* **request:** 弹出退出登录确认框前先关闭 ([e3c3a64](https://github.com/SoulLyoko/yusui-tools/commit/e3c3a6485034a49d62433739513a13b4a5c33d9f))
* **request:** 设置AxiosError的status属性 ([23bffd0](https://github.com/SoulLyoko/yusui-tools/commit/23bffd05d8f0fcd2cbad040b6e5251606422ea50))
* **request:** 退出登录确认 ([e824130](https://github.com/SoulLyoko/yusui-tools/commit/e8241303aeb4dba560a0fd7a0b82ea4204e5bd61))
* **request:** 移除vue-request的导出 ([a80120e](https://github.com/SoulLyoko/yusui-tools/commit/a80120eff5e7cc429a3a61b7b041d093a777cb33))
* **request:** 优化退出登录提示 ([a3fcff7](https://github.com/SoulLyoko/yusui-tools/commit/a3fcff781e49c9bb7f23288a2f0f6363f36f2cc9))
* **theme:** 统一弹窗按钮样式 ([35743cc](https://github.com/SoulLyoko/yusui-tools/commit/35743cc972a0b18b63378935b207258b53b7c255))
* type errors ([fc96fb4](https://github.com/SoulLyoko/yusui-tools/commit/fc96fb4f4c615cd3dfde0223cd2bac254130e3ae))
* **type/avue:** 修改helpers的导入路径 ([b0a3cfa](https://github.com/SoulLyoko/yusui-tools/commit/b0a3cfa46a22d13c7004c6cfbf18861238fdef4b))
* **types/avue:** 子表单插槽 ([1202ed1](https://github.com/SoulLyoko/yusui-tools/commit/1202ed13209b27bdc0d921b2e1f2aad2d0fc6d86))
* **types:** 修复avue类型的导入 ([195d889](https://github.com/SoulLyoko/yusui-tools/commit/195d88993441d42ac33c98fb526e31845ad5a4ab))
* **types:** avue types ([fce19c2](https://github.com/SoulLyoko/yusui-tools/commit/fce19c23c519840221c98e85849b6a6ca8d651f1))
* **types:** avue types ([4fddd8f](https://github.com/SoulLyoko/yusui-tools/commit/4fddd8f0716ad457e3cabb9c542eca8646ba19c5))
* **types:** avue-tree types ([ccc1fe6](https://github.com/SoulLyoko/yusui-tools/commit/ccc1fe6398ca63b034705b52219951ab58b976c4))
* **use-crud:** getInfo的类型 ([642feeb](https://github.com/SoulLyoko/yusui-tools/commit/642feeb32ed60a9448ca37facb8311f6c5524fdc))
* **use-crud:** getInfo的问题 ([36f50e4](https://github.com/SoulLyoko/yusui-tools/commit/36f50e47d4768ef0daa80943bc03013e70a8df47))
* **useDict:** 内部实现toValue ([6040b4a](https://github.com/SoulLyoko/yusui-tools/commit/6040b4acec5dcf6b802837c063b18d994114b0c8))
* **useDict:** 修复dicData丢失响应的问题 ([2391056](https://github.com/SoulLyoko/yusui-tools/commit/2391056b23dddf2fb01f86db0d373af43db022b9))
* **uvue:** 提交和删除问题，crudState增加defaults ([a3c85d6](https://github.com/SoulLyoko/yusui-tools/commit/a3c85d6a71aea29168e2655389d9ad6a72b82493))
* **uvue:** 修复删除按钮在新增时的显示问题 ([56a2de8](https://github.com/SoulLyoko/yusui-tools/commit/56a2de8899ba63bcff710b1c15eef5952f12eba6))
* **uvue:** 修复删除按钮在新增时的显示问题 ([e12dd2e](https://github.com/SoulLyoko/yusui-tools/commit/e12dd2ec12e47cda4d57495ed37484791509ba98))


### Features

* 新增antd模拟样式 ([8148a82](https://github.com/SoulLyoko/yusui-tools/commit/8148a82cab3787b508cd73ac89069987f123dfb3))
* 新增antd模拟样式 ([acc3be9](https://github.com/SoulLyoko/yusui-tools/commit/acc3be9792648ac66c7cf228933382706e5ce9d5))
* 新增antd模拟样式 ([fe0c668](https://github.com/SoulLyoko/yusui-tools/commit/fe0c66801b07233d37835c62774f00b6bfa68bc1))
* 新增arco模拟样式 ([dc79d8b](https://github.com/SoulLyoko/yusui-tools/commit/dc79d8b576f9be92a7cfc55f09b352173d479457))
* 新增arco模拟样式 ([dc85018](https://github.com/SoulLyoko/yusui-tools/commit/dc850187a310d61e562c9ef901b5ebfbfd16ef17))
* 新增arco模拟样式 ([f6cc18b](https://github.com/SoulLyoko/yusui-tools/commit/f6cc18b7249f6c0b2feef12e35203f754f85812f))
* **components:**  新增CrudPlus组件,可以切换卡片和列表风格 ([77b0873](https://github.com/SoulLyoko/yusui-tools/commit/77b0873ab4f44212eee3069e223092c605c16476))
* **components:** 新增ProHtml组件用于显示HTML内容 ([41fe296](https://github.com/SoulLyoko/yusui-tools/commit/41fe29633ea887ff2899c466f3a983e32fab5016))
* **flow-design:** 表单配置高级编辑 ([a6997db](https://github.com/SoulLyoko/yusui-tools/commit/a6997dbfa892a9d92cb59386005b5f9beea0d130))
* **flow-design:** 表单配置支持多表单 ([79a515d](https://github.com/SoulLyoko/yusui-tools/commit/79a515df6000ce74e34a1e57fa0bef70835575de))
* **flow-design:** 参与人员配置 ([5816110](https://github.com/SoulLyoko/yusui-tools/commit/5816110e65cb1af1782532892acb224bdb8bd56f))
* **flow-design:** 打印模板、套红模板 ([889e3ce](https://github.com/SoulLyoko/yusui-tools/commit/889e3ce1140f38a0925bcb9370cf605e362885df))
* **flow-design:** 流程配置导入导出 ([fe53e58](https://github.com/SoulLyoko/yusui-tools/commit/fe53e58ec3a6b0f15873521e7a6692eb3170cf59))
* **flow-design:** 流程配置改为弹窗方式，增加一些新的配置项 ([d1bfe5c](https://github.com/SoulLyoko/yusui-tools/commit/d1bfe5c5e65f8e47c540380bdbb2e4b1565b6c64))
* **flow-form:** 审批树已选择项过多时以弹出的形式展示剩余项 ([050aee0](https://github.com/SoulLyoko/yusui-tools/commit/050aee02f0c47efe5a571aac9abb594e8cc23bf1))
* **flow-pages:** 从useProvideState中导出流程参数和按钮处理 ([e67da1d](https://github.com/SoulLyoko/yusui-tools/commit/e67da1d7a788a17ef175cb1e8383835874cd9801))
* **form-design:** 头部两侧插槽 ([416a6cc](https://github.com/SoulLyoko/yusui-tools/commit/416a6cc010d2bc8e68935705247bf8f8f5dc68d3))
* **form-design:** 修改配置合并策略，新增自定义物料库合并函数 ([560fe0a](https://github.com/SoulLyoko/yusui-tools/commit/560fe0a0139f4db6dd791bafdac669be749bc3f9))
* **form-design:** form和base配置添加样式类属性 ([05af861](https://github.com/SoulLyoko/yusui-tools/commit/05af861ceed82a1ae8e21b05e0798c87fe1e22de))
* **mix:** 新增集中管理插件 ([4cdaf2e](https://github.com/SoulLyoko/yusui-tools/commit/4cdaf2ee500d428e6f2c2d8be29c52957b287704))
* **nuxt:** nuxt layer ([668f4d7](https://github.com/SoulLyoko/yusui-tools/commit/668f4d7e151b8c3ea69247fb9f73c7b729088641))
* **nuxt:** register注册全局组件 ([65fccc8](https://github.com/SoulLyoko/yusui-tools/commit/65fccc878a8d39254ca097e8bd4512a469724b9a))
* **plugins:** 新增自动注册路由组件名称函数 ([06b7be9](https://github.com/SoulLyoko/yusui-tools/commit/06b7be9242b15b97575bd39b2065aeaf6f5731f0))
* **plugins:** indexHtml自动生成index.html的内容 ([f3f164d](https://github.com/SoulLyoko/yusui-tools/commit/f3f164d71e5418010437aad23d71c6c0fe1621ec))
* **plugins:** uni-patch ([5380056](https://github.com/SoulLyoko/yusui-tools/commit/5380056688e6ef7cb10822db763a25614f24d350))
* **pro-dict:** props的label,value,disabled属性支持深层属性 ([6585776](https://github.com/SoulLyoko/yusui-tools/commit/6585776717c33078aae1e76bcc1883252390f575))
* **pro-tree:** 支持清除，标签事件 ([8fa34b9](https://github.com/SoulLyoko/yusui-tools/commit/8fa34b90196fc6ad64f47b81b24616fd3e78c2c6))
* **request:** 加入url的类型提示 ([9670a81](https://github.com/SoulLyoko/yusui-tools/commit/9670a81adc8ada0331b76d4063e4f50807a016b4))
* **request:** 可以通过openapi生成请求接口代码 ([44d081c](https://github.com/SoulLyoko/yusui-tools/commit/44d081c35b9bb5e63e51b9af143883fc587031e4))
* **request:** axios扩展 ([e4c011a](https://github.com/SoulLyoko/yusui-tools/commit/e4c011a29bed160f3059d53e8d3a01fdfa70bf47))
* **use-crud:** 删除前可自定义提示信息 ([c79c7aa](https://github.com/SoulLyoko/yusui-tools/commit/c79c7aa43cce1ddbfc0a7502709193b9175bfee7))
* **use-crud:** 新增获取数据详情的方法 ([6e71a5c](https://github.com/SoulLyoko/yusui-tools/commit/6e71a5cc858a5c98a99c45a823fa029daff3ad70))
* **use-dict:** props的label和value属性支持深层属性 ([8864eb3](https://github.com/SoulLyoko/yusui-tools/commit/8864eb3b738bdfcb737d0cfb9018b082969f8496))
* **uvue:** uvue-form表单增加删除按钮,useCrud增加自定义成功消息 ([b1cf0b4](https://github.com/SoulLyoko/yusui-tools/commit/b1cf0b43b550ded440b2e657a27c72cf248931d3))
* **uvue:** uvue-form增加表单类型的class ([956bf38](https://github.com/SoulLyoko/yusui-tools/commit/956bf38969f1b8f19c48aca3cbf1d2e5002a21e2))
* **uvue:** uvue-form增加表单类型的class ([d4684f5](https://github.com/SoulLyoko/yusui-tools/commit/d4684f552808e3722d7d161b79f2e17235acd87d))



# [3.0.0-beta.35](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.34...v3.0.0-beta.35) (2024-04-29)


### Bug Fixes

* **flow-design:** 模板映射字段选择 ([a8e2b20](https://github.com/SoulLyoko/yusui-tools/commit/a8e2b20be837c9744f8be1dcc8bd194050829082))



# [3.0.0-beta.34](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.33...v3.0.0-beta.34) (2024-04-29)


### Bug Fixes

* **flow-design:** 模板字段映射的设置问题 ([8dbaa95](https://github.com/SoulLyoko/yusui-tools/commit/8dbaa9535877c8eaae48c316675154444237910b))



# [3.0.0-beta.33](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.32...v3.0.0-beta.33) (2024-04-29)


### Features

* **flow-design:** 打印模板、套红模板 ([889e3ce](https://github.com/SoulLyoko/yusui-tools/commit/889e3ce1140f38a0925bcb9370cf605e362885df))



# [3.0.0-beta.32](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.31...v3.0.0-beta.32) (2024-04-28)


### Features

* **flow-design:** 表单配置高级编辑 ([a6997db](https://github.com/SoulLyoko/yusui-tools/commit/a6997dbfa892a9d92cb59386005b5f9beea0d130))



# [3.0.0-beta.31](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.30...v3.0.0-beta.31) (2024-04-17)


### Bug Fixes

* 类型 ([24ff911](https://github.com/SoulLyoko/yusui-tools/commit/24ff911c1f764d358fd1b9fc83b1303f28eababd))
* type errors ([fc96fb4](https://github.com/SoulLyoko/yusui-tools/commit/fc96fb4f4c615cd3dfde0223cd2bac254130e3ae))


### Features

* **pro-tree:** 支持清除，标签事件 ([8fa34b9](https://github.com/SoulLyoko/yusui-tools/commit/8fa34b90196fc6ad64f47b81b24616fd3e78c2c6))



# [3.0.0-beta.30](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.29...v3.0.0-beta.30) (2024-04-16)


### Bug Fixes

* **components:** pro-tree样式 ([df16b50](https://github.com/SoulLyoko/yusui-tools/commit/df16b50d80507de80565bab4944de634ddc478d9))
* **types:** avue-tree types ([ccc1fe6](https://github.com/SoulLyoko/yusui-tools/commit/ccc1fe6398ca63b034705b52219951ab58b976c4))



# [3.0.0-beta.29](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.26...v3.0.0-beta.29) (2024-04-15)


### Bug Fixes

* avue types ([9e299eb](https://github.com/SoulLyoko/yusui-tools/commit/9e299ebeb2ea5b18602ca9591ecce887f5da1e03))
* **flow-design:** 监听器 ([81e6444](https://github.com/SoulLyoko/yusui-tools/commit/81e64444784a2eb1cc01a89fa667cefe57278410))
* **flow-design:** 移除传阅任务 ([84c87b0](https://github.com/SoulLyoko/yusui-tools/commit/84c87b0162962be7422d97ba57b0197082b270b7))
* **flow-design:** taskListener ([eaa70ad](https://github.com/SoulLyoko/yusui-tools/commit/eaa70ad3c74621db725a21b545532180517c928c))
* **pro-tree:** 修改Props的命名为ProTreeProps ([723ba77](https://github.com/SoulLyoko/yusui-tools/commit/723ba7760730395ee6724119394494ecf0e6c4ff))


### Features

* **flow-design:** 流程配置导入导出 ([fe53e58](https://github.com/SoulLyoko/yusui-tools/commit/fe53e58ec3a6b0f15873521e7a6692eb3170cf59))



# [3.0.0-beta.28](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.27...v3.0.0-beta.28) (2024-04-14)


### Bug Fixes

* avue types ([9e299eb](https://github.com/SoulLyoko/yusui-tools/commit/9e299ebeb2ea5b18602ca9591ecce887f5da1e03))



# [3.0.0-beta.27](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.6...v3.0.0-beta.27) (2024-04-14)


### Bug Fixes

* 表单宽度formWidth ([e2b03a6](https://github.com/SoulLyoko/yusui-tools/commit/e2b03a681f091a87d8c754e7eb68011b8709342d))
* avue types ([593d4b9](https://github.com/SoulLyoko/yusui-tools/commit/593d4b962e3a5ecd227f47dca4058558e0b4f7a1))
* **components:** 导出ProMenu ([f52e420](https://github.com/SoulLyoko/yusui-tools/commit/f52e420dc1e3a2d6e0197fcf3dddf381643c19ad))
* **components:** 提取global.d.ts ([05747b4](https://github.com/SoulLyoko/yusui-tools/commit/05747b4758a44dad29c248f87231cc64ea1dc864))
* **components:** 添加发布global.d.ts ([772ed77](https://github.com/SoulLyoko/yusui-tools/commit/772ed77a37426746ef3bebf950b1085e1d6beec7))
* **flow-design:** 监听器 ([81e6444](https://github.com/SoulLyoko/yusui-tools/commit/81e64444784a2eb1cc01a89fa667cefe57278410))
* **flow-design:** 修改按钮和表单配置的字段 ([0ca4655](https://github.com/SoulLyoko/yusui-tools/commit/0ca465513d4c2e8f9646d026518173658297ae89))
* **flow-design:** 移除传阅任务 ([84c87b0](https://github.com/SoulLyoko/yusui-tools/commit/84c87b0162962be7422d97ba57b0197082b270b7))
* **flow-design:** 组件FlowDataOptions默认可清空 ([07b7034](https://github.com/SoulLyoko/yusui-tools/commit/07b7034ed4c32171c5411c11a3a92fa15a459f3e))
* **form-design:** 优化设计器性能 ([4594b9f](https://github.com/SoulLyoko/yusui-tools/commit/4594b9fa9381fd54cad795a08d4b3175df78925d))
* **form-design:** label显示问题 ([3623357](https://github.com/SoulLyoko/yusui-tools/commit/36233570f0dacc4593f24fccf44c5960cfecead3))
* **nuxt:** 从appConfig读取组件配置 ([ba41057](https://github.com/SoulLyoko/yusui-tools/commit/ba41057a4c3bbd56f00dba6cd7804d50b228cb47))
* **pro-menu:** sub-menu点击 ([fb67b12](https://github.com/SoulLyoko/yusui-tools/commit/fb67b12c58883a0e47d502e171043e0db4d8c51d))
* **pro-tree:** 修改Props的命名为ProTreeProps ([723ba77](https://github.com/SoulLyoko/yusui-tools/commit/723ba7760730395ee6724119394494ecf0e6c4ff))
* **pro-tree:** tag回显自定义label ([65502a1](https://github.com/SoulLyoko/yusui-tools/commit/65502a112451d1a840b0b57af7cf7bd78404455a))
* **request:** 弹出退出登录确认框前先关闭 ([e3c3a64](https://github.com/SoulLyoko/yusui-tools/commit/e3c3a6485034a49d62433739513a13b4a5c33d9f))
* **request:** 设置AxiosError的status属性 ([23bffd0](https://github.com/SoulLyoko/yusui-tools/commit/23bffd05d8f0fcd2cbad040b6e5251606422ea50))
* **request:** 退出登录确认 ([e824130](https://github.com/SoulLyoko/yusui-tools/commit/e8241303aeb4dba560a0fd7a0b82ea4204e5bd61))
* **request:** 优化退出登录提示 ([a3fcff7](https://github.com/SoulLyoko/yusui-tools/commit/a3fcff781e49c9bb7f23288a2f0f6363f36f2cc9))
* **theme:** 统一弹窗按钮样式 ([35743cc](https://github.com/SoulLyoko/yusui-tools/commit/35743cc972a0b18b63378935b207258b53b7c255))
* **type/avue:** 修改helpers的导入路径 ([b0a3cfa](https://github.com/SoulLyoko/yusui-tools/commit/b0a3cfa46a22d13c7004c6cfbf18861238fdef4b))
* **types/avue:** 子表单插槽 ([1202ed1](https://github.com/SoulLyoko/yusui-tools/commit/1202ed13209b27bdc0d921b2e1f2aad2d0fc6d86))
* **use-crud:** getInfo的类型 ([642feeb](https://github.com/SoulLyoko/yusui-tools/commit/642feeb32ed60a9448ca37facb8311f6c5524fdc))
* **use-crud:** getInfo的问题 ([36f50e4](https://github.com/SoulLyoko/yusui-tools/commit/36f50e47d4768ef0daa80943bc03013e70a8df47))


### Features

* 新增arco模拟样式 ([dc79d8b](https://github.com/SoulLyoko/yusui-tools/commit/dc79d8b576f9be92a7cfc55f09b352173d479457))
* **components:** 新增ProHtml组件用于显示HTML内容 ([41fe296](https://github.com/SoulLyoko/yusui-tools/commit/41fe29633ea887ff2899c466f3a983e32fab5016))
* **flow-design:** 表单配置支持多表单 ([79a515d](https://github.com/SoulLyoko/yusui-tools/commit/79a515df6000ce74e34a1e57fa0bef70835575de))
* **flow-design:** 参与人员配置 ([5816110](https://github.com/SoulLyoko/yusui-tools/commit/5816110e65cb1af1782532892acb224bdb8bd56f))
* **flow-design:** 流程配置导入导出 ([fe53e58](https://github.com/SoulLyoko/yusui-tools/commit/fe53e58ec3a6b0f15873521e7a6692eb3170cf59))
* **flow-design:** 流程配置改为弹窗方式，增加一些新的配置项 ([d1bfe5c](https://github.com/SoulLyoko/yusui-tools/commit/d1bfe5c5e65f8e47c540380bdbb2e4b1565b6c64))
* **form-design:** 头部两侧插槽 ([416a6cc](https://github.com/SoulLyoko/yusui-tools/commit/416a6cc010d2bc8e68935705247bf8f8f5dc68d3))
* **form-design:** 修改配置合并策略，新增自定义物料库合并函数 ([560fe0a](https://github.com/SoulLyoko/yusui-tools/commit/560fe0a0139f4db6dd791bafdac669be749bc3f9))
* **form-design:** form和base配置添加样式类属性 ([05af861](https://github.com/SoulLyoko/yusui-tools/commit/05af861ceed82a1ae8e21b05e0798c87fe1e22de))
* **nuxt:** nuxt layer ([668f4d7](https://github.com/SoulLyoko/yusui-tools/commit/668f4d7e151b8c3ea69247fb9f73c7b729088641))
* **nuxt:** register注册全局组件 ([65fccc8](https://github.com/SoulLyoko/yusui-tools/commit/65fccc878a8d39254ca097e8bd4512a469724b9a))
* **pro-dict:** props的label,value,disabled属性支持深层属性 ([6585776](https://github.com/SoulLyoko/yusui-tools/commit/6585776717c33078aae1e76bcc1883252390f575))
* **request:** 可以通过openapi生成请求接口代码 ([44d081c](https://github.com/SoulLyoko/yusui-tools/commit/44d081c35b9bb5e63e51b9af143883fc587031e4))
* **use-crud:** 删除前可自定义提示信息 ([c79c7aa](https://github.com/SoulLyoko/yusui-tools/commit/c79c7aa43cce1ddbfc0a7502709193b9175bfee7))
* **use-crud:** 新增获取数据详情的方法 ([6e71a5c](https://github.com/SoulLyoko/yusui-tools/commit/6e71a5cc858a5c98a99c45a823fa029daff3ad70))
* **use-dict:** props的label和value属性支持深层属性 ([8864eb3](https://github.com/SoulLyoko/yusui-tools/commit/8864eb3b738bdfcb737d0cfb9018b082969f8496))



# [3.0.0-beta.26](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.25...v3.0.0-beta.26) (2024-04-12)


### Bug Fixes

* 表单宽度formWidth ([e2b03a6](https://github.com/SoulLyoko/yusui-tools/commit/e2b03a681f091a87d8c754e7eb68011b8709342d))
* **pro-tree:** tag回显自定义label ([65502a1](https://github.com/SoulLyoko/yusui-tools/commit/65502a112451d1a840b0b57af7cf7bd78404455a))
* **theme:** 统一弹窗按钮样式 ([35743cc](https://github.com/SoulLyoko/yusui-tools/commit/35743cc972a0b18b63378935b207258b53b7c255))



# [3.0.0-beta.25](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.24...v3.0.0-beta.25) (2024-04-08)


### Bug Fixes

* **flow-design:** 组件FlowDataOptions默认可清空 ([07b7034](https://github.com/SoulLyoko/yusui-tools/commit/07b7034ed4c32171c5411c11a3a92fa15a459f3e))
* **request:** 设置AxiosError的status属性 ([23bffd0](https://github.com/SoulLyoko/yusui-tools/commit/23bffd05d8f0fcd2cbad040b6e5251606422ea50))



# [3.0.0-beta.24](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.23...v3.0.0-beta.24) (2024-04-07)


### Features

* 新增arco模拟样式 ([dc79d8b](https://github.com/SoulLyoko/yusui-tools/commit/dc79d8b576f9be92a7cfc55f09b352173d479457))



# [3.0.0-beta.23](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.22...v3.0.0-beta.23) (2024-03-29)


### Bug Fixes

* **flow-design:** 修改按钮和表单配置的字段 ([0ca4655](https://github.com/SoulLyoko/yusui-tools/commit/0ca465513d4c2e8f9646d026518173658297ae89))



# [3.0.0-beta.22](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.21...v3.0.0-beta.22) (2024-03-29)


### Features

* **flow-design:** 表单配置支持多表单 ([79a515d](https://github.com/SoulLyoko/yusui-tools/commit/79a515df6000ce74e34a1e57fa0bef70835575de))



# [3.0.0-beta.21](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.20...v3.0.0-beta.21) (2024-03-28)


### Bug Fixes

* **form-design:** label显示问题 ([3623357](https://github.com/SoulLyoko/yusui-tools/commit/36233570f0dacc4593f24fccf44c5960cfecead3))


### Features

* **form-design:** 修改配置合并策略，新增自定义物料库合并函数 ([560fe0a](https://github.com/SoulLyoko/yusui-tools/commit/560fe0a0139f4db6dd791bafdac669be749bc3f9))
* **form-design:** form和base配置添加样式类属性 ([05af861](https://github.com/SoulLyoko/yusui-tools/commit/05af861ceed82a1ae8e21b05e0798c87fe1e22de))



# [3.0.0-beta.20](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.19...v3.0.0-beta.20) (2024-03-27)


### Bug Fixes

* **form-design:** 优化设计器性能 ([4594b9f](https://github.com/SoulLyoko/yusui-tools/commit/4594b9fa9381fd54cad795a08d4b3175df78925d))


### Features

* **flow-design:** 流程配置改为弹窗方式，增加一些新的配置项 ([d1bfe5c](https://github.com/SoulLyoko/yusui-tools/commit/d1bfe5c5e65f8e47c540380bdbb2e4b1565b6c64))



# [3.0.0-beta.19](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.18...v3.0.0-beta.19) (2024-03-24)


### Features

* **pro-dict:** props的label,value,disabled属性支持深层属性 ([6585776](https://github.com/SoulLyoko/yusui-tools/commit/6585776717c33078aae1e76bcc1883252390f575))



# [3.0.0-beta.18](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.17...v3.0.0-beta.18) (2024-03-24)


### Features

* **use-dict:** props的label和value属性支持深层属性 ([8864eb3](https://github.com/SoulLyoko/yusui-tools/commit/8864eb3b738bdfcb737d0cfb9018b082969f8496))



# [3.0.0-beta.17](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.16...v3.0.0-beta.17) (2024-03-23)


### Bug Fixes

* **components:** 添加发布global.d.ts ([772ed77](https://github.com/SoulLyoko/yusui-tools/commit/772ed77a37426746ef3bebf950b1085e1d6beec7))



# [3.0.0-beta.16](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.15...v3.0.0-beta.16) (2024-03-23)


### Bug Fixes

* avue types ([593d4b9](https://github.com/SoulLyoko/yusui-tools/commit/593d4b962e3a5ecd227f47dca4058558e0b4f7a1))
* **components:** 提取global.d.ts ([05747b4](https://github.com/SoulLyoko/yusui-tools/commit/05747b4758a44dad29c248f87231cc64ea1dc864))



# [3.0.0-beta.15](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.14...v3.0.0-beta.15) (2024-03-21)


### Bug Fixes

* **use-crud:** getInfo的类型 ([642feeb](https://github.com/SoulLyoko/yusui-tools/commit/642feeb32ed60a9448ca37facb8311f6c5524fdc))



# [3.0.0-beta.14](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.13...v3.0.0-beta.14) (2024-03-20)


### Features

* **flow-design:** 参与人员配置 ([5816110](https://github.com/SoulLyoko/yusui-tools/commit/5816110e65cb1af1782532892acb224bdb8bd56f))
* **form-design:** 头部两侧插槽 ([416a6cc](https://github.com/SoulLyoko/yusui-tools/commit/416a6cc010d2bc8e68935705247bf8f8f5dc68d3))



# [3.0.0-beta.13](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.12...v3.0.0-beta.13) (2024-03-19)


### Bug Fixes

* **request:** 优化退出登录提示 ([a3fcff7](https://github.com/SoulLyoko/yusui-tools/commit/a3fcff781e49c9bb7f23288a2f0f6363f36f2cc9))
* **use-crud:** getInfo的问题 ([36f50e4](https://github.com/SoulLyoko/yusui-tools/commit/36f50e47d4768ef0daa80943bc03013e70a8df47))



# [3.0.0-beta.12](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2024-03-18)


### Bug Fixes

* **components:** 导出ProMenu ([f52e420](https://github.com/SoulLyoko/yusui-tools/commit/f52e420dc1e3a2d6e0197fcf3dddf381643c19ad))



# [3.0.0-beta.11](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2024-03-18)


### Bug Fixes

* **request:** 弹出退出登录确认框前先关闭 ([e3c3a64](https://github.com/SoulLyoko/yusui-tools/commit/e3c3a6485034a49d62433739513a13b4a5c33d9f))


### Features

* **components:** 新增ProHtml组件用于显示HTML内容 ([41fe296](https://github.com/SoulLyoko/yusui-tools/commit/41fe29633ea887ff2899c466f3a983e32fab5016))
* **nuxt:** register注册全局组件 ([65fccc8](https://github.com/SoulLyoko/yusui-tools/commit/65fccc878a8d39254ca097e8bd4512a469724b9a))



# [3.0.0-beta.10](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2024-03-18)


### Bug Fixes

* **nuxt:** 从appConfig读取组件配置 ([ba41057](https://github.com/SoulLyoko/yusui-tools/commit/ba41057a4c3bbd56f00dba6cd7804d50b228cb47))



# [3.0.0-beta.9](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2024-03-18)


### Bug Fixes

* **pro-menu:** sub-menu点击 ([fb67b12](https://github.com/SoulLyoko/yusui-tools/commit/fb67b12c58883a0e47d502e171043e0db4d8c51d))



# [3.0.0-beta.8](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2024-03-18)


### Features

* **nuxt:** nuxt layer ([668f4d7](https://github.com/SoulLyoko/yusui-tools/commit/668f4d7e151b8c3ea69247fb9f73c7b729088641))
* **request:** 可以通过openapi生成请求接口代码 ([44d081c](https://github.com/SoulLyoko/yusui-tools/commit/44d081c35b9bb5e63e51b9af143883fc587031e4))
* **use-crud:** 新增获取数据详情的方法 ([6e71a5c](https://github.com/SoulLyoko/yusui-tools/commit/6e71a5cc858a5c98a99c45a823fa029daff3ad70))



# [3.0.0-beta.7](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.5...v3.0.0-beta.7) (2024-03-13)


### Bug Fixes

* 修复全局组件类型在nuxt失效的问题 ([b0e070c](https://github.com/SoulLyoko/yusui-tools/commit/b0e070c17761699a712c0f72fdc0515530ead0b4))
* **request:** 退出登录确认 ([e824130](https://github.com/SoulLyoko/yusui-tools/commit/e8241303aeb4dba560a0fd7a0b82ea4204e5bd61))
* **type/avue:** 修改helpers的导入路径 ([b0a3cfa](https://github.com/SoulLyoko/yusui-tools/commit/b0a3cfa46a22d13c7004c6cfbf18861238fdef4b))
* **types/avue:** 子表单插槽 ([1202ed1](https://github.com/SoulLyoko/yusui-tools/commit/1202ed13209b27bdc0d921b2e1f2aad2d0fc6d86))


### Features

* **request:** 加入url的类型提示 ([9670a81](https://github.com/SoulLyoko/yusui-tools/commit/9670a81adc8ada0331b76d4063e4f50807a016b4))
* **use-crud:** 删除前可自定义提示信息 ([c79c7aa](https://github.com/SoulLyoko/yusui-tools/commit/c79c7aa43cce1ddbfc0a7502709193b9175bfee7))



# [3.0.0-beta.6](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.2...v3.0.0-beta.6) (2024-03-10)


### Bug Fixes

* 修复全局组件类型在nuxt失效的问题 ([b0e070c](https://github.com/SoulLyoko/yusui-tools/commit/b0e070c17761699a712c0f72fdc0515530ead0b4))
* **avue-patch:** 适配avue3.3.2 ([de8cf64](https://github.com/SoulLyoko/yusui-tools/commit/de8cf64a7cae31cbeea9a29c12c2f5dbd3f28d0e))
* **ep-menu:** 修复纵向折叠时子菜单不显示的问题 ([2226378](https://github.com/SoulLyoko/yusui-tools/commit/2226378bdd90a67fa98af2cfdd1ae41b78ca39f7))
* **ep-menu:** 修复纵向折叠时子菜单不显示的问题 ([b5e6278](https://github.com/SoulLyoko/yusui-tools/commit/b5e6278cb53128ee25d69d31a72963694a237edd))
* **flow-form:** 非待办时禁用表单 ([58c1e17](https://github.com/SoulLyoko/yusui-tools/commit/58c1e1778ab0078053628ea7fa60bb4b9a142bc1))
* **flow-form:** 修复在onBeforeSubmit修改表单值导致审批窗口重新加载的问题 ([8088646](https://github.com/SoulLyoko/yusui-tools/commit/8088646c11222f20d8bd30ec78906c92c9f685e8))
* **flow-form:** 修复afterGetDetail不触发的问题 ([5055e72](https://github.com/SoulLyoko/yusui-tools/commit/5055e727447dc0dba007db0575728ed0e596e66a))
* **flow-form:** 优化移动端滑动 ([fb318af](https://github.com/SoulLyoko/yusui-tools/commit/fb318af059df8b695472daf9438fd39f9982f415))
* **flow-pages:** 修复表格配置合并 ([c85b105](https://github.com/SoulLyoko/yusui-tools/commit/c85b1059d7fe3bae0fd2b618b5c6d76397554b4a))
* **form-design:** 组件不可见时调低透明度 ([29d7ff4](https://github.com/SoulLyoko/yusui-tools/commit/29d7ff4d69fd000a2f774ba2482f9a76b28cbc51))
* **IconSelect:** 处理collections为匹配方式时的问题 ([e4b6da9](https://github.com/SoulLyoko/yusui-tools/commit/e4b6da935d9dbcbde20086344097945d3e4b3450))
* **IconSelect:** tabs遵循collections的排序 ([71a294f](https://github.com/SoulLyoko/yusui-tools/commit/71a294f1e568657daba57b499b30b261632232f3))
* **mix:** 修复uno配置解析js文件会导致vue-dev-tools报错的问题 ([1f02f3a](https://github.com/SoulLyoko/yusui-tools/commit/1f02f3a74121a57aa323ac4f88691970eb147a47))
* **mix:** 虚拟模块的导入改为由外部完成 ([0155559](https://github.com/SoulLyoko/yusui-tools/commit/015555932d231ec885902d16f414e1d87a649155))
* **mix:** 移除flow-pages ([8b829e7](https://github.com/SoulLyoko/yusui-tools/commit/8b829e77a4855b5193041f53f2de294affa91061))
* **request:** 移除vue-request的导出 ([a80120e](https://github.com/SoulLyoko/yusui-tools/commit/a80120eff5e7cc429a3a61b7b041d093a777cb33))
* **types:** 修复avue类型的导入 ([195d889](https://github.com/SoulLyoko/yusui-tools/commit/195d88993441d42ac33c98fb526e31845ad5a4ab))
* **useDict:** 内部实现toValue ([6040b4a](https://github.com/SoulLyoko/yusui-tools/commit/6040b4acec5dcf6b802837c063b18d994114b0c8))
* **useDict:** 修复dicData丢失响应的问题 ([2391056](https://github.com/SoulLyoko/yusui-tools/commit/2391056b23dddf2fb01f86db0d373af43db022b9))
* **uvue:** 提交和删除问题，crudState增加defaults ([a3c85d6](https://github.com/SoulLyoko/yusui-tools/commit/a3c85d6a71aea29168e2655389d9ad6a72b82493))
* **uvue:** 修复删除按钮在新增时的显示问题 ([56a2de8](https://github.com/SoulLyoko/yusui-tools/commit/56a2de8899ba63bcff710b1c15eef5952f12eba6))
* **uvue:** 修复删除按钮在新增时的显示问题 ([e12dd2e](https://github.com/SoulLyoko/yusui-tools/commit/e12dd2ec12e47cda4d57495ed37484791509ba98))


### Features

* 新增antd模拟样式 ([8148a82](https://github.com/SoulLyoko/yusui-tools/commit/8148a82cab3787b508cd73ac89069987f123dfb3))
* 新增antd模拟样式 ([acc3be9](https://github.com/SoulLyoko/yusui-tools/commit/acc3be9792648ac66c7cf228933382706e5ce9d5))
* 新增antd模拟样式 ([fe0c668](https://github.com/SoulLyoko/yusui-tools/commit/fe0c66801b07233d37835c62774f00b6bfa68bc1))
* 新增arco模拟样式 ([dc85018](https://github.com/SoulLyoko/yusui-tools/commit/dc850187a310d61e562c9ef901b5ebfbfd16ef17))
* 新增arco模拟样式 ([f6cc18b](https://github.com/SoulLyoko/yusui-tools/commit/f6cc18b7249f6c0b2feef12e35203f754f85812f))
* **components:**  新增CrudPlus组件,可以切换卡片和列表风格 ([77b0873](https://github.com/SoulLyoko/yusui-tools/commit/77b0873ab4f44212eee3069e223092c605c16476))
* **flow-form:** 审批树已选择项过多时以弹出的形式展示剩余项 ([050aee0](https://github.com/SoulLyoko/yusui-tools/commit/050aee02f0c47efe5a571aac9abb594e8cc23bf1))
* **flow-pages:** 从useProvideState中导出流程参数和按钮处理 ([e67da1d](https://github.com/SoulLyoko/yusui-tools/commit/e67da1d7a788a17ef175cb1e8383835874cd9801))
* **mix:** 新增集中管理插件 ([4cdaf2e](https://github.com/SoulLyoko/yusui-tools/commit/4cdaf2ee500d428e6f2c2d8be29c52957b287704))
* **plugins:** 新增自动注册路由组件名称函数 ([06b7be9](https://github.com/SoulLyoko/yusui-tools/commit/06b7be9242b15b97575bd39b2065aeaf6f5731f0))
* **plugins:** indexHtml自动生成index.html的内容 ([f3f164d](https://github.com/SoulLyoko/yusui-tools/commit/f3f164d71e5418010437aad23d71c6c0fe1621ec))
* **plugins:** uni-patch ([5380056](https://github.com/SoulLyoko/yusui-tools/commit/5380056688e6ef7cb10822db763a25614f24d350))
* **request:** 加入url的类型提示 ([9670a81](https://github.com/SoulLyoko/yusui-tools/commit/9670a81adc8ada0331b76d4063e4f50807a016b4))
* **request:** axios扩展 ([e4c011a](https://github.com/SoulLyoko/yusui-tools/commit/e4c011a29bed160f3059d53e8d3a01fdfa70bf47))
* **uvue:** uvue-form表单增加删除按钮,useCrud增加自定义成功消息 ([b1cf0b4](https://github.com/SoulLyoko/yusui-tools/commit/b1cf0b43b550ded440b2e657a27c72cf248931d3))
* **uvue:** uvue-form增加表单类型的class ([956bf38](https://github.com/SoulLyoko/yusui-tools/commit/956bf38969f1b8f19c48aca3cbf1d2e5002a21e2))
* **uvue:** uvue-form增加表单类型的class ([d4684f5](https://github.com/SoulLyoko/yusui-tools/commit/d4684f552808e3722d7d161b79f2e17235acd87d))



# [3.0.0-beta.5](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2024-03-09)


### Bug Fixes

* **mix:** 修复uno配置解析js文件会导致vue-dev-tools报错的问题 ([1f02f3a](https://github.com/SoulLyoko/yusui-tools/commit/1f02f3a74121a57aa323ac4f88691970eb147a47))


### Features

* **plugins:** indexHtml自动生成index.html的内容 ([f3f164d](https://github.com/SoulLyoko/yusui-tools/commit/f3f164d71e5418010437aad23d71c6c0fe1621ec))



# [3.0.0-beta.4](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2024-03-08)


### Bug Fixes

* **mix:** 移除flow-pages ([8b829e7](https://github.com/SoulLyoko/yusui-tools/commit/8b829e77a4855b5193041f53f2de294affa91061))
* **request:** 移除vue-request的导出 ([a80120e](https://github.com/SoulLyoko/yusui-tools/commit/a80120eff5e7cc429a3a61b7b041d093a777cb33))



# [3.0.0-beta.3](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2024-03-07)


### Features

* **request:** axios扩展 ([e4c011a](https://github.com/SoulLyoko/yusui-tools/commit/e4c011a29bed160f3059d53e8d3a01fdfa70bf47))



# [3.0.0-beta.2](https://github.com/SoulLyoko/yusui-tools/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2024-03-07)


### Bug Fixes

* **mix:** 虚拟模块的导入改为由外部完成 ([0155559](https://github.com/SoulLyoko/yusui-tools/commit/015555932d231ec885902d16f414e1d87a649155))


### Features

* **plugins:** 新增自动注册路由组件名称函数 ([06b7be9](https://github.com/SoulLyoko/yusui-tools/commit/06b7be9242b15b97575bd39b2065aeaf6f5731f0))



# [3.0.0-beta.1](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.9...v3.0.0-beta.1) (2024-03-07)


### Bug Fixes

* **avue-patch:** 适配avue3.3.2 ([de8cf64](https://github.com/SoulLyoko/yusui-tools/commit/de8cf64a7cae31cbeea9a29c12c2f5dbd3f28d0e))
* **ep-menu:** 修复纵向折叠时子菜单不显示的问题 ([2226378](https://github.com/SoulLyoko/yusui-tools/commit/2226378bdd90a67fa98af2cfdd1ae41b78ca39f7))
* **uvue:** 修复删除按钮在新增时的显示问题 ([56a2de8](https://github.com/SoulLyoko/yusui-tools/commit/56a2de8899ba63bcff710b1c15eef5952f12eba6))


### Features

* 新增antd模拟样式 ([8148a82](https://github.com/SoulLyoko/yusui-tools/commit/8148a82cab3787b508cd73ac89069987f123dfb3))
* 新增antd模拟样式 ([acc3be9](https://github.com/SoulLyoko/yusui-tools/commit/acc3be9792648ac66c7cf228933382706e5ce9d5))
* 新增antd模拟样式 ([fe0c668](https://github.com/SoulLyoko/yusui-tools/commit/fe0c66801b07233d37835c62774f00b6bfa68bc1))
* 新增arco模拟样式 ([dc85018](https://github.com/SoulLyoko/yusui-tools/commit/dc850187a310d61e562c9ef901b5ebfbfd16ef17))
* 新增arco模拟样式 ([f6cc18b](https://github.com/SoulLyoko/yusui-tools/commit/f6cc18b7249f6c0b2feef12e35203f754f85812f))
* **components:**  新增CrudPlus组件,可以切换卡片和列表风格 ([77b0873](https://github.com/SoulLyoko/yusui-tools/commit/77b0873ab4f44212eee3069e223092c605c16476))
* **mix:** 新增集中管理插件 ([4cdaf2e](https://github.com/SoulLyoko/yusui-tools/commit/4cdaf2ee500d428e6f2c2d8be29c52957b287704))
* **uvue:** uvue-form增加表单类型的class ([956bf38](https://github.com/SoulLyoko/yusui-tools/commit/956bf38969f1b8f19c48aca3cbf1d2e5002a21e2))



## [2.0.9](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.8...v2.0.9) (2024-02-21)


### Bug Fixes

* **IconSelect:** 处理collections为匹配方式时的问题 ([e4b6da9](https://github.com/SoulLyoko/yusui-tools/commit/e4b6da935d9dbcbde20086344097945d3e4b3450))
* **useDict:** 内部实现toValue ([6040b4a](https://github.com/SoulLyoko/yusui-tools/commit/6040b4acec5dcf6b802837c063b18d994114b0c8))



## [2.0.8](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.7...v2.0.8) (2024-02-21)


### Bug Fixes

* **flow-form:** 非待办时禁用表单 ([58c1e17](https://github.com/SoulLyoko/yusui-tools/commit/58c1e1778ab0078053628ea7fa60bb4b9a142bc1))
* **flow-form:** 修复在onBeforeSubmit修改表单值导致审批窗口重新加载的问题 ([8088646](https://github.com/SoulLyoko/yusui-tools/commit/8088646c11222f20d8bd30ec78906c92c9f685e8))
* **flow-form:** 修复afterGetDetail不触发的问题 ([5055e72](https://github.com/SoulLyoko/yusui-tools/commit/5055e727447dc0dba007db0575728ed0e596e66a))
* **IconSelect:** tabs遵循collections的排序 ([71a294f](https://github.com/SoulLyoko/yusui-tools/commit/71a294f1e568657daba57b499b30b261632232f3))
* **useDict:** 修复dicData丢失响应的问题 ([2391056](https://github.com/SoulLyoko/yusui-tools/commit/2391056b23dddf2fb01f86db0d373af43db022b9))


### Features

* **flow-form:** 审批树已选择项过多时以弹出的形式展示剩余项 ([050aee0](https://github.com/SoulLyoko/yusui-tools/commit/050aee02f0c47efe5a571aac9abb594e8cc23bf1))
* **flow-pages:** 从useProvideState中导出流程参数和按钮处理 ([e67da1d](https://github.com/SoulLyoko/yusui-tools/commit/e67da1d7a788a17ef175cb1e8383835874cd9801))



## [2.0.7](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.6...v2.0.7) (2024-01-29)


### Bug Fixes

* **flow-form:** 优化移动端滑动 ([fb318af](https://github.com/SoulLyoko/yusui-tools/commit/fb318af059df8b695472daf9438fd39f9982f415))
* **flow-pages:** 修复表格配置合并 ([c85b105](https://github.com/SoulLyoko/yusui-tools/commit/c85b1059d7fe3bae0fd2b618b5c6d76397554b4a))
* **form-design:** 组件不可见时调低透明度 ([29d7ff4](https://github.com/SoulLyoko/yusui-tools/commit/29d7ff4d69fd000a2f774ba2482f9a76b28cbc51))



## [2.0.6](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.4...v2.0.6) (2024-01-09)


### Bug Fixes

* **ep-menu:** 修复纵向折叠时子菜单不显示的问题 ([b5e6278](https://github.com/SoulLyoko/yusui-tools/commit/b5e6278cb53128ee25d69d31a72963694a237edd))
* **uvue:** 提交和删除问题，crudState增加defaults ([a3c85d6](https://github.com/SoulLyoko/yusui-tools/commit/a3c85d6a71aea29168e2655389d9ad6a72b82493))
* **uvue:** 修复删除按钮在新增时的显示问题 ([e12dd2e](https://github.com/SoulLyoko/yusui-tools/commit/e12dd2ec12e47cda4d57495ed37484791509ba98))


### Features

* **uvue:** uvue-form增加表单类型的class ([d4684f5](https://github.com/SoulLyoko/yusui-tools/commit/d4684f552808e3722d7d161b79f2e17235acd87d))



## [2.0.5](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.4...v2.0.5) (2023-12-21)


### Bug Fixes

* **uvue:** 提交和删除问题，crudState增加defaults ([a3c85d6](https://github.com/SoulLyoko/yusui-tools/commit/a3c85d6a71aea29168e2655389d9ad6a72b82493))



## [2.0.4](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.3...v2.0.4) (2023-12-19)


### Features

* **uvue:** uvue-form表单增加删除按钮,useCrud增加自定义成功消息 ([b1cf0b4](https://github.com/SoulLyoko/yusui-tools/commit/b1cf0b43b550ded440b2e657a27c72cf248931d3))



## [2.0.3](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.2...v2.0.3) (2023-12-12)


### Bug Fixes

* **types:** 修复avue类型的导入 ([195d889](https://github.com/SoulLyoko/yusui-tools/commit/195d88993441d42ac33c98fb526e31845ad5a4ab))


### Features

* **plugins:** uni-patch ([5380056](https://github.com/SoulLyoko/yusui-tools/commit/5380056688e6ef7cb10822db763a25614f24d350))



## [2.0.2](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.1...v2.0.2) (2023-12-12)


### Bug Fixes

* **types:** 修改ElSize导入 ([486c93f](https://github.com/SoulLyoko/yusui-tools/commit/486c93f198789db728323c7c4274a1c1a2610546))



## [2.0.1](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0...v2.0.1) (2023-12-12)


### Bug Fixes

* **build:** 修复打包后路径问题 ([1b12e49](https://github.com/SoulLyoko/yusui-tools/commit/1b12e49d5e6a82bf7ac7ea296d5e844cb8293472))



# [2.0.0](https://github.com/SoulLyoko/yusui-tools/compare/f2156f86115f76db101f3270f9237c6acf4ee642...v2.0.0) (2023-12-12)



## Previous Changelogs

### 2.x-beta

See [2.x-beta changelog](./changelogs/CHANGELOG-2-beta.md)

### 1.x

See [1.x changelog](./changelogs/CHANGELOG-1.md)
