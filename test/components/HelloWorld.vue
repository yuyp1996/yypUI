<template>
  <div class="hello">
    <div class="mc-flex">
      <mc-button disabled>禁用</mc-button>
      <mc-button @click="dialogShow=!dialogShow">按钮</mc-button>
      <mc-button type="primary">初级</mc-button>
      <mc-button type="success">成功</mc-button>
      <mc-button type="warning">警告</mc-button>
      <mc-button type="danger">危险</mc-button>
    </div>
    <mc-dialog title="提示" mask :visible.sync="dialogShow">
      <span slot="title">slot提示</span>
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <mc-button @click="dialogShow = false" style="margin-right: 10px">取 消</mc-button>
        <mc-button type="primary" @click="dialogShow = false">确 定</mc-button>
      </span>
    </mc-dialog>
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
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  .mc-flex {
    display: flex;
    justify-content: space-around;
  }
</style>
