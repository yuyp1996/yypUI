// /packages/McButton/index.js
// 导入组件，组件必须声明 name
import McButton from './src/McButton.vue'

// 为组件提供 install 安装方法，供按需引入
McButton.install = function (Vue) {
    Vue.component(McButton.name, McButton)
}

// 默认导出组件
export default McButton