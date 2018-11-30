<template>
  <div class="navbar-section">
    <nav
      id="navbarBox"
      class="navbar navbar-expand-lg navbar-light bg-light"
    >
      <button
        id="showNavbar"
        class="navbar-toggler"
        type="button"
      >
        <span
          class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNavDropdown"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              href="/"
              class="nav-link"
            >
              Trang chủ
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="/feedback">
              Feedback
            </a>
          </li>
        </ul>
        <img
          src="/images/icon-navbar/local.png"
          alt="local"
          class="market-image"
        >
        <div class="market-text">{{ address }}</div>
      </div>
      <div
        id="idNavBranch"
        class="navbar-branch"
      >
        <a href="/">
          <img
            src="/images/icon-navbar/logo-navbar.png"
            alt="nav-img"
            class="nav-img"
          >
        </a>
      </div>
      <div class="navbar-right">
        <div class="nav-button">
          <a
            v-if="!username"
            href="/login"
            class="ml-2">
            <my-button
              class="is-btn-login ml-4"
              content="Đăng nhập"
              background="white"
              background-hover="grey"
              color="black" />
          </a>
          <a
            v-if="!username"
            href="/register"
            class="ml-2">
            <my-button
              content="Đăng ký"
              background="#28a745"
              background-hover="grey"
              color="white"
              class="is-btn-register" />
          </a>
          <a
            v-if="username"
            href="/profile"
            class="ml-4">
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
          </a>
          <a
            v-if="username"
            href="/"
            class="ml-2">
            <button
              class="button my-button"
              @click="logout"> Đăng xuất </button>
          </a>
          <notification v-if="username" />
        </div>
      </div>
    </nav>
    <navmenu />
  </div>
</template>

<script>
import Notification from '~/components/share/Notification'
import MyButton from '~/components/share/Button'
import Navmenu from './Navmenu'
export default {
  components: {
    Notification,
    Navmenu,
    MyButton
  },
  data() {
    return {
      address: 'Room D413, FPT University'
    }
  },
  computed: {
    username() {
      return this.$store.getters.GET_FULL_NAME
    },
    avatar() {
      return this.$store.getters.GET_AVATAR
    }
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
          geocoder.geocode(
            {
              location: pos
            },
            (results, status) => {
              if (status === 'OK') {
                if (results[0]) {
                  this.address = results[0].formatted_address
                } else {
                  window.alert('No results found')
                }
              } else {
                console.log('Geocoder failed due to: ' + status)
              }
            }
          )
        },
        function() {
          handleLocationError(true, infoWindow, this.map.getCenter())
        }
      )
    } else {
      handleLocationError(false, infoWindow, map.getCenter())
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
          location.reload()
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-button {
  background: none;
  border: none;
}
.navbar-section {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  .navbar {
    padding: 0.3em 1em 0.5em 1em !important;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.05);
    background-color: rgba(255, 255, 255, 0.95) !important;
  }
  .navbar-collapse {
    .market-image {
      height: 20px;
      margin-right: 4px;
    }
    .market-text {
      width: 30em;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 500;
    }
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
