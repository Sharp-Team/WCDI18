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
            <button type="button" class="btn btn-success">Cập nhật</button>
        </div>
      </form>
    </div>
</template>

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
