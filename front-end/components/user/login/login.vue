<template>
<div class="wrap-login">
  <div class="container">
    <div class="row">
      <div class="wrap-content col-md-10 offset-md-1">
        <div class="title">
          <h3>Đăng nhập</h3>
        </div>
        <div class="form-info">
          <form @submit.prevent="signin">
            <div class="form-group row">
              <label for="username" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Tên đăng nhập</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <input v-model="username" type="text" class="form-control" id="username">
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-sm-12 col-md-4 col-lg-3 col-form-label">Mật khẩu</label>
              <div class="col-sm-12 col-md-7 col-lg-7">
                <input v-model="password" type="password" class="form-control" id="password" value="" >
                <div class="pt-2 pb-3 text-right">
                  <a href="#">Quên mật khẩu?</a>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 col-md-7 col-lg-7 offset-md-4 offset-lg-3">
                <my-button class="btn-block" content="Đăng nhập" background="#28a745" backgroundHover="grey" color="white" />
                <div class="or-text text-center py-2">Hoặc</div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 col-md-7 col-lg-7 offset-md-4 offset-lg-3">
                <div class="custom-btn-login">
                  <div class="social-btn text-right mb-2">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import MyButton from '~/components/share/button.vue';
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    components: {
      MyButton
    },
    methods: {
      signin() {
        this.$axios.post(`api/user/signin`, {
          username: this.username,
          password: this.password
        })
        .then(result => {
          console.log(result)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';
  .wrap-login {
    background-color: $color-background;
    padding-bottom: 4rem;
    padding-top:45px;
    .breadcrumb{
      background-color:  $color-background;
      .breadcrumb-item:first-child::after{
        display: inline-block;
        color: $font-color-dark;
        content: ">";
        padding-left: 10px;
        padding-right: 0px;
      }
      .breadcrumb-item:last-child::before{
        display: inline-block;
        color: $font-color-dark;
        content: "";
      }
      li{
          color: $font-color-dark;
      }
      a{
        color: $font-color-dark;
      }
    }
    .wrap-content{
      padding: 25px 25px 50px 25px !important;
      background-color: $color-background-white;
      text-align: right;
      .form-info{
        .form-control{
          background-color: $color-background-white;
          font-weight: bold;
        }
        padding-top: 40px;
        .custom-btn-login {
          .social-btn {
            border: 1px solid #7e7e7e;
            margin-left: 4px;
            border-radius: 4%;
            .btn-block {
              a {
                text-decoration: none;
                display: inline-table;
              }
              cursor: pointer;
              border: none;
              span {
                font-size: 16px;
                margin-left: 15px;
                color: rgb(102, 102, 102);
              }
              .right-social {
                padding-top: 5px;
              }
            }
          }
        }
      }
      .title{
        border-bottom: 1px solid $color-border;
        h3{
          text-align: left;
          text-transform: uppercase;
          font-family: sans-serif;
          font-size: 18px;
          padding-bottom: 15px;
          padding-top: 20px;
          font-weight: bold;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .wrap-login {
      .wrap-content {
        .title {
          h3 {
            font-size: $font-title-mobile !important;
            padding-bottom: 5px !important;
          }
          border-bottom: none !important;
        }
        .form-info {
          padding-top: 0px !important;
          label {
            text-align: left;
            font-size: $font-title-small-mobile;
            padding-bottom: 3px;
            padding-top: 5px;
          }
          .form-control {
            font-size: $font-title-small-mobile !important;
          }
          .form-group {
            padding-bottom: 0px !important;
          }
          .text-right {
            font-size: $font-title-small-mobile !important;
          }
          .or-text {
            font-size: $font-title-small-mobile !important;
          }
          .custom-btn-login {
            display: flex;
            justify-content: center;
          }
          .custom-btn-login .social-btn .btn-block span {
            display: none;
          }
          .custom-btn-login .social-btn {
            border: none;
          }
        }
      }
    }
  }
</style>


