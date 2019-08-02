<template>
  <a-layout>
      <!-- <a-drawer
      title="Basic Drawer"
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="collapsed"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer> -->

    <side-menu
      :collapsed="collapsed"
    ></side-menu>
    <a-layout style="minHeight: 100vh">
      <global-header @toggle="toggle"></global-header>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/menu/side-menu'
import GlobalHeader from '@/components/global-header'

export default {
  name: 'basic-layout',
  components: { SideMenu, GlobalHeader },
  data() {
    return {
      collapsed: true
    }
  },
  methods: {
    onClose() {

    },
    toggle() {
      this.collapsed = !this.collapsed
      console.log(this.collapsed)
    }
  }
}
</script>

<style lang="less">

</style>
