<template>
  <div class="his">
    <div class="title">打卡记录</div>
    <ZzList :URL="url" :params="params">
      <template v-slot:default="{ item }">
        <van-row class="card" @click="toDetail(item.ID)">
          <van-col span="24" class="date">
            <span>{{ item.DKSJ }}</span>
            <span class="location"></span>
          </van-col>
          <van-col span="24" class="tip"> 打卡地点 </van-col>
          <van-col span="24" class="text">
            {{ item.POSITIONING }}
          </van-col>
        </van-row>
      </template>
    </ZzList>
  </div>
</template>

<script>
import ZzList from '@/components/List.vue'
export default {
  name: 'SxsxH5History',
  components: { ZzList },
  data() {
    return {
      url: 'query',
      params: {},
    }
  },

  mounted() {},

  methods: {
    toDetail(id) {
      this.$router.push({
        name: 'Detail',
        params: { id: id },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.his {
  color: #333;
  .title {
    padding: 0.3rem;
    font-size: 0.36rem;
    font-weight: bold;
    padding-bottom: 0.2rem;
  }
  .card {
    margin: 0.3rem;
    background-color: #fff;
    padding: 0.3rem;
    border-radius: 0.15rem;
    .date {
      font-size: 0.34rem;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid #f3f4f7;
    }
    .location {
      padding-left: 0.3rem;
    }
    .tip {
      font-size: 0.28rem;
      color: #999;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }
    .text {
      font-size: 0.3rem;
      color: #666;
    }
  }
}
</style>
