// /packages/YpCarousel/index.js
// 导入组件，组件必须声明 name
import YpCarousel from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
YpCarousel.install = function (Vue) {
    Vue.component(YpCarousel.name, YpCarousel)
}

// 默认导出组件
export default YpCarousel