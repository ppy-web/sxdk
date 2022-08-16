<template>
  <div id="app">
      <van-tabbar v-model="active">
      <van-tabbar-item icon="location-o" to="/">打卡</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" to="/history">记录</van-tabbar-item></van-tabbar-item></van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  name: 'App',
  data() {
    return {
      active: 0
    }
  },
  mounted() {
   if(this.$route.fullPath.match("/history") ) {
    this.active =1
   }
  },
}
</script>

<style lang="less">
@import url('@/assets/less/base.less');
#app {
  font-family: PingFang SC, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.3rem;
  font-weight: 500;
  width: 100%;
  // background-color: #fff;
}
* {
  padding: 0;
  margin: 0;
}
</style>
