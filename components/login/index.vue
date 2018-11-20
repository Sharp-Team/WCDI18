<template>
  <div class="wrap-login">
    <div class="container">
      <div class="row">
        <div class="wrap-content col-md-10 offset-md-1">
          <div class="title">
            <h3>Đăng nhập</h3>
          </div>
          <div class="form-info">
            <form @submit.prevent="USER_SIGNIN(username, password)">
              <div class="form-group row">
                <label
                  for="username"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Tên đăng nhập
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <input
                    id="username"
                    v-model="username"
                    type="text"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="password"
                  class="col-sm-12 col-md-4 col-lg-3 col-form-label"
                >
                  Mật khẩu
                </label>
                <div class="col-sm-12 col-md-7 col-lg-7">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    class="form-control"
                    value="" >
                  <div class="pt-2 pb-3 text-right">
                    <a href="#">Quên mật khẩu?</a>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12 col-md-7 col-lg-7 offset-md-4 offset-lg-3">
                  <my-button
                    class="btn-block"
                    content="Đăng nhập"
                    background="#28a745"
                    background-hover="grey"
                    color="white" />
                  <div class="or-text text-center py-2">
                    Hoặc
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12 col-md-7 col-lg-7 offset-md-4 offset-lg-3">
                  <div class="custom-btn-login">
                    <div class="social-btn text-right mb-2">
                      <no-ssr>
                        <fb-signin-button
                          :params="fbSignInParams"
                          @success="onSignInFBSuccess"
                          @error="onSignInFBError">
                          <button class="btn-block">
                            <a href="#">
                              <img
                                src="/images/facebook.png"
                                alt="facebook"
                              >
                              <span class="text">Đăng nhập bằng Facebook</span>
                            </a>
                          </button>
                        </fb-signin-button>
                      </no-ssr>
                    </div>
                    <div class="social-btn">
                      <no-ssr>
                        <g-signin-button
                          :params="googleSignInParams"
                          @success="onSignInSuccess"
                          @error="onSignInError">
                          <button class="btn-block">
                            <div class="right-social">
                              <a href="#">
                                <img
                                  src="/images/google.png"
                                  alt="google"
                                >
                                <span class="text">Đăng nhập bằng Google</span>
                              </a>
                            </div>
                          </button>
                        </g-signin-button>
                      </no-ssr>
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
import MyButton from '~/components/share/Button'

import USER_SIGNIN from './login'
export default {
  components: {
    MyButton
  },
  data() {
    return {
      username: '',
      password: '',
      googleSignInParams: {
        client_id:
          '53490202765-8lksegphfnljv8tn64c5hnl6nacsnate.apps.googleusercontent.com'
      },
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      }
    }
  },
  beforeMount() {
    window.fbAsyncInit = (function() {
      // FB.init({
      //   appId: '118289005758060',
      //   cookie: true,
      //   xfbml: true,
      //   version: 'v2.8'
      // })
    })(
      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = '//connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    )
  },
  methods: {
    USER_SIGNIN,
    onSignInSuccess(googleUser) {
      const profile = googleUser.getBasicProfile()
      this.$axios
        .post(`/api/user/signup`, {
          username: profile.Eea,
          password: null,
          avatar: profile.Paa,
          email: profile.U3,
          full_name: profile.ig,
          phone_number: null,
          province: null,
          district: null,
          address_detail: null,
          indentify_card: null,
          object: 'Khách hàng',
          career: null
        })
        .then(response => {
          this.$axios
            .post(`/api/user/signin`, {
              username: profile.Eea,
              password: null
            })
            .then(response => {
              this.$toast.open({
                message: 'Đăng nhập thành công!',
                position: 'is-bottom',
                type: 'is-success'
              })
              this.$store.dispatch('SET_USERNAME', profile.ig)
              this.$store.dispatch('SET_AVATAR', response.data.data)
              this.$nuxt.$loading.finish()
              this.$router.push('/')
            })
            .catch(function(error) {
              console.log(error)
            })
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    onSignInError(error) {
      console.log('Không thể đăng nhập!!! ', error)
    },
    onSignInFBSuccess(response) {
      // FB.api('/me', dude => {
      //   console.log(`Good to see you, ${dude.name}.`)
      // })
    },
    onSignInFBError(error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';
.wrap-login {
  background-color: $color-background;
  padding-bottom: 4rem;
  padding-top: 120px;
  .breadcrumb {
    background-color: $color-background;
    .breadcrumb-item:first-child::after {
      display: inline-block;
      color: $font-color-dark;
      content: '>';
      padding-left: 10px;
      padding-right: 0px;
    }
    .breadcrumb-item:last-child::before {
      display: inline-block;
      color: $font-color-dark;
      content: '';
    }
    li {
      color: $font-color-dark;
    }
    a {
      color: $font-color-dark;
    }
  }
  .wrap-content {
    padding: 25px 25px 50px 25px !important;
    background-color: $color-background-white;
    text-align: right;
    .form-info {
      .form-control {
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
    .title {
      border-bottom: 1px solid $color-border;
      h3 {
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
