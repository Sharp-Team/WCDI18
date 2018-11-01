<template>
  <div>
    <div class="modal status-modal" id="status-Modal">
      <div class="status-content modal-content-1 ml-2" id="status-ModalContent">
        <div class="status-title">
          <h6 class="text-title">Đang nghỉ ngơi</h6>
        </div>
        <div class="setting-status">
          <h6 class="text-status ml-3">Cài đặt trạng thái</h6>
          <input type="checkbox"
          class="check check2 ml-4">
          <i class="fas fa-times is-IconClose ml-3" id="statusCloseModal"></i>
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
      .status-content {
        position: relative;
        display: flex;
        background-color: #fff;
        position: fixed;
        height: 50px;
        left: 20px;
        top: 20px;
        bottom: 20px;
        border-radius: 5px !important;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        width: 500px;
        .status-title {
          position: relative;
          flex-basis: 50%;
          .text-title {
            position: absolute;
            top: 30%;
            left: 10%;
          }
        }
        .setting-status {
          position: absolute;
          width: 250px;
          right: 1%;
          padding-top: 10px;
          top: 10%;
          display: flex;
          flex-basis: 50%;
          height: 80%;
          border-radius: 5px !important;
          background-color: #cccccc;
          .check{
            cursor: pointer;
            bottom: 0%;
            display: block;
            margin-bottom: 40px;
            position: relative;
            width: 40px;
            height: 20px;
            -webkit-appearance: none;
          }
          /* Check 2*/
          .check2{
            background: #333;
            outline: none;
            border-radius: 60px;
            box-shadow: inset 0 0 5px rgba(0,0,0,.2);
            transition: .5s;
          }

          .check2:checked{
            background: #10ad10d6;
          }

          .check2:before{
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 60px;
            top: 0;
            left: 0;
            transform: scale(.8);
            box-shadow: 0 2px 15px rgba(0,0,0,.2);
            background: #fff;
            transition: .5s;
          }

          .check2:checked:before{
            left: 50%;
          }
        }
      }
    }
    .modal-menu-content-1 {
      transform: translateY(-120%);
    }
    .modal-menu-content-2 {
      transform: translateY(0);
    }
</style>
