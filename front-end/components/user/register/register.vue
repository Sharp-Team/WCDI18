<template>
<div class="wrap-register">
  <div class="container">
    <div class="row">
      <div class="wrap-content col-md-10 offset-md-1">
        <div class="title">
          <h3>Đăng ký tài khoản</h3>
        </div>
        <div class="form-info">
          <form action="">
            <div class="form-group row">
              <label for="fullname" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Họ tên</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <input
                  v-model="fullname"
                  type="text"
                  class="form-control"
                  id="fullname">
              </div>
            </div>
            <div class="form-group row">
              <label for="useremail" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Email</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <input
                  v-model="useremail"
                  type="text"
                  class="form-control"
                  id="useremail">
              </div>
            </div>
            <div class="form-group row">
              <label for="userphone" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Số điện thoại</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <input
                  v-model="userphone"
                  type="number"
                  class="form-control"
                  id="userphone">
              </div>
            </div>
            <div class="form-group row">
              <label for="username" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Tên đăng nhập</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="username">
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Mật khẩu</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="password"
                  value="" >
              </div>
            </div>
            <div class="form-group row">
              <label for="re-password" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Nhập lại Mật khẩu</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <input
                  v-model="rePassword"
                  type="password"
                  class="form-control"
                  id="re-password"
                  value="" >
              </div>
            </div>
            <div class="form-group row">
              <label for="avatar" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Ảnh cá nhân</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <div class="file">
                  <input type="file"
                    name="file"
                    id="avatar"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked">
                  <label for="file">Tải ảnh lên</label>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="province" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Tỉnh/ Thành phố</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <select v-model="provinceSelected"  class="form-control">
                  <option v-for="province in provinces" :key=province.id>
                    {{ province.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="district" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Quận/ Huyện</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <select v-model="districtSelected" class="form-control">
                  <option v-for="district in districts" :key=district.id>
                    {{ district.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="ward" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Phường/ Xã</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <select v-model="wardSelected" class="form-control">
                  <option v-for="ward in wards" :key=ward.id>
                    {{ ward.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="addressdetail" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Địa chỉ cụ thể</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <textarea
                  v-model="addressdetail"
                  type="text"
                  class="form-control"
                  placeholder="Số nhà, ngõ, phố"
                  rows="3" />
              </div>
            </div>
            <div class="form-group row">
              <label for="isuser" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Đối tượng</label>
              <div class="col-sm-12 col-md-7 col-lg-7 mt-2">
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    value="Khách hàng"
                    id="checkisuser1"
                    name="typeuser"
                    v-model="pickUser"
                    class="custom-control-input">
                  <label class="custom-control-label" for="checkisuser1">Khách hàng</label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    value="Người làm việc"
                    id="checkisuser2"
                    name="typeuser"
                    v-model="pickUser"
                    class="custom-control-input">
                  <label class="custom-control-label" for="checkisuser2">Người làm việc</label>
                </div>
              </div>
            </div>
            <div v-if="pickUser ==='Người làm việc'" class="form-group row">
              <label for="cmnd" class="col-sm-12 col-md-4 col-lg-3 col-form-label">CMND</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <div class="file">
                  <input type="file"
                    name="fileCMND"
                    id="cmnd"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFileCMNDPicked">
                  <label for="fileCMND">Tải ảnh lên</label>
                </div>
              </div>
            </div>
            <div v-if="pickUser ==='Người làm việc'" class="form-group row">
              <label for="jobuser" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Nghề nghiệp</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <select v-model="jobSelected"  class="form-control">
                  <option v-for="job in jobs" :key=job.id>
                    {{ job.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="isuser" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Loại địa chỉ</label>
              <div class="col-sm-12 col-md-7 col-lg-7 mt-2">
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    value="Nhà riêng, chung cư"
                    id="checkhomeuser1"
                    name="typehome"
                    v-model="pickHome"
                    class="custom-control-input">
                  <label class="custom-control-label" for="checkhomeuser1">Nhà riêng, chung cư</label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    value="Cơ quan, Công ty"
                    id="checkhomeuser2"
                    name="typehome"
                    v-model="pickHome"
                    class="custom-control-input">
                  <label class="custom-control-label" for="checkhomeuser2">Cơ quan, Công ty</label>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 col-md-7 col-lg-7 offset-md-4 offset-lg-3">
                <my-button
                    content="Đăng ký"
                    background="#28a745"
                    backgroundHover="grey"
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
                        <img src="~/assets/images/facebook.png" alt="facebook" />
                        <span class="text">Đăng nhập bằng Facebook</span>
                      </a>
                    </button>
                  </div>
                  <div class="social-btn">
                    <button class="btn-block">
                      <div class="right-social">
                        <a href="#">
                          <img src="~/assets/images/google.png" alt="google" />
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
import MyButton from '~/components/share/button.vue';
export default {
  name: 'Register',
  data () {
    return {
      fullname: '',
      useremail: '',
      userphone: '',
      username: '',
      password: '',
      rePassword: '',
      addressdetail: '',
      provinceSelected: 'Hưng Yên',
      districtSelected: 'Văn Lâm',
      wardSelected: 'Đình Dù',
      provinces: [{
          name: 'Hồ Chí Minh'
        },
        {
          name: 'Hưng Yên'
        },
        {
          name: 'Hà Nội'
        },
      ],
      districts: [{
          name: 'Vĩnh Khúc'
        },
        {
          name: 'Văn Lâm'
        },
        {
          name: 'Văn Giang'
        },
      ],
      wards: [{
          name: 'Đình Dù'
        },
        {
          name: 'Lạc Hồng'
        },
        {
          name: 'Chỉ Đạo'
        },
      ],
      jobs: [{
          name: 'Sửa xe máy'
        },
        {
          name: 'Sửa quạt, điều hòa,...'
        },
        {
          name: 'Sửa máy tính'
        },
      ],
      pickUser: '',
      pickHome: '',
      jobSelected: 'Sửa quạt, điều hòa,...'
    }
  },
  components: {
    MyButton
  },
  methods: {
    onFilePicked (event) {
      const files = event.target.files
      let fileName = files[0].name
      if (fileName.lastIndexOf('.') <= 0) {
        return alert('Bạn hãy chọn file hợp lệ')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    onFileCMNDPicked (event) {
      const files = event.target.files
      let fileName = files[0].name
      if (fileName.lastIndexOf('.') <= 0) {
        return alert('Bạn hãy chọn file hợp lệ')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/variable.scss';
  .wrap-register {
    background-color: $color-background;
    padding-bottom: 4rem;
    padding-top: 45px;
    .breadcrumb{
      background-color:  $color-background;
      .breadcrumb-item:first-child::after{
        display: inline-block;
        color: $font-color-dark;
        content: ">";
        padding-left: 10px;
        padding-right: 0px;
      }
      .breadcrumb-item:last-child::before{
        display: inline-block;
        color: $font-color-dark;
        content: "";
      }
      li{
          color: $font-color-dark;
      }
      a{
        color: $font-color-dark;
      }
    }
    .wrap-content{
      padding: 25px 25px 50px 25px !important;
      background-color: $color-background-white;
      .form-info{
        .form-group {
          label {
            text-align: right;
          }
          .file {
            position: relative;
          }
          .file label {
            background: #39D2B4;
            padding: 8px 15px;
            color: #fff;
            font-weight: bold;
            font-size: .9em;
            transition: all .4s;
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
            background: #34495E;
            color: #39D2B4;
          }
        }
        .form-control{
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
      .title{
        border-bottom: 1px solid $color-border;
        h3{
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
