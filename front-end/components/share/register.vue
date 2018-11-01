<template>
  <div class="form-register">
    <my-button
      content="Đăng ký"
      background="#28a745"
      backgroundHover="grey"
      color="white"
      data-toggle="modal"
      data-target="#register"
    />
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
                <div class="label">Username</div>
                <input type="text" class="form-control" />
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
                  <option v-for="province in provinces" :key=province.id>
                    {{ province.name }}
                  </option>
                </select>
                <select class="form-control mt-2">
                  <option v-for="district in districts" :key=district.id>
                    {{ district.name }}
                  </option>
                </select>
                <select class="form-control mt-2">
                  <option v-for="ward in wards" :key=ward.id>
                    {{ ward.name }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <textarea type="text" class="form-control" placeholder="Số nhà, ngõ, phố" rows="3"></textarea>
              </div>
              <div class="form-group">
                <div class="row mt-3">
                  <div class="col-4 label">Đối tượng:</div>
                  <div class="col-8">
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="Khách hàng" id="check-is-user1" name="is-user" v-model="picked" class="custom-control-input">
                      <label class="custom-control-label" for="check-is-user1">Khách hàng</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" value="Người làm việc" id="check-is-user2" name="is-user" v-model="picked"
                        class="custom-control-input">
                      <label class="custom-control-label" for="check-is-user2">Người làm việc</label>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="isWorker" class="form-group">
                <div class="label">CMND</div>
                <input type="file" class="form-control-file">
              </div>
              <div class="form-group">
                <div class="row mt-3">
                  <div class="col-4 label">Loại địa chỉ:</div>
                  <div class="col-8">
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="type-address1" name="type-address" value="Nhà riếng,chung cư" class="custom-control-input">
                      <label class="custom-control-label" for="type-address1">Nhà riêng, chung cư</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="type-address2" name="type-address" value="Cơ quan,công ty" class="custom-control-input">
                      <label class="custom-control-label" for="type-address2">Cơ quan, công ty</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="pt-2">
                  <my-button
                    content="Đăng ký"
                    background="#28a745"
                    backgroundHover="grey"
                    color="white"
                    class="btn btn-block is-btn-register"
                  />
                </div>
                <div class="or-text text-center py-2">Hoặc tạo tài khoản nhanh</div>
                <div class="custom-btn-register">
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
          <div class="modal-footer">
            <div class="text-center have-acc">Bạn đã có tài khoản?</div>
            <div class="pl-1">
              <my-button
                content="Đăng nhập ngay"
                background="#28a745"
                backgroundHover="grey"
                color="white"
                class="btn btn-block is-btn-now"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MyButton from '~/components/share/button.vue';
  export default {
    name: 'Register',
    data() {
      return {
        provinces: [{
            name: 'Tỉnh/ Thành Phố'
          },
          {
            name: 'Hưng Yên'
          },
          {
            name: 'Hà Nội'
          },
        ],
        districts: [{
            name: 'Quận/ Huyện'
          },
          {
            name: 'Văn Lâm'
          },
          {
            name: 'Văn Giang'
          },
        ],
        wards: [{
            name: 'Phường/ Xã'
          },
          {
            name: 'Lạc Hồng'
          },
          {
            name: 'Chỉ Đạo'
          },
        ],
        picked: null
      }
    },
    components: {
      MyButton
    },
    computed: {
      isWorker: function () {
        return this.picked === 'Người làm việc'
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variable.scss';

  .is-btn-now {
    padding: 0px 25px !important;
  }
  .is-btn-register {
    padding: 1px 25px !important;
  }

  .form-register {
    .btn {
      font-weight: 600 !important;
    }

    button.btn.btn-success.my-btn {
      width: 8rem;
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

    .form-register .modal .modal-dialog .modal-content .modal-header h3 {
      font-size: $font-title-mobile !important;
    }

    .form-register .modal .modal-dialog .modal-content .modal-body .form-group .label {
      font-size: $font-title-small-mobile !important;
    }

    .form-register .modal .modal-dialog .modal-content .modal-body .form-group .form-control {
      font-size: $font-title-small-mobile !important;
    }

    .form-register .modal .modal-dialog .modal-content .modal-body .form-group .or-text.text-center.py-2 {
      font-size: $font-description-mobile !important;
    }

    .form-register .modal .modal-dialog .modal-content .modal-footer .text-center.have-acc {
      font-size: $font-title-small-mobile !important;
    }

    .form-register .modal .modal-dialog .modal-content .modal-body .form-group .row .col-8 .custom-control label.custom-control-label {
      font-size: $font-title-small-mobile !important
    }

    .form-register .modal .modal-dialog .modal-content .modal-body .form-group .row .col-8 {
      bottom: 5px;
    }
  }

</style>
