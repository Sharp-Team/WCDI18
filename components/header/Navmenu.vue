<template>
  <div class="menu-section">
    <div
      id="markMenuModal"
      class="modal mark-menu"
    >
      <div
        id="markModalMenuContent"
        class="modal-menu-content flex-column modal-menu-content-1"
      >
        <div
          id="showContact"
          class="menu-header"
        >
          <a
            v-if="username === ''"
            href="/login"
            class="user-login"
          >
            Đăng nhập
          </a>
          <span
            v-if="username === ''"
            class="flat-line">/</span>
          <a
            v-if="username === ''"
            href="/register"
            class="user-register">
            Đăng ký
          </a>
          <a
            v-else
            href="/profile">
            <div class="wrap-profile">
              <div class="wrap-img-profile">
                <img
                  :src="imgProfile"
                  alt="image-profile">
              </div>
              <div class="wrap-username">
                {{ username }}
              </div>
            </div>
          </a>
        </div>
        <div class="navbar-horizontal">
          <ul class="list-menu">
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Feed back</a>
            </li>
          </ul>
        </div>
        <div class="menu-contact">
          <ul class="list-menu">
            <li>
              <a href="#">Hotline: 0349088188</a>
            </li>
            <li>
              <a href="#">Điều khoản</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
            <li>
              <a href="#">F&Q</a>
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
import navbar from '~/assets/js/navbar'
export default {
  props: {
    username: {
      type: String,
      default: ''
    },
    imgProfile: {
      type: String,
      default: ''
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
  .modal-menu-content-1 {
    transform: translateX(-120%);
  }
  .modal-menu-content-2 {
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
