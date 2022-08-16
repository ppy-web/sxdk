<template>
  <div class="round">
    <div class="box">
      <div class="pulse" v-show="status"></div>
      <div class="am" v-show="status"></div>
      <div class="map" v-if="status" @click="onClick">{{ text }}</div>
      <div class="map map2" v-else>
        <van-icon name="success" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Round',
  props: {
    text: String,
    status: Number,
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    onClick(evt) {
      this.$emit('click', evt)
    },
  },
}
</script>

<style lang="less" scoped>
.box {
  text-align: center;
  position: relative;
  min-height: 150px;
  .map {
    width: 125px;
    height: 125px;
    line-height: 125px;
    background-color: #009dfd;
    color: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    box-shadow: 0 0 10px #0583fe;
    // left: -125px;
    // top: -125px;
    /* margin: 50px auto; */
  }
  .map2 {
    text-align: center;
    background-color: #f7b55f;
    box-shadow: 0 0 10px #cdcdcd;

    .van-icon {
      vertical-align: middle;
      font-size: 1rem;
    }
  }
}
/* 1.定义动画 */
/*  */
@keyframes pulse {
  0% {
    width: 100px;
    height: 100px;
    opacity: 1;
  }

  50% {
    width: 125px;
    height: 125px;
    opacity: 1;
  }
  100% {
    width: 150px;
    height: 150px;
    opacity: 0;
  }
}
@keyframes pulse2 {
  0% {
    width: 125px;
    height: 125px;
    opacity: 1;
  }

  50% {
    width: 150px;
    height: 150px;
    opacity: 1;
  }
  100% {
    width: 175px;
    height: 175px;
    opacity: 0;
  }
}

.box div[class^='pulse'] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // box-shadow: h-shadow v-shadow blur spread color inset;
  box-shadow: 0 0 10px 10px #82c1ff;
  border-radius: 50%;
  animation: pulse 2s linear infinite;
}
.box div[class^='am'] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 10px #d5e9ff;
  border-radius: 50%;
  animation: pulse2 2s linear infinite;
}
.pulse {
  animation-delay: 0.8s !important;
}
.am {
  animation-delay: 1.2s !important;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
