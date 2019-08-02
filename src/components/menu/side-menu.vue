<template>
  <a-layout-sider
    v-model="collapsed"
  >
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </a-layout-sider>
</template>

<script>

export default {
  name: 'side-menu',
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less">

</style>
