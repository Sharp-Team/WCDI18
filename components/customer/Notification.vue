<template>
  <div>
    <div
      id="modalNotificationCustomer"
      class="modal is-modal"
    >
      <div
        id="contentNotificationCustomer"
        class="notification-content contentNotificationCustomer1 ml-2"
      >
        <h6 class="notification-title">
          Thông báo ({{ numberNoti }})
          <i
            id="closeNotificationCustomer"
            class="fas fa-times is-IconClose"
          />
        </h6>
        <div class="wrapper-notification">
          <div
            v-for="(item, index) in data"
            :key="`${index}`"
          >
            <div class="one-notification">
              <div class="notification-container">
                <div class="media">
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="mt-0 mb-1 title-notification">
                        {{ item.title }}
                      </h5>
                    </div>
                    <p class="my-0 is-content">
                      {{ item.content }}
                    </p>
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                  <div class="p-2">
                    <button
                      type="button"
                      class="btn-confirm-noti"
                      @click="done(item.index)"
                    >
                      Xác nhận
                    </button>
                  </div>
                  <div class="p-2">
                    <button
                      type="button"
                      class="btn-cancel-noti"
                      @click="cancel(item.index)"
                    >
                      Huỷ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        // {
        //   title: 'Chấp nhận sửa xe máy',
        //   content: 'Km29 đại lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội'
        // }
      ]
    }
  },
  computed: {
    numberNoti() {
      return this.data.length
    }
  },
  methods: {
    done(index) {
      this.data.splice(index, 1)
    },
    cancel(index) {
      this.data.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
.is-modal {
  visibility: hidden;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
  cursor: pointer;
}
.notification-content {
  position: fixed;
  right: 20px;
  top: 20px;
  bottom: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  height: 86vh;
  width: 310px;
  overflow-y: scroll;
  border-radius: 10px !important;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  .btn-confirm-noti {
    background: $color-main;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    margin: auto;
    font-size: 14px;
    border-radius: 5px;
    font-weight: bold;
    border: none !important;
  }
  .btn-cancel-noti {
    background: (0, 0, 0);
    color: $color-red;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    margin: auto;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid $color-red;
  }
}
.contentNotificationCustomer1 {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateX(120%);
}
.notification-title {
  font-size: 17px;
  background: $color-main;
  color: #fff;
  padding: 0.6em 0 0.6em 1.2em;
  position: relative;
  #closeNotificationCustomer {
    position: absolute;
    right: 15px;
    font-size: 0.9em;
    cursor: pointer;
    border-radius: 50%;
    padding: 3px 5px;
    color: $color-main;
    background: #fff;
  }
}
.is-close {
  color: $font-color-grey;
}
.wrap-icon-noti {
  cursor: pointer;
  position: relative;
  margin: 0 10px;
  .is-icon-noti {
    font-size: 30px;
  }
  .noti-number {
    background-color: $color-main;
    padding: 0px 5px;
    color: white;
    border-radius: 10px;
    position: absolute;
    margin-left: 20px;
    margin-top: -35px;
  }
}
.wrapper-notification {
  padding: 2px 15px 15px 15px;
  .one-notification {
    margin-top: 13px;
    font-size: 16px;
    background-color: $color-grey-light;
    border-radius: 8px;
    .notification-container {
      padding-top: 10px;
      .media {
        .media-body {
          padding: 0 15px;
          .title-notification,
          .is-content {
            font-size: 0.9rem;
          }
          .is-content {
            color: #868686;
          }
        }
      }
    }
  }
}
.reset-notification {
  padding: 15px 0;
  .btn-reset-notification {
    background: $color-main;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 10px 25px;
    margin: auto;
    font-size: 14px;
  }
}
@media (max-width: 576px) {
  .notification-content {
    width: 300px;
    .notification-title {
      font-size: 14px !important;
    }
    .wrapper-notification {
      .one-notification {
        font-size: 12px !important;
      }
    }
  }
}
</style>
