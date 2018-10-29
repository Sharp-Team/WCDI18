<template>
  <div class="container form-register">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#register">
      Đăng ký
    </button>
    <div class="modal fade" id="register">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">ĐĂNG KÝ</h3>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="form-group">
                <div class="label">Họ tên</div>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <div class="label">Email</div>
                <input type="email" class="form-control" />
              </div>
              <div class="form-group">
                <div class="label">Số điện thoại</div>
                <input type="tel" class="form-control" />
              </div>
              <div class="form-group">
                <div class="label">Mật khẩu</div>
                <input type="password" class="form-control" />
              </div>
              <div class="form-group">
                <div class="label">Nhập Lại Mật khẩu</div>
                <input type="password" class="form-control" />
              </div>
              <div class="form-group">
                <div class="label">Avatar</div>
                <input type="file" class="form-control-file">
              </div>
              <div class="form-group">
                <div class="label">Đia chỉ</div>
                <select class="form-control mt-2">
                  <option>Tỉnh/ Thành Phố</option>
                  <option>Hưng Yên</option>
                  <option>Hà Nội</option>
                  <option>Nam Định</option>
                  <option>Hồ Chí Minh</option>
                </select>
                <select class="form-control mt-2">
                  <option>Quận/ Huyện</option>
                  <option>Văn Lâm</option>
                  <option>Văn Giang</option>
                </select>
                <select class="form-control mt-2">
                  <option>Phường/ Xã</option>
                  <option>Lạc Hồng</option>
                  <option>Chỉ Đạo</option>
                </select>
              </div>
              <div class="form-group">
                <div class="label">Đia chỉ chi tiết</div>
                <input type="text" class="form-control" placeholder="số nhà, ngõ, phố" />
              </div>
              <div class="form-group">
                <div class="row mt-3">
                  <div class="col-3 label">Đối tượng:</div>
                  <div class="col-9">
                    <div class="custom-control custom-radio custom-control-inline">
                    <input v-model="picked" type="radio" value="first" id="check-is-user1" name="check-is-user" class="custom-control-input">
                    <label class="custom-control-label" for="check-is-user1">Khách hàng</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input v-model="picked" type="radio" value="second" id="check-is-user2" name="check-is-user" class="custom-control-input">
                      <label class="custom-control-label" for="check-is-user2">Người làm việc</label>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="picked === 'second'" class="form-group">
                <div class="label">CMND</div>
                <input type="file" class="form-control-file">
              </div>
              <div class="form-group">
                <div class="row mt-3">
                  <div class="col-3 label">Loại địa chỉ:</div>
                  <div class="col-9">
                    <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="type-address1" name="type-address" class="custom-control-input">
                    <label class="custom-control-label" for="type-address1">Nhà riếng,chung cư</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="type-address2" name="type-address" class="custom-control-input">
                      <label class="custom-control-label" for="type-address2">Cơ quan,công ty</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="pt-2">
                  <button type="button" class="btn btn-block btn-success">Đăng ký</button>
                </div>
                <div class="or-text text-center py-2">Hoặc tạo tài khoản nhanh</div>
                <div class="custom-btn-register">
                  <div class="social-btn text-right">
                    <button class="btn-block">
                      <a href="#">
                        <img src="../../assets/images/facebook.png" alt="facebook" />
                        <span class="text">Đăng nhập bằng Facebook</span>
                      </a>
                    </button>
                  </div>
                  <div class="social-btn">
                    <button class="btn-block">
                      <div class="right-social">
                        <a href="#">
                          <img src="../../assets/images/google.png" alt="google" />
                          <span class="text">Đăng nhập bằng Google</span>
                        </a>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div class="text-center have-acc">Bạn đã có tài khoản?</div>
            <div class="pl-1">
              <button type="button" class="btn-block btn-success">
                Đăng nhập ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      picked: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-register {
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
                float: left;
              }

              .custom-btn-register {
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
          .modal-footer {
            display: flex;
            background-color: rgb(245, 242, 242);
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .form-register .modal .modal-dialog .modal-content .modal-body .form-group .custom-btn-register {
      justify-content: center;
    }
    .form-register .modal .modal-dialog .modal-content .modal-body .form-group .custom-btn-register .social-btn .btn-block span {
      display: none;
    }
    .form-register .modal .modal-dialog .modal-content .modal-body .form-group .custom-btn-register .social-btn {
      border: none;
    }
  }
</style>
