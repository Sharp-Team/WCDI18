<template>
    <div class="form-info">
      <form @submit.prevent="CHANGE_PASSWORD(username, oldpassword, password, repassword)">
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
              v-model="oldpassword">
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
            v-model="password">
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
            v-model="repassword">
          </div>
        </div>
        <div class="update">
          <my-button
            content="Cập nhật"
            background="#2EBE4A"
            backgroundHover="gray"
            color="white"
            type="submit">
          </my-button>
        </div>
      </form>
    </div>
</template>

<script>
import MyButton from '~/components/share/Button'
import CHANGE_PASSWORD from './password'

export default {
  data() {
    return {
      username: null,
      oldpassword: '',
      password: '',
      repassword: ''
    }
  },
  components:{
    MyButton
  },
  methods: {
    CHANGE_PASSWORD
  },
  beforeMount() {
    this.username = this.$store.getters.GET_USERNAME
  },
}
</script>

<style lang="scss">
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
</style>
