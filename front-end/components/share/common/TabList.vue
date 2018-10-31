<template>
    <div>
      <div class="title">
        <h3>Thông tin tài khoản</h3>
        <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home">Thông tin cơ bản</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu1">Đổi mật khẩu</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu2">Lịch sử</a>
        </li>
      </ul>
      </div>
      

        <!-- Tab panes -->
      <div class="tab-content">
        <div id="home" class="tab-pane active"><br>
          <profile-form></profile-form>
        </div>
        <div id="menu1" class="tab-pane fade"><br>
          <password-form></password-form>
        </div>
        <div id="menu2" class="tab-pane fade"><br>
          <table-data></table-data>
        </div>
      </div>
    </div>
</template>

<script>
import ProfileForm from './../profile/ProfileForm'
import PasswordForm from './../change-password/PasswordForm'
import TableData from './../history/TableData'
export default {
  components:{
      ProfileForm,
      PasswordForm,
      TableData
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
</style>
