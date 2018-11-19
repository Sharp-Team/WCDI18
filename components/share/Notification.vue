<template>
  <div>
    <div class="wrap-icon-noti">
      <i
        id="showCart"
        class="fas fa-globe-asia is-icon-noti"
      />
      <span class="noti-number">
        3
      </span>
    </div>

    <div
      id="is-Modal"
      class="modal is-modal"
    >
      <div
        id="is-ModalContent"
        class="notification-content modal-content-1 ml-2"
      >
        <h6 class="notification-title">
          Thông báo (3)
          <i
            id="iconCloseModal"
            class="fas fa-times is-IconClose"
          />
        </h6>
        <div class="wrapper-notification">
          <div class="one-notification">
            <div class="notification-container py-3">
              <div class="media">
                <div class="media-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="mt-0 mb-1 title-notification">
                      Đã hoàn thành
                    </h5>
                    <i class="fas fa-times is-close" />
                  </div>
                  <p class="my-0 is-content">
                    Giao dịch sửa xe đã hoàn thành xong. Cảm ơn bạn đã sử dụng dịch vụ
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="one-notification mt-2">
            <div class="notification-container py-3">
              <div class="media">
                <div class="media-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="mt-0 mb-1 title-notification">
                      Đã hủy
                    </h5>
                    <i class="fas fa-times is-close" />
                  </div>
                  <p class="my-0 is-content">
                    Giao dịch sửa xe đã hoàn thành xong. Cảm ơn bạn đã sử dụng dịch vụ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="reset-notification text-center">
          <button class="btn-reset-notification btn">
            <i class="far fa-trash-alt mr-2" />
            Xóa tất cả
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
@import '~assets/scss/share/notification.scss';
</style>

<script>
import notification from '~/assets/js/notification'

export default {
  mounted() {
    notification()
  }
}
</script>
