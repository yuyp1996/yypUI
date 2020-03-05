// /packages/McButton/index.js
// 导入组件，组件必须声明 name
import YpDialog from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
YpDialog.install = function (Vue) {
    Vue.component(YpDialog.name, YpDialog)
}

// 默认导出组件
export default YpDialog