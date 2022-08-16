<template>
  <div class="container-list">
    <slot name="header"></slot>
    <van-pull-refresh
      v-model="isRefreshLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        loading-text=" "
        :finished-text="`${items.length > 0 ? '没有更多了' : ''}`"
        :immediate-check="false"
        @load="_getList"
        class="panel"
      >
        <div v-if="items.length > 0">
          <div v-for="(item, index) in items" :key="index">
            <slot :item="item"></slot>
          </div>
        </div>
        <Blank v-else :message="msg" class="panel blank" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import api from '@/service/http'
import Blank from '@/components/Blank'
import Vue from 'vue'
import { PullRefresh } from 'vant'
import { List } from 'vant'
import { Image as VanImage } from 'vant'

Vue.use(VanImage)
Vue.use(List)
Vue.use(PullRefresh)
export default {
  components: { Blank },
  name: 'zz-list',
  props: {
    URL: String,
    params: Object,
  },
  data() {
    return {
      isRefreshLoading: false,
      loading: false,
      finished: false,
      page: 1,
      rows: 10,
      items: [],
      msg: '',
    }
  },
  watch: {
    URL: {
      handler() {
        this._getList()
      },
      immediate: true,
    },
  },
  methods: {
    // 刷新数据
    onRefresh() {
      console.log('OnResfsh...')
      this.items = []
      this.page = 1
      this.loading = true
      this.finished = false
      this._getList()
    },
    // 通过父组件传过来的URL获取数据
    async _getList() {
      console.log('list start', this.URL)
      this.msg = '加载中...'
      const p = {
        page: this.page,
        rows: this.rows,
        ...this.params,
      }
      if (api[this.URL]) {
        const [err, res] = await api[this.URL](p)
        if (err) return
        if (!res.page.record) {
          this.items = []
          this.finished = true
          this.loading = false
          this.isRefreshLoading = false
          this.msg = '暂无数据'
          return
        }
        this.items.push(...res.page.record)
        this.finished = this.items.length >= res.page.total
        this.loading = false
        this.isRefreshLoading = false
        this.page++
        this.msg = '暂无数据'
      } else {
        console.log('未找到接口数据')
        this.items = []
        this.finished = true
        this.loading = false
        this.isRefreshLoading = false
        this.msg = '暂无数据'
      }
    },
  },
}
</script>

<style lang="less" scoped>
.container-list {
  font-size: 0.3rem;
}
.panel {
  border-radius: 0.15rem;
  padding-bottom: 1.5rem;
}
.blank {
  margin-top: 0.3rem;
}
</style>
