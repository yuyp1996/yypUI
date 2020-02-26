<template>
  <div class="hello">
    <div class="mc-flex">
      <mc-button>按钮</mc-button>
      <mc-button type="primary">按钮</mc-button>
      <mc-button type="success">按钮</mc-button>
      <mc-button type="warning">按钮</mc-button>
      <mc-button type="danger">按钮</mc-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
