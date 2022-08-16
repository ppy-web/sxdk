<template>
  <div class="container">
    <van-row class="card-uploader" v-if="config.gzcjz_type">
      <van-col span="24" class="caption-img">{{ config.gzcjz_name }}</van-col>
      <van-col span="24">
        <van-field>
          <template #input>
            <van-uploader
              :before-read="asyncBeforeRead"
              :after-read="afterRead1"
              :before-delete="beforeDelete"
              v-model="scene_uploader"
              multiple
              :max-count="3"
            />
          </template>
        </van-field>
      </van-col>
    </van-row>
    <van-row class="card-uploader" v-if="config.hsjc_type">
      <van-col span="24" class="caption-img">{{ config.hsjc_name }}</van-col>
      <van-col span="24">
        <van-field name="uploader">
          <template #input>
            <van-uploader
              :before-read="asyncBeforeRead"
              :after-read="afterRead2"
              :before-delete="beforeDelete"
              v-model="screenshot_uploader"
              multiple
              :max-count="3"
            />
          </template>
        </van-field>
      </van-col>
    </van-row>
    <van-row class="card-uploader" v-if="config.jkm_type">
      <van-col span="24" class="caption-img">{{ config.jkm_name }}</van-col>
      <van-col span="24">
        <van-field name="uploader">
          <template #input>
            <van-uploader
              :before-read="asyncBeforeRead"
              :after-read="afterRead3"
              :before-delete="beforeDelete"
              v-model="code_uploader"
              multiple
              :max-count="3"
            />
          </template>
        </van-field>
      </van-col>
    </van-row>
    <van-row class="card-uploader" v-if="config.qt_type">
      <van-col span="24" class="caption-img">{{ config.qt_name }}</van-col>
      <van-col span="24">
        <van-field name="uploader">
          <template #input>
            <van-uploader
              :before-read="asyncBeforeRead"
              :after-read="afterRead4"
              :before-delete="beforeDelete"
              v-model="qt_uploader"
              multiple
              :max-count="3"
            />
          </template>
        </van-field>
      </van-col>
    </van-row>
    <LocationVue :locationval.sync="location" />
    <div class="remark">
      <van-row>
        <van-col span="24" class="caption-remark">备注</van-col>
      </van-row>
      <van-field
        v-model="remark"
        name="remark"
        rows="2"
        autosize
        type="textarea"
        maxlength="140"
        show-word-limit
        placeholder="请输入备注(最大字数限制140字)"
      />
    </div>
    <div class="submit">
      <van-button color="#0080fe" block round @click="onSubmit">
        提交
      </van-button>
    </div>
  </div>
</template>

<script>
import http from '@/service/http'
import LocationVue from './Location.vue'
import Vue from 'vue'
import { Button } from 'vant'
import { Uploader } from 'vant'
import { Dialog } from 'vant'
import { Toast } from 'vant';

// 全局注册
Vue.use(Dialog)
Vue.use(Uploader)
Vue.use(Button)
Vue.use(Toast);
export default {
  name: 'ZzMonorepoHome',
  components: { LocationVue, [Dialog.Component.name]: Dialog.Component },
  data() {
    return {
      scene_uploader: [], // 场景照片
      scene_filePath: [], // 照片path

      screenshot_uploader: [], // 核酸检测截图
      screenshot_filePath: [], // 截图path

      code_uploader: [], // 健康码
      code_filePath: [], // 健康码截图path
      qt_uploader: [], // 其他
      qt_filePath: [], // 其他

      uploader: [], // 附件
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
      location: '',
      remark: '',
    }
  },

  mounted() {
    document.title = '校外实习打卡'
    this._getConfigInfo()
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
    async afterRead1(file) {
      console.log(file)
      file.status = 'uploading'
      file.message = '上传中...'
      console.log(file.file)
      let formData = new FormData()
      formData.append('file', file.file)
      let [err, res] = await http.upload(formData)
      if (err) return
      if (res.code === 1 && res.url) {
        file.status = ''
        this.scene_filePath.push(res.url)
      }
    },
    async afterRead2(file) {
      console.log(file)
      file.status = 'uploading'
      file.message = '上传中...'
      console.log(file.file)
      let formData = new FormData()
      formData.append('file', file.file)
      let [err, res] = await http.upload(formData)
      if (err) return
      if (res.code === 1 && res.url) {
        file.status = ''
        this.screenshot_filePath.push(res.url)
      }
    },
    async afterRead3(file) {
      console.log(file)
      file.status = 'uploading'
      file.message = '上传中...'
      console.log(file.file)
      let formData = new FormData()
      formData.append('file', file.file)
      let [err, res] = await http.upload(formData)
      if (err) return
      if (res.code === 1 && res.url) {
        file.status = ''
        this.code_filePath.push(res.url)
      }
    },
    async afterRead4(file) {
      console.log(file)
      file.status = 'uploading'
      file.message = '上传中...'
      console.log(file.file)
      let formData = new FormData()
      formData.append('file', file.file)
      let [err, res] = await http.upload(formData)
      if (err) return
      if (res.code === 1 && res.url) {
        file.status = ''
        this.qt_filePath.push(res.url)
      }
    },
    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        const isJPG = file.type === 'image/jpeg'
        const isPNG = file.type === 'image/png'
        const isLt5M = file.size / 1024 / 1024 < 5
        if (!(isJPG || isPNG)) {
          this.$toast('图片只能是 JPG/PNG 格式!')
          reject()
        } else if (!isLt5M) {
          this.$toast('图片过大!')
          reject()
        } else {
          resolve(file)
        }
      })
    },
    beforeDelete(file, detail) {
      console.log(file)
      console.log(detail)
      return true
    },
    async onSubmit() {
      const form = {
        remark: this.remark,
        positioning: this.location,
        files_gzcjz_ids: this.scene_filePath.toString(),
        files_hsjc_ids: this.screenshot_filePath.toString(),
        files_jkm_ids: this.code_filePath.toString(),
        files_qt_ids: this.qt_filePath.toString(),
      }
      console.log(form)
      const [err, res] = await http.save(form)
      if (err) {
        this.$toast(err.msg)
        return
      }
      if (res.code === 1) {
        Dialog.alert({
          title: '',
          message: '提交成功',
        }).then(() => {
          this.$router.push('/')
          // on close
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
  .van-cell {
    background: none;
    padding: 0.2rem 0;

    /deep/ .van-uploader__upload {
      background: #f7f8fa;
    }
  }
  /deep/ .van-field__label {
    font-size: 0.3rem;
    width: 1rem;
    color: #333333;
  }
  /deep/ .van-field__value {
    font-size: 0.26rem;
    color: #666;
  }
}
</style>
