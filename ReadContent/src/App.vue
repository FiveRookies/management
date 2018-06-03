<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family:HiraginoSansGB-W3;
}
#app{
  position: absolute;
  left: 0px;
  right: 0px;
  height: 100%;
}
</style>
