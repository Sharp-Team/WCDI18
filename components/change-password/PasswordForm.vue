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
            v-model="oldpassword"
            type="password"
            class="form-control"
          >
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
            v-model="password"
            type="password"
            class="form-control"
          >
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
            v-model="repassword"
            type="password"
            class="form-control"
          >
        </div>
      </div>
      <div class="update">
        <my-button
          content="Cập nhật"
          background="#2EBE4A"
          background-hover="gray"
          color="white"
          type="submit" />
      </div>
    </form>
  </div>
</template>

<script>
import MyButton from '~/components/share/Button'
import CHANGE_PASSWORD from './password'

export default {
  components: {
    MyButton
  },
  data() {
    return {
      username: null,
      oldpassword: '',
      password: '',
      repassword: ''
    }
  },
  beforeMount() {
    this.username = this.$store.getters.GET_USERNAME
  },
  methods: {
    CHANGE_PASSWORD
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variable.scss';
@import '~/assets/scss/profile.scss';
</style>
