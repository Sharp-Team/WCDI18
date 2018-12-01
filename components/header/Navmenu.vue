<template>
  <div class="menu-section">
    <div
      id="modalNavbar"
      class="modal mark-menu"
    >
      <div
        id="contentNavbar"
        class="modal-menu-content flex-column contentNavbar1"
      >
        <div
          id="showContact"
          class="menu-header"
        >
          <div v-if="username === null">
            <nuxt-link
              to="/login"
              class="user-login"
            >
              Đăng nhập
            </nuxt-link>
            <span
              class="flat-line">/</span>
            <nuxt-link
              to="/register"
              class="user-register">
              Đăng ký
            </nuxt-link>
          </div>
          <div v-else>
            <nuxt-link
              to="/profile">
              <div class="wrap-profile">
                <div class="wrap-img-profile">
                  <img
                    :src="avatar"
                    alt="image-profile">
                </div>
                <div class="wrap-username">
                  {{ username }}
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="navbar-horizontal">
          <ul class="list-menu">
            <li>
              <nuxt-link to="/">Trang chủ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/feedback">Feed back</nuxt-link>
            </li>
            <li v-if="username !== null">
              <nuxt-link
                to="/"
                @click="logout">Đăng xuất
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="menu-contact">
          <ul class="list-menu">
            <li>
              <a href="#">Hotline: 0123456789</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
            <li>
              <a href="#">Version 1.0</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    username() {
      return this.$store.getters.GET_FULL_NAME
    },
    avatar() {
      return this.$store.getters.GET_AVATAR
    }
  },
  methods: {
    logout() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      const username = this.$store.getters.GET_USERNAME
      this.$io.customerOffline({
        username: username
      })
      this.$io.workerOffline({
        username: username
      })
      this.$axios
        .get(`/api/user/signout`)
        .then(response => {
          console.log(response)
          this.$toast.open({
            message: 'Đăng xuất thành công!',
            position: 'is-bottom',
            type: 'is-success'
          })
          this.$nuxt.$loading.finish()
          this.$router.push('/')
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
.menu-section {
  .mark-menu {
    visibility: hidden;
    z-index: 1000 !important;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: block !important;
    cursor: pointer;
  }
  .modal-menu-content {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fefefe;
    width: 260px;
    height: 100vh;
    overflow-y: scroll;
    border: 0 !important;
    border-radius: 0 !important;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .contentNavbar1 {
    transform: translateX(-120%);
  }
  .contentNavbar2 {
    transform: translateX(0);
  }
  .menu-header {
    background: $color-main;
    padding: 0.7em 0 0.7em 15px;
    color: #fff;
    font-size: 16px;
    .user-login {
      font-size: $font-title-small-mobile;
      cursor: pointer;
      color: #fff;
      text-decoration: underline;
    }
    .user-register {
      font-size: $font-title-small-mobile;
      cursor: pointer;
      color: #fff;
      text-decoration: underline;
    }
    .wrap-profile {
      display: flex;
      .wrap-img-profile {
        img {
          margin-right: 0.4em;
          width: 1.9em;
          height: 1.9em;
          border-radius: 100%;
        }
      }
      .wrap-username {
        padding-top: 3px;
        color: #333;
        font-weight: 500;
      }
    }
    .flat-line {
      margin: 0 0.45em;
    }
  }
  .navbar-horizontal,
  .menu-contact {
    .list-menu {
      list-style: none;
      padding-left: 15px;
      padding-top: 1em;
      padding-bottom: 1em;
      margin-bottom: 0;
      li {
        margin: 0.2em 0;
        font-size: $font-title-small-mobile;
        a {
          color: #000;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
  }
  .menu-contact {
    margin-top: auto;
    background: #f2f2f2;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
}
</style>
