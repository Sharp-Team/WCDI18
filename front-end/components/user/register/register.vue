<template>
<div class="wrap-register">
  <div class="container">
    <div class="crumb d-none d-md-block">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
        <li class="breadcrumb-item active">Đăng ký</li>
      </ul>
    </div>
    <div class="row">
      <div class="wrap-content col-md-8 offset-md-2">
        <div class="title">
          <h3>Thông tin cơ bản</h3>
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
                    id="check-is-user1"
                    name="is-user"
                    v-model="pickUser"
                    class="custom-control-input">
                  <label class="custom-control-label" for="check-is-user1">Khách hàng</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      value="Người làm việc"
                      id="check-is-user2"
                      name="is-user"
                      v-model="pickUser"
                      class="custom-control-input">
                    <label class="custom-control-label" for="check-is-user2">Người làm việc</label>
                  </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 col-md-7 col-lg-7 offset-md-4 offset-lg-3">
                <my-button class="btn-block" content="Đăng ký" background="#28a745" backgroundHover="grey" color="white" />
                <div class="or-text text-center py-2">Hoặc tạo tài khoản nhanh</div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 col-md-7 col-lg-7 offset-md-4 offset-lg-3">
                <div class="custom-btn-register">
                  <div class="social-btn text-right">
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
      pickUser: ''
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
