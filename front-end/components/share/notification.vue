<template>
  <div>
    <div class="wrap-icon-noti">
      <i
        class="fas fa-globe-asia is-icon-noti"
        id="showCart"></i>
      <span class="noti-number">
        3
      </span>
    </div>

    <div
      class="modal is-modal"
      id="is-Modal">
      <div
        class="notification-content modal-content-1 ml-2"
        id="is-ModalContent">
        <h6 class="notification-title">
          Thông báo (3)
          <i
            class="fas fa-times is-IconClose"
            id="iconCloseModal"></i>
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
                    <i class="fas fa-times is-close"></i>
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
                    <i class="fas fa-times is-close"></i>
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
            <i class="far fa-trash-alt mr-2"></i>
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
    beforeMount() {
      notification()
    },
  }
</script>
