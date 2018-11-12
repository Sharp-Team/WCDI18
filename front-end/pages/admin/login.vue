<template>
  <div class="page login-page">
    <div class="container">
      <div class="form-outer text-center d-flex align-items-center">
        <div class="form-inner">
          <div class="logo text-uppercase">
            <span>Go</span>
            <strong class="text-primary">Green</strong>
          </div>
          <form
            @submit.prevent="login"
            class="text-left form-validate">
            <div class="form-group-material">
              <label
                for="login-username"
                class="label-material"
              >
                Username
              </label>
              <input
                id="login-username"
                type="text"
                name="loginUsername"
                required data-msg="Please enter your username"
                class="input-material"
                v-model="username">
            </div>
            <div class="form-group-material">
              <label
                for="login-password"
                class="label-material"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                name="loginPassword"
                required data-msg="Please enter your password"
                class="input-material"
                v-model="password">
            </div>
            <div class="form-group text-center">
              <a id="login" href="index.html" class="btn btn-primary">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    }
  };

</script>

<style lang="scss" scoped>
.form-group-material {
  justify-content: space-between;
  display: flex;
  margin-bottom: 9px;
}
.text-primary {
  color: #23b34a !important;
}
.login-page,
.register-page {
  width: 100%;
  background: #f5f5f5;
  min-height: auto;
  padding-bottom: 0;
}

.login-page .form-outer,
.register-page .form-outer {
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
}

.login-page .copyrights,
.register-page .copyrights {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}

.login-page .copyrights p,
.register-page .copyrights p {
  font-size: 0.6em;
  font-weight: 300;
  margin-bottom: 10px;
}

.login-page .form-inner,
.register-page .form-inner {
  padding: 40px 30px;
  background: #fff;
  -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
}

.login-page .logo,
.register-page .logo {
  font-size: 2em;
  font-weight: 500;
}

.login-page .logo span,
.register-page .logo span {
  color: #ccc;
}

.login-page p,
.register-page p {
  font-size: 0.8em;
  font-weight: 300;
  color: #aaa;
  margin-bottom: 0;
}

.login-page form,
.register-page form {
  margin: 2rem auto 1rem;
  max-width: 260px;
}

.login-page a.forgot-pass,
.login-page a.signup,
.register-page a.forgot-pass,
.register-page a.signup {
  font-size: 0.65em;
  color: #2ebe4a;
}

.login-page a.forgot-pass:hover, .login-page a.forgot-pass:focus,
.login-page a.signup:hover,
.login-page a.signup:focus,
.register-page a.forgot-pass:hover,
.register-page a.forgot-pass:focus,
.register-page a.signup:hover,
.register-page a.signup:focus {
  color: #2ebe4a;
  text-decoration: none;
}

.login-page a.forgot-pass,
.register-page a.forgot-pass {
  display: block;
}

.login-page a.create-account,
.register-page a.create-account {
  border-radius: 50px;
  font-size: 0.75em;
  margin-top: 10px;
  color: #999;
  text-transform: uppercase;
}

.login-page .terms-conditions,
.register-page .terms-conditions {
  margin-top: 20px;
}

.login-page small,
.register-page small {
  font-size: 0.65em;
  color: #aaa;
  line-height: 0.9em;
}

/* LOGIN MEDIAQUERIES -------------------------- */
@media (min-width: 768px) {
  .login-page p,
  .register-page p {
    font-size: 0.9em;
  }
  .login-page form label.label-custom,
  .register-page form label.label-custom {
    font-size: 0.9em;
  }
  .login-page form small,
  .register-page form small {
    font-size: 0.8em;
  }
  .login-page .terms-conditions label,
  .register-page .terms-conditions label {
    font-size: 0.9em;
  }
  .login-page a.forgot-pass,
  .login-page a.signup,
  .register-page a.forgot-pass,
  .register-page a.signup {
    font-size: 0.8em;
  }
  .login-page small,
  .register-page small {
    font-size: 0.8em;
  }
  .login-page .copyrights p,
  .register-page .copyrights p {
    font-size: 0.85em;
    font-weight: 400;
  }
}
</style>
