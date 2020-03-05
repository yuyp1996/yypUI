// /packages/McButton/index.js
// 导入组件，组件必须声明 name
import YpDatePicker from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
YpDatePicker.install = function (Vue) {
    Vue.component(YpDatePicker.name, YpDatePicker)
}

// 默认导出组件
export default YpDatePicker