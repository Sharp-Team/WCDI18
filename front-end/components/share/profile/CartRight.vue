<template>
  <div class="d-none d-sm-block is-content">
    <div class="title">
      <h3>Thông tin cơ bản</h3>
    </div>
    <profile-form></profile-form>
  </div>
</template>

<script>
import ProfileForm from './ProfileForm'
export default {
  components:{
    ProfileForm
  }
}
</script>

<style lang="scss"  scoped>
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
</style>
