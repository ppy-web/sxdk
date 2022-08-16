<template>
  <div class="container">
    <van-row class="card-uploader" v-if="config.gzcjz_type">
      <van-col span="24" class="caption-img">{{ config.gzcjz_name }}</van-col>
      <van-col span="24" class="imggroup">
        <van-row gutter="10">
          <van-col
            span="8"
            v-for="(imgitem, index) in scene_filePath"
            :key="index"
            v-if="imgitem.id"
          >
            <van-image
              width="100%"
              fit="cover"
              @click="showImg($event)"
              :src="imgitem.url"
            />
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row class="card-uploader" v-if="config.hsjc_type">
      <van-col span="24" class="caption-img">{{ config.hsjc_name }}</van-col>
      <van-col span="24" class="imggroup">
        <van-row gutter="10">
          <van-col
            span="8"
            v-for="(imgitem, index) in screenshot_filePath"
            :key="index"
            v-if="imgitem.id"
          >
            <van-image
              width="100%"
              fit="cover"
              @click="showImg($event)"
              :src="imgitem.url"
            />
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row class="card-uploader" v-if="config.jkm_type">
      <van-col span="24" class="caption-img">{{ config.jkm_name }}</van-col>
      <van-col span="24" class="imggroup">
        <van-row gutter="10">
          <van-col
            span="8"
            v-for="(imgitem, index) in code_filePath"
            :key="index"
            v-if="imgitem.id"
          >
            <van-image
              width="100%"
              fit="cover"
              @click="showImg($event)"
              :src="imgitem.url"
            />
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row class="card-uploader" v-if="config.qt_type">
      <van-col span="24" class="caption-img">{{ config.qt_name }}</van-col>
      <van-col span="24" class="imggroup">
        <van-row gutter="10">
          <van-col
            span="8"
            v-for="(imgitem, index) in qt_filePath"
            :key="index"
            v-if="imgitem.id"
          >
            <van-image
              width="100%"
              fit="cover"
              @click="showImg($event)"
              :src="imgitem.url"
            />
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <div class="remark remarkpo">
      <van-row>
        <van-col span="24" class="caption-remark">位置信息</van-col>
      </van-row>
      <van-field
        v-model="location"
        name="remark"
        rows="2"
        autosize
        disabled
        type="textarea"
      />
    </div>
    <div class="remark">
      <van-row>
        <van-col span="24" class="caption-remark">备注</van-col>
      </van-row>
      <van-field
        v-model="remark"
        name="remark"
        rows="2"
        autosize
        disabled
        type="textarea"
      />
    </div>
  </div>
</template>

<script>
import { internshippunch } from '@/service/getDetail'
import http from '@/service/http'
import Vue from 'vue'
import { ImagePreview } from 'vant'
Vue.use(ImagePreview)
import { Uploader } from 'vant'

// 全局注册
Vue.use(Uploader)
export default {
  name: 'ZzMonorepoHome',
  data() {
    return {
      imgPreview: {
        img: '',
        show: false,
      },
      id: '',
      scene_filePath: [], // 照片path
      screenshot_filePath: [], // 截图path
      code_filePath: [], // 健康码截图path
      qt_filePath: [], // 其他
      location: '',
      remark: '',
      config: {
        cjr: '',
        cjsj: '',
        gzcjz_name: '',
        gzcjz_type: '',
        hsjc_name: '',
        hsjc_type: '',
        id: '',
        jkm_name: '',
        jkm_type: '',
        positioning: '',
        qt_name: '',
        qt_type: '',
        remark: '',
        schoolid: '',
        ssdw: '',
        whsj: '',
      },
    }
  },

  mounted() {
    document.title = '查看详情'
    // console.log()
    this._getConfigInfo()
    this._internshippunch()
  },

  methods: {
    async _getConfigInfo() {
      const [err, res] = await http.getConfigInfo()
      if (err) return
      if (res.code === 1) {
        console.log(res)
        this.config = res.info
      }
    },
    async _internshippunch() {
      const { code, msg } = await internshippunch(this.$route.params.id)
      if (code === -1) {
        return
      }
      console.log(msg)
      const pathname = '/sd-sxsx-manager/file/img?files='
      this.location = msg.positioning
      this.remark = msg.remark
      this.scene_filePath = [
        {
          id: msg.gzcjz_one_id,
          url: pathname + msg.gzcjz_one_id,
        },
        {
          id: msg.gzcjz_two_id,
          url: pathname + msg.gzcjz_two_id,
        },
        {
          id: msg.gzcjz_three_id,
          url: pathname + msg.gzcjz_three_id,
        },
      ]
      this.screenshot_filePath = [
        {
          id: msg.hsjc_one_id,
          url: pathname + msg.hsjc_one_id,
        },
        {
          id: msg.hsjc_two_id,
          url: pathname + msg.hsjc_two_id,
        },
        {
          id: msg.hsjc_three_id,
          url: pathname + msg.hsjc_three_id,
        },
      ]
      this.code_filePath = [
        {
          id: msg.jkm_one_id,
          url: pathname + msg.jkm_one_id,
        },
        {
          id: msg.jkm_two_id,
          url: pathname + msg.jkm_two_id,
        },
        {
          id: msg.jkm_three_id,
          url: pathname + msg.jkm_three_id,
        },
      ]
      this.qt_filePath = [
        {
          id: msg.qt_one_id,
          url: pathname + msg.qt_one_id,
        },
        {
          id: msg.qt_two_id,
          url: pathname + msg.qt_two_id,
        },
        {
          id: msg.qt_three_id,
          url: pathname + msg.qt_three_id,
        },
      ]
      // this.
    },
    showImg(e) {
      if (e.target.tagName == 'IMG') {
        this.imgPreview.img = e.target.src
        ImagePreview({
          images: [e.target.src],
          startPosition: 0,
          closeable: true,
          showIndex: false,
        })
      }
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
  padding-bottom: 2rem;
  background-color: #fff;

  .submit {
    padding: 0.3rem;
  }
  .card-uploader {
    border-bottom: 1px solid #f5f6f7;
    .caption-img {
      font-size: 0.32rem;
      color: #333333;
      padding-top: 0.4rem;
      padding-bottom: 0.2rem;
    }
  }
  .remark {
    padding-top: 0.3rem;
  }
  .remarkpo {
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #f5f6f7;
  }
  .van-cell {
    padding: 0;
    padding-top: 0.3rem;
  }
  .imggroup {
    padding-bottom: 0.3rem;
  }

  /deep/ .van-field__label {
    font-size: 0.3rem;
    width: 1rem;
    color: #333333;
    border-radius: 0.1rem;
  }
  /deep/ .van-field__value {
    font-size: 0.26rem;
    color: #333333;
    border-radius: 0.1rem;
    background-color: #f3f4f7;
  }
  /deep/ .van-field__control:disabled {
    color: #333333;
    -webkit-text-fill-color: #333333;
    padding: 0.2rem;
  }
}
</style>
