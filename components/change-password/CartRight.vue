<template>
  <div class="d-none d-sm-block is-content">
    <div class="title">
      <h3>Đổi mật khẩu</h3>
    </div>
    <password-form />
  </div>
</template>

<script>
import PasswordForm from './PasswordForm'
export default {
  components: {
    PasswordForm
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';
@import '~/assets/scss/profile.scss';
</style>
