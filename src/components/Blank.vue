<template>
  <div class="container">
    <van-row class="blank" type="flex" justify="space-around">
      <van-col span="10">
        <van-image :src="blank_img" />
      </van-col>
      <van-col span="18" class="blank_text">{{ message }}</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Blank', // 空数据展示
  data() {
    return {
      blank_img: require('@/assets/images/blank.png'),
    }
  },
  props: {
    message: {
      type: String,
      default: '暂无数据',
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  // background-color: #fff;
  .blank {
    padding-top: 0.75rem;
    text-align: center;
    padding-bottom: 0.75rem;
    .blank_text {
      padding-top: 0.5rem;
      font-size: 0.3rem;
      color: #999999;
    }
  }
}
</style>
