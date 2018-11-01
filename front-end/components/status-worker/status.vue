<template>
  <div>
    <div class="modal status-modal" id="status-Modal">
      <div class="status-content modal-content-1 ml-2" id="status-ModalContent">
        <h6 class="status-title">Đang nghỉ ngơi</h6>
        <div class="seeting-status">
          <h6 class="text-status">Cài đặt trạng thái</h6>
          <input type="checkbox"
          class="check check2">
          <i class="fas fa-times is-IconClose" id="statusCloseModal"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 @import '~assets/scss/variable.scss';
    .status-modal {
      visibility: hidden;
      z-index: 1000!important;
      right: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.4);
      display: block;
      cursor: pointer;
    }
    .modal-menu-content-1 {
      transform: translateX(-120%);
    }
    .modal-menu-content-2 {
      transform: translateX(0);
    }
    /* .notification-content {
  position: fixed;
  right: 20px;
  top: 20px;
  bottom: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  width: 380px;
  overflow-y: scroll;
  border: 0 !important;
  border-radius: 10px !important;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;

}
.notification-title {
  font-size: 17px;
  background: $color-main;
  color: #fff;
  padding: 1.2em 0 1.2em 1.2em;
  position: relative;

  #iconCloseModal {
    position: absolute;
    right: 15px;
    font-size: 0.9em;
    cursor: pointer;
    border-radius: 50%;
    padding: 3px 5px;
    color: $color-main;
    background: #fff;
  }
} */

</style>
