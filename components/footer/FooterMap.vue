<template>
  <div>
    <div class="image" />
    <status-worker />
    <status-customer />
    <noti />
    <scan />
    <scan-user />
    <div class="my-footer">
      <div
        v-if="object==='Người làm việc'"
        class="action"
      >
        <div class="icon status">
          <a href="#">
            <i
              id="show-status-worker"
              class="fas fa-street-view"
            />
          </a>
          <span class="tooltip-status">
            Trạng thái
          </span>
        </div>
        <div class="icon history">
          <nuxt-link to="/history">
            <i class="fas fa-map-marked-alt" />
          </nuxt-link>
          <span class="tooltip-history">
            Lịch sử
          </span>
        </div>
        <div class="icon search">
          <a href="#">
            <i
              id="showScanWorker"
              class="fas fa-map-marker-alt"
            />
          </a>
          <span class="tooltip-search">
            Quét
          </span>
        </div>
        <div class="icon noti">
          <a href="#">
            <i
              id="showNotiWorker"
              class="fas fa-dot-circle"
            />
          </a>
          <span class="tooltip-noti">
            Thông báo
          </span>
        </div>
      </div>
      <div
        v-else
        class="action"
      >
        <div class="icon status">
          <a href="#">
            <i
              id="status-customer-modal"
              class="fas fa-broadcast-tower"
              data-toggle="modal"
              data-target="#status-customer-modal"
            />
          </a>
          <span class="tooltip-status">
            Phát thông báo
          </span>
        </div>
        <div class="icon history">
          <nuxt-link to="/history">
            <i class="fas fa-map-marked" />
          </nuxt-link>
          <span class="tooltip-history">
            Lịch sử
          </span>
        </div>
        <div class="icon search">
          <a href="#">
            <i
              id="showScanCustomer"
              class="fab fa-cloudscale"
              data-toggle="modal"
              data-target="#scanUserModal" />
          </a>
          <span class="tooltip-search">
            Quét
          </span>
        </div>
        <div class="icon noti">
          <a href="#">
            <i
              id="showNotiCustomer"
              class="fas fa-bell"
            />
          </a>
          <span class="tooltip-noti">
            Thông báo
          </span>
        </div>
        <div class="icon noti">
          <a href="#">
            <i
              class="fas fa-check-circle"
              @click="confirm" />
          </a>
          <span class="tooltip-noti">
            Confirm
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
        transition: transform 0.2s;
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
import StatusWorker from '~/components/worker/Status'
import StatusCustomer from '~/components/customer/Status'
import Scan from '~/components/worker/Scan'
import Noti from '~/components/worker/Notification'
import statusWorker from '~/assets/js/status-worker'
import scan from '~/assets/js/scan'
import noti from '~/assets/js/noti'
import ScanUser from '~/components/user/ScanUser'

export default {
  components: {
    StatusWorker,
    StatusCustomer,
    Scan,
    Noti,
    ScanUser
  },
  data() {
    return {
      object: 'Người làm vi'
    }
  },
  beforeMount() {
    statusWorker(), noti(), scan()
  },
  methods: {
    confirm() {
      this.$dialog.confirm({
        message: 'Bạn có muốn tiếp tục không?',
        onConfirm: () => this.$toast.open('Bạn đã đồng ý')
      })
    }
  }
}
</script>
