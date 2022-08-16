<template>
  <div class="container">
    <div class="text" :class="{ iscard: !status }">
      您今天{{ status | FormStatus }}打卡
    </div>
    <div class="textdate" v-if="date">{{ date }}</div>
    <Round :text="statustext" :status="status" @click="onCard" class="round" />
  </div>
</template>

<script>
import Round from '@/components/Round.vue'
import http from '@/service/http'
export default {
  name: 'SxsxH5ClockIn',
  components: { Round },

  data() {
    return {
      statustext: '打卡',
      active: 0,
      status: 1,
      date: '',
    }
  },
  filters: {
    FormStatus(val) {
      return val ? '未' : '已'
    },
  },

  mounted() {
    this._getSfdkByUserId()
  },

  methods: {
    async _getSfdkByUserId() {
      const [err, res] = await http.getSfdkByUserId()
      if (err) {
        console.log(err.msg)
        this.date = err.msg
        this.status = 0
        this.$toast(err.msg)
      }
      if (res.code === 1) {
        console.log(res)
        if (res.data) {
          // 已打卡
          this.date = res.data
          this.status = 0
        } else {
          this.date = res.data
          this.status = 1
        }
      }
    },
    onCard() {
      this.$router.push('home')
      console.log('打卡')
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
  font-size: 0.3rem;
  color: #333333;
  padding: 0 0.3rem;
  position: relative;
  .iscard {
    color: #07c160;
    text-align: center;
    font-size: 0.44rem;
    padding-top: 0.2rem;
  }
  .text {
    text-align: center;
    font-size: 0.44rem;
    padding-top: 2rem;
    color: #999999;
  }
  .textdate {
    text-align: center;
    font-size: 0.34rem;
    padding-top: 1rem;
    color: #333333;
  }
  .round {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
