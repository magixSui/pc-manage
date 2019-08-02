<template>
  <a-layout-header class="header">
    <button @click="toggle">toggle</button>
  </a-layout-header>
</template>

<script>

export default {
  name: 'global-header',
  data() {
    return {
      
    }
  },
  methods: {
      toggle() {
          this.$emit('toggle')
      }
  }
}
</script>

<style lang="less">

</style>
