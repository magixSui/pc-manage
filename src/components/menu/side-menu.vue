<template>
  <a-layout-sider
    v-model="collapsed"
  >
    <logo></logo>
  </a-layout-sider>
</template>

<script>
import Logo from '@/components/tools/logo'

export default {
  name: 'side-menu',
  components: { Logo },
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
