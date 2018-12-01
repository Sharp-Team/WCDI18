<template>
  <div class="wrap-register">
    <div class="container">
      <div class="row">
        <div class="wrap-content col-md-10 offset-md-1">
          <div class="title">
            <h3>Đăng ký tài khoản</h3>
          </div>
          <div class="form-info">
            <form @submit.prevent="USER_SIGNUP(username, password, rePassword, imageAvatarUrl, email, fullname, phone, provinceSelected, districtSelected, address, object, jobSelected, imageCardUrl)">
              <div class="form-group row">
                <label
                  for="fullname"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Họ tên
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <input
                    id="fullname"
                    v-model="fullname"
                    type="text"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="email"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Email
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <input
                    id="useremail"
                    v-model="email"
                    type="text"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="phone"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Số điện thoại
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <input
                    id="userphone"
                    v-model="phone"
                    type="number"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="username"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Tên đăng nhập
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <input
                    id="username"
                    v-model="username"
                    type="text"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="password"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Mật khẩu
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="re-password"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Nhập lại Mật khẩu
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <input
                    id="re-password"
                    v-model="rePassword"
                    type="password"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="avatar"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Ảnh cá nhân
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <div class="file">
                    <input
                      id="avatar"
                      ref="fileInput"
                      type="file"
                      name="file"
                      accept="image/*"
                      @change="onFilePicked"
                    >
                    <label for="file">
                      Tải ảnh lên
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="province"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Tỉnh/ Thành phố
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <select
                    v-model="provinceSelected"
                    class="form-control"
                  >
                    <option
                      v-for="province in listProvinces"
                      :key="province.id"
                      :value="province">
                      {{ province }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="district"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Quận/ Huyện
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <select
                    v-model="districtSelected"
                    class="form-control"
                  >
                    <option
                      v-for="district in listDistricts"
                      :key="district.id">
                      {{ district.properties.Ten_Huyen }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="addressdetail"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Địa chỉ cụ thể
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <textarea
                    v-model="address"
                    type="text"
                    class="form-control"
                    placeholder="Số nhà, ngõ, phố"
                    rows="3"
                  >
                    Đây là địa chỉ
                  </textarea>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="isuser"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Đối tượng
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7 mt-2">
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      id="checkisuser1"
                      v-model="object"
                      type="radio"
                      value="Khách hàng"
                      name="typeuser"
                      class="custom-control-input">
                    <label
                      class="custom-control-label"
                      for="checkisuser1"
                    >
                      Khách hàng
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="checkisuser2"
                      v-model="object"
                      type="radio"
                      value="Người làm việc"
                      name="typeuser"
                      class="custom-control-input">
                    <label
                      class="custom-control-label"
                      for="checkisuser2">Người làm việc</label>
                  </div>
                </div>
              </div>
              <div
                v-if="object ==='Người làm việc'"
                class="form-group row"
              >
                <label
                  for="cmnd"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  CMND
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <div class="file">
                    <input
                      id="cmnd"
                      ref="fileInput"
                      type="file"
                      name="fileCMND"
                      accept="image/*"
                      @change="onFileCMNDPicked"
                    >
                    <label for="fileCMND">
                      Tải ảnh lên
                    </label>
                  </div>
                </div>
              </div>
              <div
                v-if="object ==='Người làm việc'"
                class="form-group row"
              >
                <label
                  for="jobuser"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Nghề nghiệp
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <select
                    v-model="jobSelected"
                    class="form-control">
                    <option
                      v-for="job in jobs"
                      :key="job.id"
                    >
                      {{ job.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12 col-md-7 col-lg-7 offset-md-4 offset-lg-3">
                  <my-button
                    content="Đăng ký"
                    background="#28a745"
                    background-hover="grey"
                    color="white"
                    class="btn btn-block is-btn-register"
                  />
                  <div class="or-text text-center py-2">Hoặc tạo tài khoản nhanh</div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12 col-md-7 col-lg-7 offset-md-4 offset-lg-3">
                  <div class="custom-btn-register">
                    <div class="social-btn text-right mb-2">
                      <button class="btn-block">
                        <a href="#">
                          <img
                            src="/images/facebook.png"
                            alt="facebook"
                          >
                          <span class="text">Đăng nhập bằng Facebook</span>
                        </a>
                      </button>
                    </div>
                    <div class="social-btn">
                      <button class="btn-block">
                        <div class="right-social">
                          <a href="#">
                            <img
                              src="/images/google.png"
                              alt="google"
                            >
                            <span class="text">Đăng nhập bằng Google</span>
                          </a>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from '~/components/share/Button'
import USER_SIGNUP from './register'
import { mapGetters } from 'vuex'
const vietnam = require('~/assets/json/data-viet-nam.json')
const jobs = require('~/assets/json/data-job.json')

export default {
  components: {
    MyButton
  },
  data() {
    return {
      vietnam,
      jobs,
      username: '',
      password: '',
      email: '',
      fullname: '',
      phone: '',
      rePassword: '',
      address: '',
      provinceSelected: '',
      districtSelected: '',
      imageAvatarUrl: '',
      imageCardUrl: '',
      object: 'Khách hàng',
      jobSelected: ''
    }
  },
  computed: {
    listProvinces: function() {
      return [...new Set(this.vietnam.features.map(i => i.properties.Ten_Tinh))]
    },
    listDistricts: function() {
      return [
        ...new Set(
          this.vietnam.features.filter(
            i => i.properties.Ten_Tinh === this.provinceSelected
          )
        )
      ]
    }
  },
  methods: {
    USER_SIGNUP,
    onFilePicked(event) {
      const files = event.target.files
      let fileName = files[0].name
      if (fileName.lastIndexOf('.') <= 0) {
        return alert('Bạn hãy chọn file hợp lệ')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageAvatarUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.imageAvatar = files[0]
    },
    onFileCMNDPicked(event) {
      const files = event.target.files
      let fileName = files[0].name
      if (fileName.lastIndexOf('.') <= 0) {
        return alert('Bạn hãy chọn file hợp lệ')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageCardUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.imageCard = files[0]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
.wrap-register {
  background-color: $color-background;
  padding-bottom: 4rem;
  padding-top: 120px;
  .breadcrumb {
    background-color: $color-background;
    .breadcrumb-item:first-child::after {
      display: inline-block;
      color: $font-color-dark;
      content: '>';
      padding-left: 10px;
      padding-right: 0px;
    }
    .breadcrumb-item:last-child::before {
      display: inline-block;
      color: $font-color-dark;
      content: '';
    }
    li {
      color: $font-color-dark;
    }
    a {
      color: $font-color-dark;
    }
  }
  .wrap-content {
    padding: 25px 25px 50px 25px !important;
    background-color: $color-background-white;
    .form-info {
      .form-group {
        label {
          text-align: right;
        }
        .file {
          position: relative;
        }
        .file label {
          background: #39d2b4;
          padding: 8px 15px;
          color: #fff;
          font-weight: bold;
          font-size: 0.9em;
          transition: all 0.4s;
        }
        .file input {
          position: absolute;
          display: inline-block;
          left: 0;
          top: 0;
          transform: 0.25s;
          opacity: 0.01;
          cursor: pointer;
        }
        .file input:hover + label,
        .file input:focus + label {
          background: #34495e;
          color: #39d2b4;
        }
      }
      .form-control {
        background-color: $color-background-white;
        font-weight: bold;
      }
      padding-top: 40px;
      .custom-btn-register {
        .social-btn {
          border: 1px solid #7e7e7e;
          margin-left: 4px;
          border-radius: 4%;
          .btn-block {
            a {
              text-decoration: none;
              display: inline-table;
            }
            cursor: pointer;
            border: none;
            span {
              font-size: 16px;
              margin-left: 15px;
              color: rgb(102, 102, 102);
            }
            .right-social {
              padding-top: 5px;
            }
          }
        }
      }
    }
    .title {
      border-bottom: 1px solid $color-border;
      h3 {
        text-align: left;
        text-transform: uppercase;
        font-family: sans-serif;
        font-size: 18px;
        padding-bottom: 15px;
        padding-top: 20px;
        font-weight: bold;
      }
    }
  }
}
@media (max-width: 576px) {
  .wrap-register {
    .wrap-content {
      .title {
        h3 {
          font-size: $font-title-mobile !important;
          padding-bottom: 5px !important;
        }
        border-bottom: none !important;
      }
      .form-info {
        .form-group {
          label {
            text-align: left;
          }
        }
        padding-top: 0px !important;
        label {
          font-size: $font-title-small-mobile;
          padding-bottom: 3px;
          padding-top: 5px;
        }
        .form-control {
          font-size: $font-title-small-mobile !important;
        }
        .form-group {
          padding-bottom: 0px !important;
        }
        .text-right {
          font-size: $font-title-small-mobile !important;
        }
        .or-text {
          font-size: $font-title-small-mobile !important;
        }
        .custom-btn-register {
          display: flex;
          justify-content: center;
        }
        .custom-btn-register .social-btn .btn-block span {
          display: none;
        }
        .custom-btn-register .social-btn {
          border: none;
        }
      }
    }
  }
}
</style>
