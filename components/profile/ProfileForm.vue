<template>
  <div class="form-info">
    <form action="">
      <!-- Full Name -->
      <div class="form-group row">
        <label
          for="fullname"
          class="col-sm-12 col-md-3 col-form-label"
        >
          Họ tên đầy đủ
        </label>
        <div class="col-sm-12 col-md-7">
          <input
            v-model="name"
            type="text"
            class="form-control"
            disabled>
        </div>
      </div>
      <!-- Username -->
      <div class="form-group row">
        <label
          for="username"
          class="col-sm-12 col-md-3 col-form-label"
        >
          Tên đăng nhập
        </label>
        <div class="col-sm-12 col-md-7">
          <input
            v-model="username"
            type="text"
            class="form-control"
            disabled>
        </div>
      </div>
      <!-- Email -->
      <div class="form-group row">
        <label
          for="email"
          class="col-sm-3 col-form-label"
        >
          Địa chỉ E-mail
        </label>
        <div class="col-sm-12 col-md-7">
          <input
            v-model="email"
            type="text"
            class="form-control"
            disabled>
        </div>
      </div>
      <!-- Mobile -->
      <div class="form-group row">
        <label
          for="mobile"
          class="col-sm-12 col-md-3 col-form-label"
        >
          Số điện thoại
        </label>
        <div class="col-sm-12 col-md-7">
          <input
            v-model="phone"
            type="text"
            class="form-control"
            disabled>
          <div class="confirm">
            <span>Đã xác thực</span>
            <i class="fas fa-check" />
          </div>
        </div>
      </div>
      <!-- Đối tượng -->
      <div class="form-group row">
        <label
          for=""
          class="col-sm-12 col-md-3 col-form-label"
        >
          Đối tượng
        </label>
        <div class="col-sm-12 col-md-7">
          <select
            class="form-control"
            disabled>
            <option>{{ groupUser }}</option>
          </select>
        </div>
      </div>
      <!-- Address -->
      <div class="form-group row">
        <label
          for=""
          class="col-sm-12 col-md-3 col-form-label"
        >
          Tỉnh/Thành phố
        </label>
        <div class="col-sm-12 col-md-7">
          <select
            class="form-control"
            disabled
          >
            <option>{{ province }}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label
          for=""
          class="col-sm-12 col-md-3 col-form-label"
        >
          Quận/Huyện
        </label>
        <div class="col-sm-12 col-md-7">
          <select
            class="form-control"
            disabled>
            <option>{{ district }}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label
          for=""
          class="col-sm-12 col-md-3 col-form-label"
        >
          Địa chỉ
        </label>
        <div class="col-sm-12 col-md-7">
          <textarea
            v-model="address"
            class="form-control"
            rows="3"
            disabled
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';
@import '~/assets/scss/profile.scss';
</style>

<script>
export default {
  data() {
    return {
      name: '',
      username: '',
      email: '',
      phone: '',
      groupUser: '',
      province: '',
      district: '',
      address: ''
    }
  },
  beforeMount() {
    this.$axios
      .post(`/api/user/profile`, {
        username: this.$store.getters.GET_USERNAME
      })
      .then(response => {
        if (response.data.error) {
          this.$toast.open({
            message: response.data.error,
            position: 'is-bottom',
            type: 'is-danger'
          })
          return
        }
        this.name = response.data.full_name
        this.username = response.data.username
        this.email = response.data.email
        this.phone = response.data.phone_number
        this.groupUser = response.data.object
        this.province = response.data.province
        this.district = response.data.district
        this.address = response.data.address_detail
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>
