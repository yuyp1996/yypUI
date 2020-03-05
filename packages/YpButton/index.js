// /packages/McButton/index.js
// 导入组件，组件必须声明 name
import YpButton from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
YpButton.install = function (Vue) {
    Vue.component(YpButton.name, YpButton)
}

// 默认导出组件
export default YpButton