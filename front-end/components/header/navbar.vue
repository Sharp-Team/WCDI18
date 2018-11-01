<template>
  <div class="navbar-section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbarBox">
      <button class="navbar-toggler" type="button" id="showMarkMenu">
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">
              Trang chủ
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Tôi cần trợ giúp
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Feedback
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-branch" id="idNavBranch">
        <img src="~/assets/images/icon-navbar/logo-navbar.png" alt="nav-img" class="nav-img" />
      </div>
      <div class="navbar-right">
        <div class="nav-button">
          <img src="~/assets/images/icon-navbar/local.png" alt="local" class="market-image" />
          <div class="market-text">{{ address }}</div>
          <nuxt-link v-if="username === ''" to="/login" class="ml-2" >
            <my-button
              class="is-btn-login ml-4"
              content="Đăng nhập"
              background="white"
              backgroundHover="grey"
              color="black"
            />
          </nuxt-link>
          <nuxt-link v-if="username === ''" to="/register" class="ml-2" >
            <my-button
              content="Đăng ký"
              background="#28a745"
              backgroundHover="grey"
              color="white"
              class="is-btn-register"
            />
          </nuxt-link>
          <nuxt-link v-else to="/profile" class="ml-4">
            <div class="wrap-profile">
              <div class="wrap-img-profile">
                <img :src="imgProfile" alt="image-profile">
              </div>
              <div class="wrap-username">
                {{ username }}
              </div>
            </div>
          </nuxt-link>
          <notification v-if="username !== ''"/>
        </div>
      </div>
    </nav>
    <navmenu
      :username="username"
      :imgProfile="imgProfile"
    />
  </div>
</template>

<script>
  import Notification from '../../components/share/notification.vue'
  import Navmenu from '../../components/header/navmenu.vue'
  import navbar from '../../assets/js/navbar'
  import MyButton from '~/components/share/button.vue'
  export default {
    name: 'Navbar',
    data() {
      return {
        username: '',
        imgProfile: '/images/flame.jpg',
        address: 'Phòng D413, FPT university'
      }
    },
    components: {
      Notification,
      Navmenu,
      MyButton
    },
    beforeMount() {
      navbar()
    }
  }

</script>

<style lang="scss" scoped>
  .navbar-section {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    .navbar {
      padding: 0.5em 1em !important;
      box-shadow: 0 5px 6px rgba(0, 0, 0, 0.05);
    }

    .navbar-toggler {
      border: none !important;
      outline: none !important;
    }

    .navbar-nav {
      .nav-item {
        .nav-link {
          font-weight: 500;
          color: #333;
          font-size: 14px;
          padding: 8px 16px;
          letter-spacing: 0.6px;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }

    .navbar-branch {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      .nav-img {
        height: 42px;
      }
    }

    .navbar-right {
      display: flex;

      .nav-button {
        display: flex;
        align-items: center;

        .market-image {
          height: 20px;
          margin-right: 4px;
        }

        .market-text {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.5);
          font-weight: 500;
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
      }
    }
  }

  @media (max-width: 1300px) {
    .navbar {
      padding: 0.6em 1em !important;
    }

    .navbar-branch {
      .nav-img {
        height: 34px;
      }
    }

    .navbar-right {
      .nav-button {

        .market-image,
        .market-text {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1110px) {
    .navbar-nav {
      .nav-item {
        .nav-link {
          padding: 8px 8px !important;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .navbar-right {
      .nav-button {
        a {
          display: none;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .navbar {
      padding: 0.5em 1em !important;
    }

    .navbar-toggler {
      .navbar-toggler-icon {
        width: 1.1em;
        height: 1.1em;
      }
    }

    .navbar-branch {
      .nav-img {
        height: 24px;
      }
    }
  }

</style>
