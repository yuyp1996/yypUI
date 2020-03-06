// /packages/YpCarousel/index.js
// 导入组件，组件必须声明 name
import YpCarouselItem from '../YpCarousel/src/item.vue'

// 为组件提供 install 安装方法，供按需引入
YpCarouselItem.install = function (Vue) {
    Vue.component(YpCarouselItem.name, YpCarouselItem)
}

// 默认导出组件
export default YpCarouselItem