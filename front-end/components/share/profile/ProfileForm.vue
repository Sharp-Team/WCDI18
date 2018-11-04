<template>
  <div class="form-info">
    <form action="">
      <!-- Full Name -->
      <div class="form-group row">
        <label for="fullname" class="col-sm-12 col-md-3 col-form-label">Họ tên đầy đủ</label>
        <div class="col-sm-12 col-md-7">
          <input
            type="text"
            class="form-control"
            id="fullname"
            v-model="name"
            disabled>
        </div>
      </div>
      <!-- Username -->
      <div class="form-group row">
        <label for="username" class="col-sm-12 col-md-3 col-form-label">Tên đăng nhập</label>
        <div class="col-sm-12 col-md-7">
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="username"
            disabled>
        </div>
      </div>
      <!-- Email -->
      <div class="form-group row">
        <label for="email" class="col-sm-3 col-form-label">Địa chỉ E-mail</label>
        <div class="col-sm-12 col-md-7">
          <input
            type="text"
            class="form-control"
            id="email"
            v-model="email"
            disabled>
        </div>
      </div>
      <!-- Mobile -->
      <div class="form-group row">
        <label for="mobile" class="col-sm-12 col-md-3 col-form-label">Số điện thoại</label>
        <div class="col-sm-12 col-md-7">
          <input
            type="text"
            class="form-control"
            id="mobile"
            v-model="phone"
            disabled>
          <div class="confirm">
            <span>Đã xác thực</span>
            <i class="fas fa-check"></i>
          </div>
        </div>
      </div>
      <!-- Đối tượng -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-md-3 col-form-label">Đối tượng</label>
        <div class="col-sm-12 col-md-7">
          <select class="form-control" disabled>
            <option>{{ groupUser }}</option>
          </select>
        </div>
      </div>
      <!-- Address -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-md-3 col-form-label">Tỉnh/Thành phố</label>
        <div class="col-sm-12 col-md-7">
          <select class="form-control" disabled>
            <option>{{ province }}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-12 col-md-3 col-form-label">Quận/Huyện</label>
        <div class="col-sm-12 col-md-7">
          <select class="form-control" disabled>
            <option>{{ district }}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-12 col-md-3 col-form-label">Địa chỉ</label>
        <div class="col-sm-12 col-md-7">
          <textarea class="form-control" rows="3" disabled v-model="address">
          </textarea>
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-12 col-md-3 col-form-label">Loại địa chỉ</label>
        <div class="col-sm-12 col-md-7">
          <select class="form-control" disabled>
            <option>{{ groupAddress }}</option>
          </select>
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
    data () {
      return {
        name: 'Phan Văn Đức',
        username: 'phanduc0908',
        email: 'phanduc0908@gmail.com',
        phone: '0981131870',
        groupUser: 'Khách hàng',
        province: 'Hà Nội',
        district: 'Chương Mỹ',
        address: 'Xóm Đình, thôn Cốc Thượng, xã Hoàng Diệu, huyện Chương Mỹ, thành phố Hà Nội',
        groupAddress: 'Nhà riêng'
      }
    }
  }
</script>
