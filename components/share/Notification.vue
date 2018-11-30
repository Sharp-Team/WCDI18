<template>
  <div>
    <div class="wrap-icon-noti">
      <i
        id="showNotification"
        class="fas fa-globe-asia is-icon-noti"
      />
      <span class="noti-number">
        {{ numberNoti }}
      </span>
    </div>

    <div
      id="modalNotification"
      class="modal is-modal"
    >
      <div
        id="contentNotification"
        class="notification-content contentNotification ml-2"
      >
        <h6 class="notification-title">
          Thông báo hệ thống chuyên gia
          <i
            id="closeNotification"
            class="fas fa-times is-IconClose"
          />
        </h6>
        <div class="wrapper-notification">
          <div
            v-for="(item, index) in data"
            :key="`${index}`"
          >
            <div class="one-notification">
              <div class="notification-container py-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  height: 86vh;
  background-color: rgba(255, 255, 255, 0.9);
  width: 310px;
  overflow-y: scroll;
  border: 0 !important;
  border-radius: 10px !important;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  button {
    border: none !important;
  }
}

.contentNotification {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateX(120%);
}

.notification-title {
  font-size: 17px;
  background: $color-main;
  color: #fff;
  padding: 0.6em 0 0.6em 1.2em;
  position: relative;

  #closeNotification {
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

.wrap-icon-noti {
  cursor: pointer;
  position: relative;
  margin: 0 10px;
  .is-icon-noti {
    font-size: 30px;
    color: #8c8c8c;
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
    margin-top: 14px;
    font-size: 16px;
    background-color: $color-grey-light;
    border-radius: 8px;
    .notification-container {
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

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'Chuẩn bị cập nhật...',
          content:
            'Tính năng quét theo phạm vi dành cho người làm việc và khách hàng'
        }
      ]
    }
  },
  computed: {
    numberNoti() {
      return this.data.length
    }
  },
  methods: {
    remove(index) {
      this.data.splice(index, 1)
    }
  }
}
</script>
