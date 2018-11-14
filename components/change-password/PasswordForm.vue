<template>
    <div class="form-info">
      <form action="">
        <!-- Full Name -->
        <div class="form-group row">
            <label
              for="password"
              class="col-sm-12 col-md-3 col-form-label"
            >
              Mật khẩu cũ
            </label>
            <div class="col-sm-12 col-md-7">
            <input
              type="password"
              class="form-control"
              v-model="password">
            </div>
        </div>

        <div class="form-group row">
          <label
            for="confirm-password"
            class="col-sm-12 col-md-3 col-form-label"
          >
            Mật khẩu mới
          </label>
          <div class="col-sm-12 col-md-7">
          <input
            type="password"
            class="form-control"
            v-model="newPass">
          </div>
        </div>

        <div class="form-group row">
          <label
            for="confirm-password"
            class="col-sm-12 col-md-3 col-form-label"
          >
            Nhập lại mật khẩu
          </label>
          <div class="col-sm-12 col-md-7">
          <input
            type="password"
            class="form-control"
            v-model="newPassConfirm">
          </div>
        </div>
        <div class="update">
          <my-button
            content="Cập nhật"
            background="#2EBE4A"
            backgroundHover="gray"
            color="white"
            data-toggle="modal">
          </my-button>
        </div>
      </form>
    </div>
</template>

<script>
import MyButton from '~/components/share/Button'
export default {
  data () {
    return {
      password: '',
      newPass: '',
      newPassConfirm: ''
    }
  },
  components:{
    MyButton
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
</style>
