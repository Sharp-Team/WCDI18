<template>
  <div>
    <div class="image">
    </div>
    <status class="statusworker"/>
    <noti/>
    <scan />
    <div class="my-footer">
      <div class="action">
        <div class="icon status">
          <a href="#">
            <i class="fas fa-street-view" id="showStatusWorker"></i>
          </a>
          <span class="tooltip-status">
            Trạng thái
          </span>
        </div>
        <div class="icon history">
          <a href="#">
            <i class="fas fa-map-marked-alt"></i>
          </a>
          <span class="tooltip-history">
            Lịch sử
          </span>
        </div>
        <div class="icon search">
          <a href="#">
            <i class="fas fa-map-marker-alt" id="showScanWorker"></i>
          </a>
          <span class="tooltip-search">
            Quét
          </span>
        </div>
        <div class="icon noti">
          <a href="#">
            <i class="fas fa-dot-circle" id="showNotiWorker"></i>
          </a>
          <span class="tooltip-noti">
            Thông báo
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/variable.scss';
  .my-footer {
    width: 100%;
    height: 50px;
    background-color: #232b2b;
    position: absolute;
    bottom: 0;

    .action {
      text-align: center;
      padding-top: 10px;

      .icon {
        display: inline-flex;
        padding-right: 15px;
        padding-left: 15px;
        position: relative;
        margin-left: 10px;
        i {
          font-size: 25px;
          color: #ffffff;
          transition: transform .2s;
        }

        i:hover {
          -ms-transform: scale(1.5);
          -webkit-transform: scale(1.5);
          transform: scale(1.5);
        }

        span {
          visibility: hidden;
          width: 120px;
          background-color: black;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;

          /* Position the tooltip */
          position: absolute;
          z-index: 1;
          bottom: 140%;
          left: 50%;
          margin-left: -60px;
        }
      }

      .status:hover .tooltip-status {
        visibility: visible;
      }

      .history:hover .tooltip-history {
        visibility: visible;
      }

      .search:hover .tooltip-search {
        visibility: visible;
      }

      .noti:hover .tooltip-noti {
        visibility: visible;
      }
    }
  }

</style>
<script>
  import Status from "../../components/worker/status.vue"
  import Scan from "../../components/worker/scan.vue"
  import status from '../../assets/js/status.js';
  import scan from '../../assets/js/scan.js';
  import Noti from "../../components/noti-worker/noti-worker.vue"
  import noti from '../../assets/js/noti.js';
  export default {
    components: {
      Status,
      Scan,
      Noti
    },
    beforeMount() {
      status(),
      noti(),
      scan()
    },
  }
</script>
