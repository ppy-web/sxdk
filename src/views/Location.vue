<template>
  <div class="location">
    <van-row>
      <van-col span="12">当前位置</van-col>
      <van-col span="12" class="btnText btnText-right"
        ><span @click="onGetLocation"
          ><van-icon name="location-o" />定位
        </span></van-col
      >
      <van-col span="24" class="location-text" v-if="showLoad">
        <van-loading size="24px">获取定位...</van-loading>
      </van-col>

      <van-col span="24" class="location-text" v-if="selectName">
        {{ selectName }} <span v-if="selectItem.address">-</span>
        {{ selectItem.address }}
        <span class="btnText" @click="onResetPosition">地点微调</span></van-col
      >
    </van-row>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '100%' }"
      :lazy-render="lazyrender"
    >
      <div class="mapbox">
        <el-amap
          class="amap-box"
          :amap-manager="amapManager"
          :vid="'amap-vue'"
          :zoom="zoom"
          :plugin="plugin"
          :center="center"
          :events="events"
          :key="timer"
        >
          <el-amap-marker
            v-for="(marker, index) in markers"
            :position="marker"
            :key="index"
          ></el-amap-marker>
        </el-amap>
      </div>
      <div class="option">
        <van-search
          v-model="searchKey"
          placeholder="请输入地点"
          show-action
          type="round"
        >
          <template #action>
            <div @click="onConfirm">确定</div>
          </template>
        </van-search>
        <van-cell-group class="cellgroup">
          <van-cell
            :title="item.value"
            :label="item.address"
            :class="{ active: selectName == item.value }"
            v-for="(item, index) in curList"
            :key="index"
            @click="onClickPopupItem(item)"
          >
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon v-if="selectName == item.value">
              <van-icon name="success" color="#0080FE" class="success-icon" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
import Vue from 'vue'
import { Search } from 'vant'
import { Loading } from 'vant'

Vue.use(Loading)
Vue.use(Search)
let amapManager = new AMapManager()
export default {
  name: 'ZzMonorepoLocation',
  data() {
    let self = this
    return {
      timer: '',
      show: false,
      showLoad: false,
      lazyrender: true,
      selectName: '',
      selectItem: '',
      restaurants: [], //可选项
      address: null,
      searchKey: '',
      amapManager,
      markers: [],
      center: [113.563111, 34.819869],
      zoom: 16,
      lng: 0,
      lat: 0,
      events: {
        init() {
          console.log('init')
        },

        geolocation() {
          console.log('定位完成')
        },
      },
      plugin: [
        {
          // 定位
          pName: 'Geolocation',
          showButton: true, // 显示定位按钮
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          events: {
            init(o) {
              // o是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                console.log(status, result);
                if (status === 'error') {
                    alert("已拒绝获取地理位置的请求: " + result.message)
                    self.$router.go(-1)
                }

                if (result && result.position) {
                  self.markers = []
                  let { lng, lat } = result.position
                  self.lng = lng
                  self.lat = lat
                  self.center = [lng, lat]
                  self.markers.push([lng, lat])
                }
              })
              AMap.event.addListener(o, 'complete', (resetval) => {
                self.markers = []
                self.selectName = resetval.formattedAddress
                self.selectItem = {
                  address: '',
                  value: resetval.formattedAddress,
                  location: resetval.position,
                }
                let { lng, lat } = resetval.position
                self.lng = lng
                self.lat = lat
                self.center = [lng, lat]
                self.markers.push([lng, lat])
                console.log('重置定位')
                // console.log(resetval)

                let geocoder = new AMap.Geocoder({
                  radius: 500,
                  extensions: 'all',
                })
                geocoder.getAddress([lng, lat], function (status, result) {
                  if (status === 'complete' && result.info === 'OK') {
                    if (result && result.regeocode) {
                      console.log(result.regeocode)
                      //  self.selectName = result.regeocode.aois[0].name
                      self.showLoad = false
                      self.restaurants = result.regeocode.pois.map((item) => ({
                        address: item.address,
                        value: item.name,
                        location: item.location,
                      }))
                      self.curList = self.restaurants
                      self.address = result.regeocode.aois[0].name
                      self.$nextTick()
                    }
                  } else {
                    console.log('errinfo', status)
                    self.$toast('定位失败，请稍后刷新重试')
                    self.showLoad = false
                  }
                })
              })
              AMap.event.addListener(o, 'error', (errinfo) => {
                // console.log('定位错误error', errinfo)
                self.showLoad = false
              })
            },
          },
        },
        {
          // 工具栏
          pName: 'ToolBar',
          events: {
            init(instance) {
              // console.log(instance);
            },
          },
        },
      ],
    }
  },
  computed: {
    // 计算属性的 getter
    curList: {
      get() {
        const restaurants = this.restaurants
        const results = this.searchKey
          ? restaurants.filter(this.createFilter(this.searchKey))
          : restaurants
        return results
      },
      set(val) {
        // console.log(val)
      },
    },
  },
  mounted() {
    // this.testGeolocation()
  },
  watch: {
    markers: {
      handler(val) {
        const address = this.selectItem.address
          ? '-' + this.selectItem.address
          : ''
        const value = this.selectItem.value + address
        console.log(value)
        this.$emit('update:locationval', value)
      },
    },
  },
  methods: {
     testGeolocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
      } else {
        alert('您的浏览器不支持使用HTML 5来获取地理位置服务')
      }
              //定位数据获取成功响应
    function onSuccess(position) {
      alert(
        '纬度: ' +
          position.coords.latitude +
          '\n' +
          '经度: ' +
          position.coords.longitude +
          '\n' +
          '海拔: ' +
          position.coords.altitude +
          '\n' +
          '水平精度: ' +
          position.coords.accuracy +
          '\n' +
          '垂直精度: ' +
          position.coords.altitudeAccura
      )
    }
    //定位数据获取失败响应
    function onError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert('已拒绝获取地理位置的请求')
          break
        case error.POSITION_UNAVAILABLE:
          alert('位置信息是不可用的')
          break
        case error.TIMEOUT:
          alert('请求您的地理位置超时')
          break
        case error.UNKNOWN_ERROR:
          alert('未知错误')
          break
      }
    }
    },
    onClickPopupItem(item) {
      console.log(item)
      this.selectName = item.value
      this.selectItem = item
      this.markers = []
      let { lng, lat } = item.location
      this.lng = lng
      this.lat = lat
      this.center = [lng, lat]
      this.markers.push([lng, lat])
    },

    onResetPosition() {
      this.show = true
      document.title = '位置微调'
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    onConfirm() {
      this.show = false
      document.title = '校外实习打卡'
      this.searchKey = ''
    },
    onGetLocation() {
      if (!this.selectName) {
        this.lazyrender = false
        this.showLoad = true
      } else {
        console.log('刷新定位')
        this.timer = new Date().getTime() // 通过key，重载组件
      }
    },
  },
}
</script>

<style lang="less" scoped>
.location {
  padding: 0.3rem 0;
  overflow: hidden;
  border-bottom: 1px solid #f5f6f7;

  .btnText {
    color: #0080fe;
    padding-left: 0.3rem;
  }
  .btnText-right {
    text-align: right;
  }
  .location-text {
    padding-top: 0.3rem;
    color: #666;
  }
  .mapbox {
    width: 100%;
    height: 40vh;
    position: relative;
    /deep/ .amap-geolocation-con {
      z-index: 2000 !important;
    }
    /deep/ .amap-copyright {
      display: none !important;
      visibility: hidden;
    }
    /deep/ .amap-logo {
      visibility: hidden;
      display: none !important;
    }
  }
  .option {
    .cellgroup {
      height: 50vh;
      overflow: scroll;
      .success-icon {
        font-size: 0.32rem;
        line-height: inherit;
      }
      .active {
        color: #0080fe;
        .van-cell__label {
          color: #0080fe;
        }
      }
    }
  }
}
</style>
