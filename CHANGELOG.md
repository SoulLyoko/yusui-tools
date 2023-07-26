# [2.0.0-beta.64](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.62...v2.0.0-beta.64) (2023-07-26)


### Bug Fixes

* **flow-pages:** 修复一些接口返回的类型 ([3a2cd6d](https://github.com/SoulLyoko/yusui-tools/commit/3a2cd6de5b25293cebfe4e14927b9318f569e062))
* **flow-pages:** 修改内部引用路径 ([fdab467](https://github.com/SoulLyoko/yusui-tools/commit/fdab4675a0e67993557234178857bff2669fa506))
* **utils:** enumToDic考虑输入为空的情况 ([a6e6728](https://github.com/SoulLyoko/yusui-tools/commit/a6e672869cd9d82e5b6d00886209565983f649a0))


### Features

* **flow-pages:** 流程表单页PageFlowForm ([550181f](https://github.com/SoulLyoko/yusui-tools/commit/550181f002c533632f22d8dfe344e2113fa40b3d))
* **flow-pages:** useXXXApi参数变更，导出api，页面组件统一加前缀 ([07a9399](https://github.com/SoulLyoko/yusui-tools/commit/07a9399c6cce84f194958e42980f6a1c0bf0792a))



# [2.0.0-beta.63](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.62...v2.0.0-beta.63) (2023-07-21)


### Bug Fixes

* **utils:** enumToDic考虑输入为空的情况 ([a6e6728](https://github.com/SoulLyoko/yusui-tools/commit/a6e672869cd9d82e5b6d00886209565983f649a0))


### Features

* **flow-pages:** useXXXApi参数变更，导出api，页面组件统一加前缀 ([87da313](https://github.com/SoulLyoko/yusui-tools/commit/87da3130e1ce2ea5c65985b47454c0431aa55ad4))

### BREAKING CHANGE
- 为适应需要调用api的其它场景，useXXXApi由从配置获取请求实例变更为传入请求实例:
`const { request } = useConfigProvider()`->`(request: requestInstance)`
- 工作流页面组件统一加前缀`Page`:
`<FlowWorkbench>`->`<PageFlowWorkbench>`


# [2.0.0-beta.62](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.61...v2.0.0-beta.62) (2023-07-21)


### Bug Fixes

* **flow-pages:** 流程设计页面重复请求 ([730d940](https://github.com/SoulLyoko/yusui-tools/commit/730d9401b73c43f1378c0346431cdbd2c648d15a))


### Features

* **flow-pages:** 工作台页面增加流程分类 ([285779c](https://github.com/SoulLyoko/yusui-tools/commit/285779c9ffa558fdbfd620184f1623437ec1246f))
* **flow-pages:** 自定义表单 ([b5dc73b](https://github.com/SoulLyoko/yusui-tools/commit/b5dc73b2ff1cc1bd476c59a51f12104f81497d9e))
* **flow-pages:** 自定义流程表单，标签页属性，扩展按钮 ([bf0b751](https://github.com/SoulLyoko/yusui-tools/commit/bf0b751c844257617a3590a5561156393c30ae2f))


### Performance Improvements

* **components:** 优化组件，添加测试 ([47cc89e](https://github.com/SoulLyoko/yusui-tools/commit/47cc89ea283c9f6aa96da27d17ad0035b5bd306f))



# [2.0.0-beta.61](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.60...v2.0.0-beta.61) (2023-07-11)


### Bug Fixes

* **flow-pages:** 流程弹窗表单添加样式类 ([3bb7da4](https://github.com/SoulLyoko/yusui-tools/commit/3bb7da4026fd8e1b952dfc61adf9286f72bb843c))


### Features

* **flow-pages:** 建表设计-导入已有表 ([f130232](https://github.com/SoulLyoko/yusui-tools/commit/f1302324e33a795bd784886ef7ac044c726063e2))



# [2.0.0-beta.60](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.59...v2.0.0-beta.60) (2023-07-10)


### Bug Fixes

* **flow-pages:** 流程设计选择模板超长滚动，流程弹窗关闭时销毁 ([58ba142](https://github.com/SoulLyoko/yusui-tools/commit/58ba14251ff4534e856d6b734bef32c5120035cd))


### Features

* **utils:** arrayToMap ([f9f7136](https://github.com/SoulLyoko/yusui-tools/commit/f9f7136b364e0911c2cf68086ec9baf380951785))



# [2.0.0-beta.59](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.58...v2.0.0-beta.59) (2023-07-06)


### Bug Fixes

* **flow-pages:** 流程设计偶现表单和模型数据被清空覆盖 ([866069e](https://github.com/SoulLyoko/yusui-tools/commit/866069ed266d7de4c261625fb9974e650c51dd00))
* **flow-pages:** 人员配置选择后保留一个`idVal` ([0757c70](https://github.com/SoulLyoko/yusui-tools/commit/0757c708ae2d274f0400e53d18c29d52b4af92fe))



# [2.0.0-beta.58](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.57...v2.0.0-beta.58) (2023-07-04)


### Bug Fixes

* **flow-pages:** 意见字段`comment`改为`handleComment` ([9bfe42c](https://github.com/SoulLyoko/yusui-tools/commit/9bfe42c0ef7793ccbb70597a8f3347d7d8964c94))



# [2.0.0-beta.57](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.56...v2.0.0-beta.57) (2023-07-03)


### Features

* **flow-design:** 新增传阅任务节点`circulateTask` ([9dd4ffc](https://github.com/SoulLyoko/yusui-tools/commit/9dd4ffc237d1ee9e2e6d459a21a162e2b9fa032e))



# [2.0.0-beta.56](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.55...v2.0.0-beta.56) (2023-06-28)


### Bug Fixes

* **flow-pages:** 修改默认配置 ([e2185ad](https://github.com/SoulLyoko/yusui-tools/commit/e2185ade03d4630badf21609107b53a7e4196470))



# [2.0.0-beta.55](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.54...v2.0.0-beta.55) (2023-06-27)


### Bug Fixes

* **flow-pages:** 默认配置中使用异步组件 ([3d3349c](https://github.com/SoulLyoko/yusui-tools/commit/3d3349ca39b7b6d7440222df27b3093f8c2367ff))
* **types-avue:** 修改menu-btn的插槽类型 ([d06ac0a](https://github.com/SoulLyoko/yusui-tools/commit/d06ac0a3d9cb3cfaa933b601b6c8583146fdd630))



# [2.0.0-beta.54](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.53...v2.0.0-beta.54) (2023-06-27)


### Bug Fixes

* **flow-design:** 禁用自动布局插件 ([f7abf86](https://github.com/SoulLyoko/yusui-tools/commit/f7abf86e42031b6ea3b8ea6813e10b50fae3c803))


### Features

* **avue-patch:** 新增补丁`fixMenuBtnSlot` ([50e884d](https://github.com/SoulLyoko/yusui-tools/commit/50e884d5440bb44883e20046833480699243a287))
* **flow-pages:** 新增删除流程的接口 ([7b0835c](https://github.com/SoulLyoko/yusui-tools/commit/7b0835c770b1f0890baa17fde74337150c7641a8))



# [2.0.0-beta.53](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.52...v2.0.0-beta.53) (2023-06-27)


### Bug Fixes

* **flow:** 动态审批人配置 ([0cb727a](https://github.com/SoulLyoko/yusui-tools/commit/0cb727a594776eef538001376c1202f623602357))



# [2.0.0-beta.52](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.51...v2.0.0-beta.52) (2023-06-24)


### Features

* **components:** 新增input-tree组件 ([7f1a3d5](https://github.com/SoulLyoko/yusui-tools/commit/7f1a3d5a0dca3aa7a9037790d1103eccb13f4407))



# [2.0.0-beta.51](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.50...v2.0.0-beta.51) (2023-06-18)


### Bug Fixes

* **icon-select:** 修复可能导致错误的代码 ([210cf00](https://github.com/SoulLyoko/yusui-tools/commit/210cf00d1d4619dab1a594f988b9b76b051663b1))



# [2.0.0-beta.50](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.49...v2.0.0-beta.50) (2023-06-18)


### Features

* **icon-select:** 支持自定义图标集 ([6457fdf](https://github.com/SoulLyoko/yusui-tools/commit/6457fdf112c85b078e1eb3f5e2bbc267ec8077a2))



# [2.0.0-beta.49](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.48...v2.0.0-beta.49) (2023-06-17)


### Bug Fixes

* 回滚 `@vueuse/core` 到 `v10.1.2` ([721c2dc](https://github.com/SoulLyoko/yusui-tools/commit/721c2dc0ef8da6b668668a1c36f6c04c09004675))



# [2.0.0-beta.48](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.47...v2.0.0-beta.48) (2023-06-17)


### Bug Fixes

* **flow-pages:** 支持`flow-form`的tabs配置 ([a97d335](https://github.com/SoulLyoko/yusui-tools/commit/a97d335088851d0839068e8a2f87734ee4724f57))
* type errors ([80d504e](https://github.com/SoulLyoko/yusui-tools/commit/80d504eaeeddf6b2098f65fba101a1d52d8b4856))



# [2.0.0-beta.47](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.46...v2.0.0-beta.47) (2023-06-16)


### Features

* **flow-design:** add change node type menu ([00ac153](https://github.com/SoulLyoko/yusui-tools/commit/00ac153bbcc184ea37cd58f5c3f84e997e99925b))
* **flow-pages:** 审批人选择树`approval-tree`,绿色通道 ([8aee512](https://github.com/SoulLyoko/yusui-tools/commit/8aee5125ea6cc9e436a629e17209dbd60000edf7))
* **flow-pages:** 传阅功能 ([19956f8](https://github.com/SoulLyoko/yusui-tools/commit/19956f85e074f96707bd305c3398256a7f42583d))


### Performance Improvements

* **flow-form:** 优化`approval-tree` ([163a754](https://github.com/SoulLyoko/yusui-tools/commit/163a75446bed7cefd2755f264039d449c275c069))



# [2.0.0-beta.46](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.45...v2.0.0-beta.46) (2023-06-12)


### Bug Fixes

* **flow-design:** 选项数据`dataOptions`处理 ([407bb89](https://github.com/SoulLyoko/yusui-tools/commit/407bb892309090c7512a8069e11e34c4d7126b46))
* **flow-design:** `FlowModeler`,`FlowViewer`合并为`FlowDesign` ([09688d6](https://github.com/SoulLyoko/yusui-tools/commit/09688d6e08501e242899fa32c44af4131dd782b9))
* **types-avue:** `column`属性在事件中为一个对象 ([cfba8d1](https://github.com/SoulLyoko/yusui-tools/commit/cfba8d14b8f4f139d0c19cbceab07fe8e2124a1f))



# [2.0.0-beta.45](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.44...v2.0.0-beta.45) (2023-06-06)


### Bug Fixes

* **flow-design:** 新增选项数据属性`dataOptions` ([aaba271](https://github.com/SoulLyoko/yusui-tools/commit/aaba27122c4af2a7beb3251f8e8cccda5be6bc98))
* **flow-pages:** 增加一些搜索的属性 ([946a116](https://github.com/SoulLyoko/yusui-tools/commit/946a116901ea592f96f27ad9bd3e32119d0a02d6))
* **form-design:** 远程字典时清空dicData ([5d24619](https://github.com/SoulLyoko/yusui-tools/commit/5d24619d584e984f728a3c2e73c99463262b275d))



# [2.0.0-beta.44](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.43...v2.0.0-beta.44) (2023-05-30)


### Bug Fixes

* **flow-pages:** flowDesign字段数据 ([d365f19](https://github.com/SoulLyoko/yusui-tools/commit/d365f19a2858e4876b04a11d378ab58ae06b7eba))
* **plugins:** 修改兼容图标 ([94c7bf5](https://github.com/SoulLyoko/yusui-tools/commit/94c7bf5ce10cf7dc97c0e8dd0b1fcb10ca14ab26))



# [2.0.0-beta.43](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.42...v2.0.0-beta.43) (2023-05-26)



# [2.0.0-beta.42](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.41...v2.0.0-beta.42) (2023-05-25)


### Features

* 增加非谷歌内核兼容提示 ([39d72ab](https://github.com/SoulLyoko/yusui-tools/commit/39d72ab7435018ab5b7cb82e53a4a099be4e7437))



# [2.0.0-beta.41](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.40...v2.0.0-beta.41) (2023-05-25)


### Bug Fixes

* **flow-form:** 配置支持函数形式的`uploadHeaders` ([befc5a0](https://github.com/SoulLyoko/yusui-tools/commit/befc5a030f335e98c90e8f22ec2567a8bd1e7192))


### Features

* **flow-pages:** `flow-form`新增`fileIds`字段 ([31e8495](https://github.com/SoulLyoko/yusui-tools/commit/31e8495ffd215183be39a1dc73354d20a9c4f492))



# [2.0.0-beta.40](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.39...v2.0.0-beta.40) (2023-05-16)


### Bug Fixes

* **plusing-env-dts:** 写入文件错误 ([dcd111a](https://github.com/SoulLyoko/yusui-tools/commit/dcd111a292689b3a141484a1379301bbf36c119e))
* **types-avue:** 更新一些类型 ([04165b7](https://github.com/SoulLyoko/yusui-tools/commit/04165b76e7a5d32c015292291b7a30d217c3b30d))



# [2.0.0-beta.39](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.38...v2.0.0-beta.39) (2023-05-15)


### Bug Fixes

* **plugins-env-dts:** 从配置中读取dts的生成路径 ([84b7e3b](https://github.com/SoulLyoko/yusui-tools/commit/84b7e3b46634fba7c7018fb47093e7565fe667cb))
* **types-avue:** 新增`TableRowData`, `FormRowData` ([d18e9f2](https://github.com/SoulLyoko/yusui-tools/commit/d18e9f2bf7be458ed9451aad3ddc2a832994652e))
* **types-avue:** 修复`PropKeyType`错误 ([701c514](https://github.com/SoulLyoko/yusui-tools/commit/701c5149c9179902d9dae3a698a804694dda20b1))



# [2.0.0-beta.38](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.37...v2.0.0-beta.38) (2023-05-15)


### Bug Fixes

* **flow:** 修复类型错误 ([fbb17b7](https://github.com/SoulLyoko/yusui-tools/commit/fbb17b7c5a18b407180cbce14cf090368be03208))
* **types:** 支持Avue组件作用域插槽类型 ([1126c43](https://github.com/SoulLyoko/yusui-tools/commit/1126c43b3ab85b47bc51e48abb59af3016308d99))
* **use-crud:** 更新Avue类型 ([b0c0c71](https://github.com/SoulLyoko/yusui-tools/commit/b0c0c710722d31753aca09205c8aac9ca1a56c50))



# [2.0.0-beta.37](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.36...v2.0.0-beta.37) (2023-05-12)


### Bug Fixes

* **flow-pages:** 更新配置 ([2bdfb80](https://github.com/SoulLyoko/yusui-tools/commit/2bdfb804bbdd96ede68c8b0b6c2dd9d0f7ac100e))



# [2.0.0-beta.36](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.35...v2.0.0-beta.36) (2023-05-11)


### Bug Fixes

* **setup-extend:** 修复转换错误 ([dbf100f](https://github.com/SoulLyoko/yusui-tools/commit/dbf100f4242f36251e95574a44f56413bd191363))



# [2.0.0-beta.35](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.34...v2.0.0-beta.35) (2023-05-11)


### Bug Fixes

* **plugins:** 更新依赖 ([6555c62](https://github.com/SoulLyoko/yusui-tools/commit/6555c6289c007e91c0926c01692c65c2c9288a24))
* **plugins:** 到处`setup-extend` ([9806713](https://github.com/SoulLyoko/yusui-tools/commit/9806713e28dd89bde9e888c09501aad0ddf31b64))



# [2.0.0-beta.34](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.33...v2.0.0-beta.34) (2023-05-11)


### Bug Fixes

* **avuePatch:** 删除一些补丁 ([07ed565](https://github.com/SoulLyoko/yusui-tools/commit/07ed5659bb1fc79d5e1b1b07844e545f71de7de7))
* **plugins:** `script-extend`重命名为`setup-extend` ([5cef39e](https://github.com/SoulLyoko/yusui-tools/commit/5cef39eed5cbe74135cb0ffec092a8c9072383d5))


### Features

* **plugins:** 新增`scriptExtend` ([c6bc4c0](https://github.com/SoulLyoko/yusui-tools/commit/c6bc4c03aac19837fc679f353e98eb220d6e4aaf))



# [2.0.0-beta.33](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.32...v2.0.0-beta.33) (2023-05-10)


### Bug Fixes

* **plugins:** 修改 env-dts 输出目录 ([1bc3667](https://github.com/SoulLyoko/yusui-tools/commit/1bc36679dfa31c59f7b07a59f02d177352c28f3a))



# [2.0.0-beta.32](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.31...v2.0.0-beta.32) (2023-05-10)


### Bug Fixes

* **components:** 移除`basic-container`组件 ([1d43d46](https://github.com/SoulLyoko/yusui-tools/commit/1d43d4651ccd755401a93ebdca859de947211465))
* **flow-pages:** 按钮处理 ([c510f29](https://github.com/SoulLyoko/yusui-tools/commit/c510f2953bc78dc89cad5fe158930983d812af62))
* **types:** avue-crud新增类型`closeDialog` ([7ad9aa9](https://github.com/SoulLyoko/yusui-tools/commit/7ad9aa916eb93ced4a9a4a58cf667bf779c132ff))


### Features

* **flow-design:** 传阅配置 ([b8f9ee3](https://github.com/SoulLyoko/yusui-tools/commit/b8f9ee307e6377da9ed27420131f5be0e7b5e6be))
* **flow-pages:** 传阅 ([e9b886f](https://github.com/SoulLyoko/yusui-tools/commit/e9b886f087d1d11230d3227fdfae25e7362b3e42))
* **flow-pages:** 流程附件 ([23c204b](https://github.com/SoulLyoko/yusui-tools/commit/23c204b09f268c3b3d69573180bcb058fcb3a6f4))
* **flow-pages:** 终止,撤回到发起,转办(terminate,withdraw,transfer)的操作 ([b6a8c49](https://github.com/SoulLyoko/yusui-tools/commit/b6a8c492fef2519017c6a5d4dc7e5a4210a5ca4c))
* **useCrud:** 新增 `beforeSubmit`, `successMsg` ([36101ea](https://github.com/SoulLyoko/yusui-tools/commit/36101eaee77957a67c56ab295339b354dcd90be6))



# [2.0.0-beta.31](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.30...v2.0.0-beta.31) (2023-05-04)


### Bug Fixes

* **flow-pages:** 流程工作台 ([0f57707](https://github.com/SoulLyoko/yusui-tools/commit/0f5770741e1d7846a2614d265499ecbb2c92dac2))



# [2.0.0-beta.30](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.29...v2.0.0-beta.30) (2023-05-03)



# [2.0.0-beta.29](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.28...v2.0.0-beta.29) (2023-05-03)


### Bug Fixes

* **flow-pages:** `useFlowParam`获取流程参数 ([2f00585](https://github.com/SoulLyoko/yusui-tools/commit/2f00585e456aaa114cee8052422c51f1c531377b))
* **types:** avueFormColumn类型 ([709373c](https://github.com/SoulLyoko/yusui-tools/commit/709373c158b231761338b2101deead8e3872b982))


### Features

* **flow-design:** 流程图节点弹出文字提示 ([449c3f7](https://github.com/SoulLyoko/yusui-tools/commit/449c3f7821de6df48045131a03bbf05c6d8d3616))
* **flow-pages:** 流程相关功能 ([80608cc](https://github.com/SoulLyoko/yusui-tools/commit/80608cc1ff07c86c5748076a2b20ef0ec4e8f5fc))
* **flow-pages:** 新增`useFlowForm`调用流程弹窗 ([d1eece1](https://github.com/SoulLyoko/yusui-tools/commit/d1eece128c4af012a2a88c365a7482a28e15ce01))



# [2.0.0-beta.28](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.27...v2.0.0-beta.28) (2023-04-18)


### Bug Fixes

* **flow-form:** useProvideState ([16251ea](https://github.com/SoulLyoko/yusui-tools/commit/16251eabc2ab74d8580d93912561598d87b35ede))
* **flow-pages:** 按钮处理 ([0716577](https://github.com/SoulLyoko/yusui-tools/commit/0716577f4083278f0468f55b92f4b20cd123c600))
* 移除包`eslint-config`,`prettier-config` ([e6bbc29](https://github.com/SoulLyoko/yusui-tools/commit/e6bbc293ddca1443889cbbb7349fba35d47ea877))


### Features

* **flow-pages:** 新增流程跟踪 ([8f0abbc](https://github.com/SoulLyoko/yusui-tools/commit/8f0abbc6204b785e68a8d7a14f8079e7318ba40c))
* **useCrud:** 新增`defaults`属性 ([d2ba6bb](https://github.com/SoulLyoko/yusui-tools/commit/d2ba6bb93de72ed17084a90021650932c03fab2c))



# [2.0.0-beta.27](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.24...v2.0.0-beta.27) (2023-04-13)


### Bug Fixes

* 移除包`uni-pages`和`uni-utils`,移除`utils`的`cache`和`file` ([d06a84a](https://github.com/SoulLyoko/yusui-tools/commit/d06a84aba7135b32c746523f0836108682fde921))


### Features

* **flow-design:** 添加类型`FlowFormData` ([460c7a7](https://github.com/SoulLyoko/yusui-tools/commit/460c7a78cd685c34839c661e3790723a05c6d91c))
* **flow-modeler:** 添加formatter属性 ([17ff1d6](https://github.com/SoulLyoko/yusui-tools/commit/17ff1d685db0d7229cd583e5803d542f582e78e1))
* **flow-page:** `flow-param`流程参数,`table-template`建表设计 ([2b9f25a](https://github.com/SoulLyoko/yusui-tools/commit/2b9f25a469dc8d737802cc7ab96791694ad8c604))
* **flow-pages:** `flow-button`流程按钮 ([33d303a](https://github.com/SoulLyoko/yusui-tools/commit/33d303accb5a74e2af7f24f7996da9db19a5a422))
* **flow-pages:** `flow-ops`流程运维 ([d8243f9](https://github.com/SoulLyoko/yusui-tools/commit/d8243f92a5523d0f1c46bf8344dcec0bf5a2adb2))
* **flow-viewer:** 添加`styles`属性控制节点样式 ([3a301c6](https://github.com/SoulLyoko/yusui-tools/commit/3a301c6741e7b0116d30ed6450ee764e55768b31))
* **plugins:** uni-pages ([c9af82b](https://github.com/SoulLyoko/yusui-tools/commit/c9af82bbc73cddf91c53169c78d56e2dfba6318a))
* **plugins:** uni-pages injectPageStyle ([ce8837a](https://github.com/SoulLyoko/yusui-tools/commit/ce8837a36dd57dab02a85f907c88e0407aa4dd5a))
* **use-crud:** `crudState`中添加`formType` ([fa5d74b](https://github.com/SoulLyoko/yusui-tools/commit/fa5d74b4f0bb7298778ef90a5161fc0bc9d1d667))
* **utils:** `enumToDic`枚举转字典数组 ([a8cd9a5](https://github.com/SoulLyoko/yusui-tools/commit/a8cd9a532ccd9457c536f20b1f7959aee9f726e9))



# [2.0.0-beta.24](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.23...v2.0.0-beta.24) (2023-04-03)


### Features

* **flow-pages:** `approval-form`审批表单 ([c714586](https://github.com/SoulLyoko/yusui-tools/commit/c714586a929bf8385cf648f2fc628109e264c996))
* **form-design:** 函数化的`settings` ([fd28757](https://github.com/SoulLyoko/yusui-tools/commit/fd287575fff73d1689153e6f07cae272608346c9))



# [2.0.0-beta.23](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.22...v2.0.0-beta.23) (2023-04-01)


### Features

* **form-design:** `switch-setter`开关设置 ([4417d4d](https://github.com/SoulLyoko/yusui-tools/commit/4417d4d3489ba582c6975de83b812d49d1f42b81))



# [2.0.0-beta.22](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.21...v2.0.0-beta.22) (2023-04-01)


### Bug Fixes

* **form-design:** 导出`switch`开关 ([9fa8289](https://github.com/SoulLyoko/yusui-tools/commit/9fa8289e4f318c554694b78f496de4941d106026))
* **form-design:** 表单操作按钮配置 ([eef28ee](https://github.com/SoulLyoko/yusui-tools/commit/eef28eece2f6f0a559d7067e6939c707c5c812c3))
* **form-design:** 合并传入配置 ([2dfcfaa](https://github.com/SoulLyoko/yusui-tools/commit/2dfcfaac9bd012d3c9b75ce8d0d477788a735173))



# [2.0.0-beta.21](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.20...v2.0.0-beta.21) (2023-03-31)



# [2.0.0-beta.20](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.19...v2.0.0-beta.20) (2023-03-31)


### Bug Fixes

* **form-design:** 树形选择 ([8c1abdb](https://github.com/SoulLyoko/yusui-tools/commit/8c1abdb7758089d86fcdb8924ff46a8ac9cbd034))



# [2.0.0-beta.19](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.18...v2.0.0-beta.19) (2023-03-31)


### Bug Fixes

* **form-design:** 树形选择 ([df3da84](https://github.com/SoulLyoko/yusui-tools/commit/df3da8454e658a0048894f960bb4a0dc7bb25949))



# [2.0.0-beta.18](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.17...v2.0.0-beta.18) (2023-03-31)


### Bug Fixes

* **form-design:** 字典 ([c329036](https://github.com/SoulLyoko/yusui-tools/commit/c3290362890988253104a091e5aa5f9164cd5b08))



# [2.0.0-beta.17](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.16...v2.0.0-beta.17) (2023-03-31)


### Bug Fixes

* **form-design:** 字典设置 ([c1a6a2d](https://github.com/SoulLyoko/yusui-tools/commit/c1a6a2dca5261e9860aa45b33d236f63eed1c6a9))



# [2.0.0-beta.16](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.15...v2.0.0-beta.16) (2023-03-31)


### Bug Fixes

* **form-design:** 表单操作按钮的显示控制 ([0262950](https://github.com/SoulLyoko/yusui-tools/commit/0262950faedb06477fb313342708cc756585a142))



# [2.0.0-beta.15](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.14...v2.0.0-beta.15) (2023-03-31)


### Bug Fixes

* **form-design:** 字典设置 ([9727395](https://github.com/SoulLyoko/yusui-tools/commit/9727395f6f7dfa3f738f8ef7066bb603df29e7a1))


### Features

* **utils:** `filterObjDeep`对象属性过滤 ([8071f20](https://github.com/SoulLyoko/yusui-tools/commit/8071f20735a259d80edb04f20d7adb8036dd3a48))



# [2.0.0-beta.14](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.13...v2.0.0-beta.14) (2023-03-30)


### Bug Fixes

* **form-design:** 表单项栅格 ([aeafaf6](https://github.com/SoulLyoko/yusui-tools/commit/aeafaf644cdfa3901cc3066ed4b3c2da390ffe92))



# [2.0.0-beta.13](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.12...v2.0.0-beta.13) (2023-03-30)


### Bug Fixes

* **flow-pages:** flow-form通过flowKey获取流程信息 ([1b827a8](https://github.com/SoulLyoko/yusui-tools/commit/1b827a8fbecdf038fa332d24437f3d926d0bf04c))
* **form-design:** 树选择组件 ([2a3f69e](https://github.com/SoulLyoko/yusui-tools/commit/2a3f69e1a67b40c9a6835e44b91451a7778ac224))



# [2.0.0-beta.12](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.11...v2.0.0-beta.12) (2023-03-30)


### Bug Fixes

* **durationFormat:** 接收空的数据 ([a3ebcd5](https://github.com/SoulLyoko/yusui-tools/commit/a3ebcd5157ba5bb19e19e0c70f5a86e9762a9db3))
* **form-design:** switch的默认值 ([392505f](https://github.com/SoulLyoko/yusui-tools/commit/392505fb5f93d695aeec4b4a2d9552bd2982c14e))


### Features

* **flow-design:** 流程数据`processData` ([8c84045](https://github.com/SoulLyoko/yusui-tools/commit/8c840458edcd281d5793f99c0bf6359403908b12))
* **flow-pages:** 工作台,流程表单 ([10e60c0](https://github.com/SoulLyoko/yusui-tools/commit/10e60c03d6f8921882d710be50a384c2194faef7))
* **form-design:** 节点右键菜单 ([b564bd9](https://github.com/SoulLyoko/yusui-tools/commit/b564bd9c3ae6d2059da2f78f17b7fc61ec3c29af))
* **plugins:** 新增补丁fixDicGetResData ([45ed03c](https://github.com/SoulLyoko/yusui-tools/commit/45ed03cf3f49f62e528e8fa0aaed0e1e7ee9d543))



# [2.0.0-beta.11](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.10...v2.0.0-beta.11) (2023-03-24)


### Bug Fixes

* **form-design:** dicTreeSetter ([26f7029](https://github.com/SoulLyoko/yusui-tools/commit/26f702926d1878bd114f0c5e3015efb3453061f3))



# [2.0.0-beta.10](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.9...v2.0.0-beta.10) (2023-03-24)


### Bug Fixes

* **form-design:** dic ([2e8d6f3](https://github.com/SoulLyoko/yusui-tools/commit/2e8d6f3c65081dd6fc1a835b2b086a65014a73d5))



# [2.0.0-beta.9](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.8...v2.0.0-beta.9) (2023-03-24)


### Bug Fixes

* **form-design:** disable dicDataSetter ([bfc933e](https://github.com/SoulLyoko/yusui-tools/commit/bfc933e129cd0758937b028fd10ac7fed28def9d))



# [2.0.0-beta.8](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.7...v2.0.0-beta.8) (2023-03-24)


### Bug Fixes

* **form-design:** resources ([db7fc99](https://github.com/SoulLyoko/yusui-tools/commit/db7fc998309124dc5013abd351290026a3d0a14d))



# [2.0.0-beta.7](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.6...v2.0.0-beta.7) (2023-03-24)


### Bug Fixes

* **form-design:** dic options ([89e51ef](https://github.com/SoulLyoko/yusui-tools/commit/89e51efafffcc2b5151b2d8d3974235a2b141d20))



# [2.0.0-beta.6](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.5...v2.0.0-beta.6) (2023-03-24)


### Features

* **editor-setter:** open dialog on tooltip type ([720582c](https://github.com/SoulLyoko/yusui-tools/commit/720582c99fcb92f9aaf12e1861c5e2d1a2f2d76a))



# [2.0.0-beta.5](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.4...v2.0.0-beta.5) (2023-03-24)


### Bug Fixes

* **form-design:** dic options ([216fb00](https://github.com/SoulLyoko/yusui-tools/commit/216fb00deed123be26237e48d5e685d300cacb0e))



# [2.0.0-beta.4](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.3...v2.0.0-beta.4) (2023-03-23)


### Bug Fixes

* **form-design:** prod bug ([3c4a1fb](https://github.com/SoulLyoko/yusui-tools/commit/3c4a1fb2983628cc8d264d5dc68f4421736f39fb))



# [2.0.0-beta.3](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2023-03-23)


### Bug Fixes

* **form-design:** prod json5 error ([6757a41](https://github.com/SoulLyoko/yusui-tools/commit/6757a41a2673947749c491ff243ea088f72e91e7))



# [2.0.0-beta.2](https://github.com/SoulLyoko/yusui-tools/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2023-03-23)


### Bug Fixes

* **form-design:** baseOption,advanceOption ([522cd31](https://github.com/SoulLyoko/yusui-tools/commit/522cd31bfb966145136edb59597b4285a5cedd66))
* **form-design:** rename monaco-editor to editor-setter ([c9571af](https://github.com/SoulLyoko/yusui-tools/commit/c9571af8cbd4dc4fbfbce35ce0e8f12f06fe4ddd))



# [2.0.0-beta.1](https://github.com/SoulLyoko/yusui-tools/compare/v1.7.0...v2.0.0-beta.1) (2023-03-22)


### Bug Fixes

* build styles ([85a69df](https://github.com/SoulLyoko/yusui-tools/commit/85a69df51b05743d9710a6b9cb0cb1235cf6759c))
* build types error ([be33097](https://github.com/SoulLyoko/yusui-tools/commit/be330971d788ac5bf60032b368bf2bb4f2bd2851))
* elementTree ([3bbe876](https://github.com/SoulLyoko/yusui-tools/commit/3bbe876fb302083f100bce67cfc36fa8c5ae9bf8))
* **eslint-config:** update ruls ([aec6111](https://github.com/SoulLyoko/yusui-tools/commit/aec6111728dc015477a0be5d0e6309a0d67dffaf))
* flow-manage ([41dd52c](https://github.com/SoulLyoko/yusui-tools/commit/41dd52c383ecbb829c5df7617f268017c7d34362))
* flow-modeler ([86594af](https://github.com/SoulLyoko/yusui-tools/commit/86594af3715db6691020ead570b481e40d134aa5))
* form-design ([099c65a](https://github.com/SoulLyoko/yusui-tools/commit/099c65af63152f459b98b4c02ccda15b34d204f6))
* main-workspace ([d62e6fc](https://github.com/SoulLyoko/yusui-tools/commit/d62e6fc2ca8852d0bf5ce3045b74c6739d783672))
* **plugins:** uview-patch ([fc9e79f](https://github.com/SoulLyoko/yusui-tools/commit/fc9e79ffa7e2e77adc316214c0f87424d82d3f00))
* turbo-adapter ([1e8125e](https://github.com/SoulLyoko/yusui-tools/commit/1e8125e94fd3a6fceffcb8f44f66ed62004d2484))
* **types-avue:** sumColumnList type ([c4aa8a3](https://github.com/SoulLyoko/yusui-tools/commit/c4aa8a3101bad3d4d7eb11fb832981f7c251529a))
* **types:** avue types ([9bca787](https://github.com/SoulLyoko/yusui-tools/commit/9bca7875d3f527948bf242adce1370982f4e314c))
* **types:** avue updateDic ([008203c](https://github.com/SoulLyoko/yusui-tools/commit/008203c90fd78838bd543cfd5d048e10054cf95f))
* **useCrud:** bindVal.ref use function type ([2e518ab](https://github.com/SoulLyoko/yusui-tools/commit/2e518abd26890718333d4cbd870d7f9eb760d014))
* **utils:** durationFormat ([1871088](https://github.com/SoulLyoko/yusui-tools/commit/187108834739781884266758461a46591a7973c9))


### Features

* api ([59a43ff](https://github.com/SoulLyoko/yusui-tools/commit/59a43ff07778ff16712632a22b07493e121c5714))
* avue-flow ([5f79824](https://github.com/SoulLyoko/yusui-tools/commit/5f798241ac531f229c245c06265d80fd738ccc13))
* **components:** icon-select readText from clipboard ([4c83df1](https://github.com/SoulLyoko/yusui-tools/commit/4c83df1aa7901d231a5155c09e8b53fb6745f153))
* flow-deploy ([58291d5](https://github.com/SoulLyoko/yusui-tools/commit/58291d5be1460819a7f89e422c2dc52a2a9837f8))
* **flow-design:** noteFlow ([b7f30be](https://github.com/SoulLyoko/yusui-tools/commit/b7f30be1d37ca55f6b351a88654c5171b60d0ebf))
* form-designer ([0a2c51c](https://github.com/SoulLyoko/yusui-tools/commit/0a2c51c9458f3e8a5d4319d0c5df2e4950854ffe))
* **form-design:** resources ([b50305c](https://github.com/SoulLyoko/yusui-tools/commit/b50305c6d4b9945ce8862f73a150d9f6d3d9ea0f))
* **form-design:** rules ([d69cf20](https://github.com/SoulLyoko/yusui-tools/commit/d69cf2028581ab4c1a145b2c2bab6d514b9578e9))
* **form-design:** rules-setter ([f72ef62](https://github.com/SoulLyoko/yusui-tools/commit/f72ef62f243719bf130eba5a50f44b1e66cdef90))
* **icon-select:** preview mode ([b403644](https://github.com/SoulLyoko/yusui-tools/commit/b403644f10466b0d29a4aabc9604d9c10fea72b8))
* monaco-editor,resources ([3c09072](https://github.com/SoulLyoko/yusui-tools/commit/3c0907285b0e45992e0f8e8e0c26b6ed6392aeb1))
* **plugins:** avue-patch fixFormRow ([7a1243f](https://github.com/SoulLyoko/yusui-tools/commit/7a1243f504366936f1505e8af15b0b6d765f5a28))
* **plugins:** createEnvDts generate comment ([527c448](https://github.com/SoulLyoko/yusui-tools/commit/527c448124dc8377651545d90d2e344db9d5b430))
* setters ([be6b35f](https://github.com/SoulLyoko/yusui-tools/commit/be6b35f5abfc5714b0950f9a2db9a9863a1c3de5))



# [1.7.0](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.17...v1.7.0) (2022-12-26)


### Bug Fixes

* upgrade vite4.x ([1249c1e](https://github.com/SoulLyoko/yusui-tools/commit/1249c1ec1cc4d5d7b5d82c80d379eb1fec850b57))
* **utils:** imports ([217061e](https://github.com/SoulLyoko/yusui-tools/commit/217061ed36529c61ce4e1a8612b504854efa2b1c))



## [1.6.17](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.16...v1.6.17) (2022-12-08)


### Bug Fixes

* **composables:** useCrudOption.clearSelection ([9bd2ecd](https://github.com/SoulLyoko/yusui-tools/commit/9bd2ecd38ecf27b21caf239e3e3b7daf899abf80))
* **types:** update AvueCrudMethods ([58b59cd](https://github.com/SoulLyoko/yusui-tools/commit/58b59cd700aa0b0ea85d6a43a800126da4cb5133))



## [1.6.16](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.15...v1.6.16) (2022-12-07)


### Bug Fixes

* **types:** rowCellAdd ([0d2072b](https://github.com/SoulLyoko/yusui-tools/commit/0d2072b68c077c22c65a3bfe97d48a90a72e5967))



## [1.6.15](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.14...v1.6.15) (2022-12-07)


### Bug Fixes

* **uni-composables:** make beforeXxx hooks earlier ([3407c6a](https://github.com/SoulLyoko/yusui-tools/commit/3407c6a6949206d94247542f36d8ce2c0721b4a9))



## [1.6.14](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.13...v1.6.14) (2022-12-07)


### Bug Fixes

* **composables:** make beforeXxx hooks earlier ([4af7361](https://github.com/SoulLyoko/yusui-tools/commit/4af73619cf0784b0e5af68885c70f5592aa9ffb3))



## [1.6.13](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.12...v1.6.13) (2022-12-07)


### Features

* **plugins:** add fixFormGroup for avuePatch ([331e94a](https://github.com/SoulLyoko/yusui-tools/commit/331e94aa2868d5e424cb7bcf95576fea47bfe9b5))



## [1.6.12](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.11...v1.6.12) (2022-12-05)


### Bug Fixes

* **components:** downgrade @iconify/vue version ([4ada197](https://github.com/SoulLyoko/yusui-tools/commit/4ada1977bbff68ecb8e88f3a76f44ead8d6554ee))
* **plugins:** uniUIPatch ([a89c01d](https://github.com/SoulLyoko/yusui-tools/commit/a89c01ddd4a6dfe4bee89b53153c0dc20de460ce))



## [1.6.11](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.10...v1.6.11) (2022-12-05)


### Bug Fixes

* **components:** v-icon type ([14ed7e8](https://github.com/SoulLyoko/yusui-tools/commit/14ed7e89424b65308d913e8a0032553e7dcac410))
* **composables:** useCrud rowKey type ([034f346](https://github.com/SoulLyoko/yusui-tools/commit/034f346b8085cd6bd016a1322e0156cee33d16aa))



## [1.6.10](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.9...v1.6.10) (2022-12-05)


### Bug Fixes

* **composbles:** useCrud useCrudMethodsOptions ([f5c188f](https://github.com/SoulLyoko/yusui-tools/commit/f5c188f7754dcb08d76b388fa3d96a4480807ccc))



## [1.6.9](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.8...v1.6.9) (2022-12-02)


### Bug Fixes

* **plugins:** add fixUniDataSelectChange to uniUIPatch ([9308527](https://github.com/SoulLyoko/yusui-tools/commit/93085271d0db972f2a0b2cc20ebc7dfe044fca0e))



## [1.6.8](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.7...v1.6.8) (2022-12-02)


### Bug Fixes

* **plugins:** uviewPatch bug ([9e2c72d](https://github.com/SoulLyoko/yusui-tools/commit/9e2c72d44c57e7cea0906f21bac79868b8a88a7f))



## [1.6.7](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.6...v1.6.7) (2022-12-02)


### Features

* **plugins:** uniUIPatch ([d47927f](https://github.com/SoulLyoko/yusui-tools/commit/d47927f471f3e2ac33da8db224e7a594cfd9837e))



## [1.6.6](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.5...v1.6.6) (2022-12-01)


### Bug Fixes

* **types:** update avue types ([e800820](https://github.com/SoulLyoko/yusui-tools/commit/e800820984f52eb0d2fd4acacb59d8241bc3a208))



## [1.6.5](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.4...v1.6.5) (2022-11-28)


### Bug Fixes

* **types:** update AvueFormSlots types ([8dbbe94](https://github.com/SoulLyoko/yusui-tools/commit/8dbbe94a1d1a992b7a6a8da8c9a76c5f349b386f))



## [1.6.4](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.3...v1.6.4) (2022-11-24)


### Bug Fixes

* **types:** update `AvueCrudSlots` types ([2af0735](https://github.com/SoulLyoko/yusui-tools/commit/2af073528bcff1aced21d7e3b790474faa72e17d))



## [1.6.3](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.2...v1.6.3) (2022-11-24)


### Bug Fixes

* **types:** update `AvueCrudGroup` types ([56656e5](https://github.com/SoulLyoko/yusui-tools/commit/56656e5c1d49c17d3d128d16ebbc1afb3f97dc62))



## [1.6.2](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.1...v1.6.2) (2022-11-24)


### Bug Fixes

* **types:** types error ([e3fc99b](https://github.com/SoulLyoko/yusui-tools/commit/e3fc99b1789e60cc20907d913c38be3614605bd0))
* **types:** update `AvueCrudSlots` types ([b0a9b1d](https://github.com/SoulLyoko/yusui-tools/commit/b0a9b1df38687ab17ca1c7a425f8cf6a92f5e065))
* **types:** update AvueForm types ([150cb98](https://github.com/SoulLyoko/yusui-tools/commit/150cb98666223f6eb6bf38959aaeee715c5384d2))



## [1.6.1](https://github.com/SoulLyoko/yusui-tools/compare/v1.6.0...v1.6.1) (2022-11-21)


### Bug Fixes

* **types:** update `AvueCrudOption` types ([0c2023b](https://github.com/SoulLyoko/yusui-tools/commit/0c2023b3c76f51f61c39bf4a207c26c8a96401b7))



# [1.6.0](https://github.com/SoulLyoko/yusui-tools/compare/v1.5.1...v1.6.0) (2022-11-18)


### Bug Fixes

* **plugins:** load-proxy ([a81ca60](https://github.com/SoulLyoko/yusui-tools/commit/a81ca60ddd40f1d324da9fb8de972a4b25e490c5))


### Features

* env-dts ([a346823](https://github.com/SoulLyoko/yusui-tools/commit/a346823e4e6b1f55f9645f7b2d4b7c31b25691c5))
* **plugins:** env-dts ([8aee08d](https://github.com/SoulLyoko/yusui-tools/commit/8aee08d9d250555c5f6ffcd877454930f371993a))


### BREAKING CHANGES

* **plugins:** - plugin `loadProxy` no need to pass proxy variable
- plugin `loadProxy` will auto merge with `server.proxy` and `preview.proxy`



## [1.5.1](https://github.com/SoulLyoko/yusui-tools/compare/v1.5.0...v1.5.1) (2022-11-17)


### Bug Fixes

* **composables:** add useCrud mock getList params ([cf4e63c](https://github.com/SoulLyoko/yusui-tools/commit/cf4e63c0a5d5e6a1e7f6ee95321618975aebe1d7))



# [1.5.0](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.14...v1.5.0) (2022-10-26)


### Features

* uni-composables,uni-utils ([3b4bbf0](https://github.com/SoulLyoko/yusui-tools/commit/3b4bbf0770d814c52d73b59559bda3d4075f4539))



## [1.4.14](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.13...v1.4.14) (2022-10-26)


### Features

* **plugins:** uview-patch ([17ce1c0](https://github.com/SoulLyoko/yusui-tools/commit/17ce1c006c18655e5644764f101a9763fdf9205d))



## [1.4.13](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.12...v1.4.13) (2022-10-24)


### Bug Fixes

* **types:** avue types ([e3e9a7b](https://github.com/SoulLyoko/yusui-tools/commit/e3e9a7be5cd75778a1b066b49cd4e32cf18ab83e))
* **types:** avue types ([3a8174b](https://github.com/SoulLyoko/yusui-tools/commit/3a8174b2756fc3509fe2f5a2886091fe1bdc74ce))



## [1.4.12](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.10...v1.4.12) (2022-10-20)


### Bug Fixes

* **types:** avue types ([ad26db3](https://github.com/SoulLyoko/yusui-tools/commit/ad26db3a363f67ff8f63b70124983bd939e2eb6a))
* **uni:** default value of `totalPath,currKey,sizeKey` ([5d36370](https://github.com/SoulLyoko/yusui-tools/commit/5d36370e9937c0cf1e1b71ed3fcd9b61031ad40c))



## [1.4.10](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.9...v1.4.10) (2022-10-18)


### Bug Fixes

* **uni:** default formType ([55b6ff0](https://github.com/SoulLyoko/yusui-tools/commit/55b6ff00ee53b152736a65ddca290fd8116391d9))



## [1.4.9](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.8...v1.4.9) (2022-10-17)


### Bug Fixes

* **types:** add type FormItemRule ([68db9b4](https://github.com/SoulLyoko/yusui-tools/commit/68db9b4d6f96e19a854a86b70c4265f945310111))
* **uni:** define default rowKey from options ([1996804](https://github.com/SoulLyoko/yusui-tools/commit/19968044ec7ff2617769cf0d9651bdb320a9fb0a))



## [1.4.8](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.7...v1.4.8) (2022-10-17)


### Bug Fixes

* **uni,use-crud:** getFormData params type ([2392877](https://github.com/SoulLyoko/yusui-tools/commit/23928770b78a69a5a2e734a4b36ed8e9a95d250b))



## [1.4.7](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.6...v1.4.7) (2022-10-14)


### Bug Fixes

* **uni:** missing onSubmit ([a7ea26a](https://github.com/SoulLyoko/yusui-tools/commit/a7ea26a8bd81a0c14ab87b9766eacc2f4f660f58))



## [1.4.6](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.5...v1.4.6) (2022-10-14)


### Bug Fixes

* **uni:** bindVal divided into bindList and bindForm ([f8b3d89](https://github.com/SoulLyoko/yusui-tools/commit/f8b3d897f3e14df2355e1f2a84fd149c02353f65))



## [1.4.5](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.4...v1.4.5) (2022-10-14)


### Bug Fixes

* **uni:** fix `crudOption.getInfo`  type ([d6036d6](https://github.com/SoulLyoko/yusui-tools/commit/d6036d6c175b888dd9dd3f55575e0e0341e22826))



## [1.4.4](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.3...v1.4.4) (2022-10-14)


### Bug Fixes

* **types:** avue label type ([6981c50](https://github.com/SoulLyoko/yusui-tools/commit/6981c5021d4136b71f6283d11213a0328555dbd5))



## [1.4.3](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.2...v1.4.3) (2022-10-14)


### Bug Fixes

* **uni:** fix types ([a94b24b](https://github.com/SoulLyoko/yusui-tools/commit/a94b24b5848ee751324a97303b43ea9dcd9a08a4))



## [1.4.2](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.1...v1.4.2) (2022-10-14)



## [1.4.1](https://github.com/SoulLyoko/yusui-tools/compare/v1.4.0...v1.4.1) (2022-10-13)



# [1.4.0](https://github.com/SoulLyoko/yusui-tools/compare/v1.3.7...v1.4.0) (2022-10-13)


### Features

* **uni:** useCrud ([38690c3](https://github.com/SoulLyoko/yusui-tools/commit/38690c3ee746b625639f8414282797831e12f5b1))



## [1.3.7](https://github.com/SoulLyoko/yusui-tools/compare/v1.3.6...v1.3.7) (2022-10-09)


### Bug Fixes

* **types:** avue types ([4c3fe00](https://github.com/SoulLyoko/yusui-tools/commit/4c3fe00a95b84fc69bb908445dc9b8b0431596b7))



## [1.3.6](https://github.com/SoulLyoko/yusui-tools/compare/v1.3.5...v1.3.6) (2022-10-09)


### Bug Fixes

* **types:** avue children type ([83c1ed0](https://github.com/SoulLyoko/yusui-tools/commit/83c1ed03e4050255b77c166fea9a4fe6f4983bfc))
* **utils:** filterObj return type ([e3897b9](https://github.com/SoulLyoko/yusui-tools/commit/e3897b91a62c9ad76b729c53c7fceadccde00516))



## [1.3.5](https://github.com/SoulLyoko/yusui-tools/compare/v1.3.4...v1.3.5) (2022-10-09)


### Bug Fixes

* **types:** avue types ([199a4ab](https://github.com/SoulLyoko/yusui-tools/commit/199a4ab11e471a256f52ee03b5676daa011c8729))



## [1.3.4](https://github.com/SoulLyoko/yusui-tools/compare/v1.3.3...v1.3.4) (2022-10-09)


### Bug Fixes

* **types:** avue types ([aa3ff87](https://github.com/SoulLyoko/yusui-tools/commit/aa3ff8725d68ea782ce7ea15820b96e816218de6))



## [1.3.3](https://github.com/SoulLyoko/yusui-tools/compare/v1.3.2...v1.3.3) (2022-10-09)


### Bug Fixes

* **utils:** remove avue ([24c9197](https://github.com/SoulLyoko/yusui-tools/commit/24c9197e36abaebf33362fd7133cf5bd9d8a4f88))



## [1.3.2](https://github.com/SoulLyoko/yusui-tools/compare/v1.3.1...v1.3.2) (2022-10-08)


### Features

* **composables:** useCrud ([a376e17](https://github.com/SoulLyoko/yusui-tools/commit/a376e1767d7c33d6881e31c94936093049e4bab2))



## [1.3.1](https://github.com/SoulLyoko/yusui-tools/compare/v1.3.0...v1.3.1) (2022-10-08)


### Bug Fixes

* **plugins:** avue-patch ([bfc9599](https://github.com/SoulLyoko/yusui-tools/commit/bfc95992325d85d4c7a269f2924dafa16367f43a))



# [1.3.0](https://github.com/SoulLyoko/yusui-tools/compare/v1.2.2...v1.3.0) (2022-10-08)


### Features

* **plugins:** load-proxy,avue-patch ([9af9cbe](https://github.com/SoulLyoko/yusui-tools/commit/9af9cbe9edc9346c9fe9e18fd8586295637213fc))



## [1.2.2](https://github.com/SoulLyoko/yusui-tools/compare/v1.2.1...v1.2.2) (2022-09-29)


### Bug Fixes

* **components:** icon-select iframe width ([b424d54](https://github.com/SoulLyoko/yusui-tools/commit/b424d544adc2e2cbbd136cd9946dfab6f3ccc479))



## [1.2.1](https://github.com/SoulLyoko/yusui-tools/compare/v1.2.0...v1.2.1) (2022-09-29)


### Bug Fixes

* **components:** add global.d.ts ([f1f7337](https://github.com/SoulLyoko/yusui-tools/commit/f1f733799ac05e6f6cf91c301b77854fe1024096))



# [1.2.0](https://github.com/SoulLyoko/yusui-tools/compare/v1.1.0...v1.2.0) (2022-09-29)


### Bug Fixes

* **config:** move config/* to *-config ([74748bd](https://github.com/SoulLyoko/yusui-tools/commit/74748bdd8f5b434db1eb7bb61ad79489036d1747))


### Features

* **components:** new components ([2a481d5](https://github.com/SoulLyoko/yusui-tools/commit/2a481d5a8d88bfc8ad816f94f60462f6bf5e8a6b))



# [1.1.0](https://github.com/SoulLyoko/yusui-tools/compare/v1.0.6...v1.1.0) (2022-09-29)


### Features

* **config:** eslint prettier ([bddacfc](https://github.com/SoulLyoko/yusui-tools/commit/bddacfc01e9b5b5c639a6d30ebd33e063dda23eb))
* **utils:** asyncValidate for avue ([ecc60ff](https://github.com/SoulLyoko/yusui-tools/commit/ecc60ff920ba4c76227f374b0c0575a455061430))



## [1.0.6](https://github.com/SoulLyoko/yusui-tools/compare/v1.0.5...v1.0.6) (2022-09-29)


### Bug Fixes

* **types:** move types/src/avue to types/avue ([d88301f](https://github.com/SoulLyoko/yusui-tools/commit/d88301f8ba7a02bd53891f8030471f9c3e942f29))



## [1.0.5](https://github.com/SoulLyoko/yusui-tools/compare/v1.0.4...v1.0.5) (2022-09-29)


### Bug Fixes

* **types:** avue types ([81ddbf3](https://github.com/SoulLyoko/yusui-tools/commit/81ddbf38e73c467fad9598120bd4b2bac4646ab4))



## [1.0.4](https://github.com/SoulLyoko/yusui-tools/compare/v1.0.3...v1.0.4) (2022-09-29)


### Features

* **types:** types definition for avue ([3b90f49](https://github.com/SoulLyoko/yusui-tools/commit/3b90f4999225e2ca932c90578892165a3cc33794))



## [1.0.3](https://github.com/SoulLyoko/yusui-tools/compare/v1.0.2...v1.0.3) (2022-09-28)



## [1.0.2](https://github.com/SoulLyoko/yusui-tools/compare/v1.0.1...v1.0.2) (2022-09-28)



## [1.0.1](https://github.com/SoulLyoko/yusui-tools/compare/f2156f86115f76db101f3270f9237c6acf4ee642...v1.0.1) (2022-09-28)


### Features

* **composables:** @yusui/composables ([88af04c](https://github.com/SoulLyoko/yusui-tools/commit/88af04c31ad7a0f45eb152b9f1b2299190d0aa1e))
* **types:** @yusui/types ([f2156f8](https://github.com/SoulLyoko/yusui-tools/commit/f2156f86115f76db101f3270f9237c6acf4ee642))
* **utils:** @yusui/utils ([38542aa](https://github.com/SoulLyoko/yusui-tools/commit/38542aae8c399625f69f1b613810056f7a9ae047))



