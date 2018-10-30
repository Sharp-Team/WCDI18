<template>
  <div class="container form-login">
    <button type="button" class="btn" data-toggle="modal" data-target="#login">
      Đăng nhập
    </button>
    <div class="modal fade" id="login">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">ĐĂNG NHẬP</h3>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="form-group">
                <div class="label">Email</div>
                <input type="email" class="form-control" />
                <div class="label">Mật khẩu</div>
                <input type="password" class="form-control" />
                <div class="pt-2 pb-3 text-right">
                  <a href="#">Quên mật khẩu?</a>
                </div>
                <button type="submit" class="btn btn-block btn-success">Đăng nhập</button>
                <div class="or-text text-center py-2">Hoặc</div>
                <div class="custom-btn-login">
                  <div class="social-btn text-right">
                    <button class="btn-block">
                      <a href="#">
                        <img src="~/assets/images/facebook.png" alt="facebook" />
                        <span class="text">Đăng nhập bằng Facebook</span>
                      </a>
                    </button>
                  </div>
                  <div class="social-btn">
                    <button class="btn-block">
                      <div class="right-social">
                        <a href="#">
                          <img src="~/assets/images/google.png" alt="google" />
                          <span class="text">Đăng nhập bằng Google</span>
                        </a>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
  .form-login {
    .btn {
      font-weight: 500;
    }
    .modal {
      .modal-dialog {
        .modal-content {
          .modal-header {
            h3 {
              font-size: 1.9rem !important;
              font-weight: 600;
            }
          }
          .modal-body {
            .form-group {
              padding: 0px 30px;
              .label {
                margin-top: 12px;
                margin-bottom: 6px;
                float: left;
              }
              .custom-btn-login {
                display: flex;
                .social-btn {
                  border: 1px solid #7e7e7e;
                  margin-left: 4px;
                  border-radius: 4%;
                  .btn-block {
                    a {
                      text-decoration: none;
                    }
                    cursor: pointer;
                    border: none;
                    span {
                      font-size: 12px;
                      margin-left: 4px;
                      color: rgb(102, 102, 102);
                    }
                    .right-social {
                      padding-top: 5px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .form-login .modal .modal-dialog .modal-content .modal-body .form-group .custom-btn-login {
      justify-content: center;
    }
    .form-login .modal .modal-dialog .modal-content .modal-body .form-group .custom-btn-login .social-btn .btn-block span {
      display: none;
    }
    .form-login .modal .modal-dialog .modal-content .modal-body .form-group .custom-btn-login .social-btn {
      border: none;
    }
    .form-login .modal .modal-dialog .modal-content .modal-header h3 {
      font-size: $font-title-mobile !important;
    }
    .form-login .modal .modal-dialog .modal-content .modal-body .form-group .label {
      font-size: $font-title-small-mobile !important;
    }
    .form-login .modal .modal-dialog .modal-content .modal-body .form-group .form-control {
      font-size: $font-title-small-mobile !important;
    }
    .form-login .modal .modal-dialog .modal-content .modal-body .form-group .or-text.text-center.py-2 {
      font-size: $font-description-mobile !important;
    }
    .form-login .modal .modal-dialog .modal-content .modal-body .form-group .text-right a {
      font-size: $font-title-small-mobile !important;
    }
  }
</style>
