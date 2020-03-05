<template>
  <div class="hello">
    <h2>按钮组件</h2>
    <div class="mc-table">
      <div class="mc-table-item">
        <div class="mc-table-name">参数</div>
        <div class="mc-table-content">说明</div>
        <div class="mc-table-type">类型</div>
        <div class="mc-table-value">可选值</div>
        <div class="mc-table-default">默认值</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">disabled</div>
        <div class="mc-table-content">是否禁用按钮</div>
        <div class="mc-table-type">boolean</div>
        <div class="mc-table-value">—</div>
        <div class="mc-table-default">false</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">type</div>
        <div class="mc-table-content">按钮的类型</div>
        <div class="mc-table-type">string</div>
        <div class="mc-table-value">primary/success/warning/danger</div>
        <div class="mc-table-default">default</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">round</div>
        <div class="mc-table-content">是否圆角</div>
        <div class="mc-table-type">boolean</div>
        <div class="mc-table-value">—</div>
        <div class="mc-table-default">false</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">icon</div>
        <div class="mc-table-content">按钮图标</div>
        <div class="mc-table-type">string</div>
        <div class="mc-table-value">—</div>
        <div class="mc-table-default">—</div>
      </div>
    </div>
    <div class="mc-flex">
      <yp-button disabled>禁用</yp-button>
      <yp-button>按钮</yp-button>
      <yp-button round>圆角</yp-button>
      <yp-button type="primary">初级</yp-button>
      <yp-button type="success">成功</yp-button>
      <yp-button type="warning">警告</yp-button>
      <yp-button type="danger">危险</yp-button>
    </div>
    <h2>dialog组件</h2>
    <div class="mc-table">
      <div class="mc-table-item">
        <div class="mc-table-name">参数</div>
        <div class="mc-table-content">说明</div>
        <div class="mc-table-type">类型</div>
        <div class="mc-table-value">可选值</div>
        <div class="mc-table-default">默认值</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">title</div>
        <div class="mc-table-content">Dialog 的标题,也可通过具名&lt;slot name="title"&gt;&lt;/slot&gt;传入</div>
        <div class="mc-table-type">string</div>
        <div class="mc-table-value">—</div>
        <div class="mc-table-default">—</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">mask</div>
        <div class="mc-table-content">是否遮罩</div>
        <div class="mc-table-type">boolean</div>
        <div class="mc-table-value">—</div>
        <div class="mc-table-default">false</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">visible</div>
        <div class="mc-table-content">是否显示 Dialog，支持 .sync 修饰符</div>
        <div class="mc-table-type">boolean</div>
        <div class="mc-table-value">—</div>
        <div class="mc-table-default">false</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name" style="width: 100%">slot</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">名字</div>
        <div class="mc-table-content2">说明</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">—</div>
        <div class="mc-table-content2">Dialog 的内容</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">title</div>
        <div class="mc-table-content2">Dialog 标题区的内容</div>
      </div>
      <div class="mc-table-item">
        <div class="mc-table-name">footer</div>
        <div class="mc-table-content2">Dialog 按钮操作区的内容</div>
      </div>
    </div>
    <yp-button class="dialog-button" type="primary" @click="dialogShow=!dialogShow">打开dialog</yp-button>
    <yp-dialog title="提示" mask :visible.sync="dialogShow">
      <span slot="title">slot提示</span>
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <yp-button @click="dialogShow = false" style="margin-right: 10px">取 消</yp-button>
        <yp-button type="primary" @click="dialogShow = false">确 定</yp-button>
      </span>
    </yp-dialog>
    <yp-button class="dialog-button" type="primary" @click="timePickerShow=!timePickerShow">打开timePickerShow</yp-button>
    <yp-date-picker mask :visible.sync="timePickerShow"></yp-date-picker>

    <yp-carousel height="300px">
      <yp-carousel-item style="background: gray;height: 100%"></yp-carousel-item>
      <yp-carousel-item style="background: white;height: 100%"></yp-carousel-item>
      <yp-carousel-item style="background: red;height: 100%"></yp-carousel-item>
    </yp-carousel>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
          dialogShow: false,
          timePickerShow: false,
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h2 {
    margin: 20px;
  }
  .mc-flex {
    display: flex;
    justify-content: space-around;
  }
  .mc-table {
    margin: 20px auto;
    width: 80%;
    border: lightskyblue solid 2px;
    border-right: 0 none;
    border-bottom: 0 none;
    border-radius: 4px;
  }
  .mc-table-item {
    display: flex;
    border-bottom: lightskyblue solid 2px;
  }

  .mc-table-name,
  .mc-table-content,
  .mc-table-type,
  .mc-table-value,
  .mc-table-default,
  .mc-table-content2 {
    width: 15%;
    line-height: 30px;
    padding: 0 10px;
    border-right: lightskyblue solid 2px;
    font-size: 14px;
    color: #606266;
    word-break: break-all;
  }
  .mc-table-content {
    width: 40%;
  }
  .dialog-button {
    display: block;
    margin: 10px auto;
    width: 10%;
  }
  .mc-table-content2 {
    width: 85%;
  }
</style>
