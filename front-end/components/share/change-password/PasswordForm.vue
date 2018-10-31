<template>
    <div class="form-info">
      <form action="">
        <!-- Full Name -->
        <div class="form-group row">
            <label for="password" class="col-sm-12 col-md-3 col-form-label">Mật khẩu cũ</label>
            <div class="col-sm-12 col-md-7">
            <input type="password" class="form-control">
            </div>
        </div>

        <div class="form-group row">
          <label for="confirm-password" class="col-sm-12 col-md-3 col-form-label">Mật khẩu mới</label>
          <div class="col-sm-12 col-md-7">
          <input type="password" class="form-control">
          </div>
        </div>

        <div class="form-group row">
          <label for="confirm-password" class="col-sm-12 col-md-3 col-form-label">Nhập lại mật khẩu</label>
          <div class="col-sm-12 col-md-7">
          <input type="password" class="form-control">
          </div>
        </div>
        <div class="update">
            <my-button content="Cập nhật" background="#2EBE4A" backgroundHover="white" color="black" data-toggle="modal"></my-button>
        </div>
      </form>
    </div>
</template>

<script>
import MyButton from './../button'
export default {
  components:{
    MyButton
  }
}
</script>


<style lang="scss">
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
  .form-info{
    .update{
        text-align: center;
        padding-top: 30px;
    }
  }
</style>
