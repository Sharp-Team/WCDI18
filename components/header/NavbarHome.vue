<template>
  <div class="navbar-section">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light section-empty"
      id="navbarBox">
      <button
        class="navbar-toggler"
        type="button"
        id="showMarkMenu">
        <span class="navbar-toggler-icon" />
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link
              to="/"
              class="nav-link"
            >
              Trang chủ
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Tôi cần trợ giúp
            </a>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="feedback">
              Feedback
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div
        class="navbar-branch"
        id="idNavBranch">
        <img
          src="/images/icon-navbar/logo-navbar.png"
          alt="nav-img"
          class="nav-img" />
      </div>
      <div class="navbar-right">
        <div class="nav-button">
          <img
            src="/images/icon-navbar/local.png"
            alt="local"
            class="market-image" />
          <div class="market-text">{{ address }}</div>
          <nuxt-link
            v-if="username === ''"
            to="/login"
            class="ml-2">
            <my-button
              class="is-btn-login ml-4"
              content="Đăng nhập"
              background="white"
              backgroundHover="grey"
              color="black" />
          </nuxt-link>
          <nuxt-link
            v-if="username === ''"
            to="/register"
            class="ml-2">
            <my-button
              content="Đăng ký"
              background="#28a745"
              backgroundHover="grey"
              color="white"
              class="is-btn-register" />
          </nuxt-link>
          <nuxt-link
            v-else
            to="/profile"
            class="ml-4">
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
          </nuxt-link>
          <notification v-if="username !== ''" />
        </div>
      </div>
    </nav>
    <navmenu
      :username="username"
      :imgProfile="imgProfile" />
  </div>
</template>

<script>
  import Notification from '~/components/share/Notification'
  import MyButton from '~/components/share/Button'
  import Navmenu from './Navmenu'
  import navbar from '~/assets/js/navbar'

  export default {
    name: 'Navbar',
    data() {
      return {
        username: '',
        imgProfile: '/images/flame.jpg',
        address: 'Room D413, FPT university'
      }
    },
    components: {
      Notification,
      Navmenu,
      MyButton
    },
    methods: {
      getOffsetTop() {
        return window.scrollY
      },
      handleScroll() {
        const narbar = document.getElementsByClassName('navbar')[0]
        if (this.getOffsetTop() > 50) {
          narbar.classList.remove('section-empty')
        } else {
          narbar.classList.add('section-empty')
        }
      }
    },
    beforeMount() {
      navbar()
      window.addEventListener('scroll', this.handleScroll)
    },
    mounted() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            var geocoder = new google.maps.Geocoder()
            geocoder.geocode({
              location: pos
            }, (results, status) => {
              if (status === 'OK') {
                if (results[0]) {
                  this.address = results[0].formatted_address
                } else {
                  window.alert('No results found')
                }
              } else {
                window.alert('Geocoder failed due to: ' + status)
              }
            })
          },
          function () {
            handleLocationError(true, infoWindow, this.map.getCenter())
          }
        )
      } else {
        handleLocationError(false, infoWindow, map.getCenter())
      }
    },
  }

</script>

<style lang="scss" scoped>
  .section-empty {
    background-color: rgba(255, 255, 255, 0) !important;

    .nav-img {
      visibility: hidden;
    }

    .market-text {
      color: #2ebe4a !important;
    }

    .wrap-username {
      color: #a7a7a7 !important;
    }

    .wrap-icon-noti {
      color: #a7a7a7 !important;
      background-color: #5d5d5d !important;
    }

    .nav-item {
      .nav-link {
        color: #8c8c8c !important;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

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
