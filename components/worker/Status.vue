<template>
  <div>
    <div
      id="modalStatusWorker"
      class="modal status-modal"
    >
      <div
        id="contentStatusWorker"
        class="status-content modal-worker-1 ml-2"
      >
        <div class="status-title">
          <h6
            v-if="!checked"
            class="text-title-relax"
          >
            {{ status.relax }}
          </h6>
          <h6
            v-if="checked"
            class="text-title-ready"
          >
            {{ status.ready }}
          </h6>
        </div>
        <div class="setting-status">
          <h6 class="text-status ml-3">Cài đặt trạng thái</h6>
          <input
            v-model="checked"
            type="checkbox"
            class="check check2 ml-4"
          >
          <i
            id="closeStatusWorker"
            class="fas fa-times is-IconClose ml-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      status: {
        ready: 'Sẵn sàng làm việc',
        relax: 'Đang nghỉ ngơi'
      }
    }
  },
  watch: {
    checked: function(val) {
      const username = this.$store.getters.GET_USERNAME
      if (val) {
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
                      const positionCurrent = results[0].formatted_address
                      const user = this.$store.getters.GET_USER
                      let typeCareer
                      switch (user.career) {
                        case 'Thợ sửa điện tử':
                          typeCareer = 'electric'
                          break
                        case 'Thợ sửa điện lạnh':
                          typeCareer = 'fridge'
                          break
                        case 'Thợ sửa điện thoại':
                          typeCareer = 'phone'
                          break
                        case 'Thợ sửa xe máy':
                          typeCareer = 'motorcycle'
                          break
                        case 'Thợ sửa ô tô':
                          typeCareer = 'car'
                          break
                        case 'Thu mua phế liệu':
                          typeCareer = 'waste'
                          break
                        case 'Bác sĩ':
                          typeCareer = 'doctor'
                          break
                        case 'Thợ sửa máy tính/ laptop':
                          typeCareer = 'laptop'
                          break
                        case 'Thợ sửa đồ gia dụng':
                          typeCareer = 'fan'
                          break
                      }
                      this.$io.workerOnline({
                        position: pos,
                        type: typeCareer,
                        fullname: user.full_name,
                        email: user.email,
                        phone: user.phone_number,
                        address: positionCurrent,
                        username: user.username,
                        career: user.career
                      })
                      this.$toast.open({
                        message: 'Chuyển trạng thái thành công!',
                        position: 'is-bottom',
                        type: 'is-success'
                      })
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
      } else {
        this.$io.workerOffline({
          username: username
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
.status-modal {
  position: fixed;
  visibility: hidden;
  z-index: 1000 !important;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  cursor: pointer;
  .status-content {
    display: flex;
    background-color: #fff;
    position: fixed;
    height: 50px;
    bottom: 10%;
    border-radius: 5px !important;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 500px;
    .status-title {
      position: relative;
      flex-basis: 50%;
      .text-title-relax {
        color: #d49100db;
        position: absolute;
        top: 15%;
        left: 5%;
        font-size: 1.6rem;
      }
      .text-title-ready {
        color: #10ad10d6;
        position: absolute;
        top: 15%;
        left: 5%;
        font-size: 1.6rem;
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
      .check {
        cursor: pointer;
        bottom: 0%;
        display: block;
        margin-bottom: 40px;
        position: relative;
        width: 40px;
        height: 20px;
        -webkit-appearance: none;
      }
      .check2 {
        background: #333;
        outline: none;
        border-radius: 60px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        transition: 0.5s;
      }
      .check2:checked {
        background: #10ad10d6;
      }
      .check2:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 60px;
        top: 0;
        left: 0;
        transform: scale(0.8);
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
        background: #fff;
        transition: 0.5s;
      }
      .check2:checked:before {
        left: 50%;
      }
    }
  }
}
.contentStatusWorker1 {
  transform: translateY(400%);
}
.contentStatusWorker2 {
  transform: translate(-120);
}
@media (max-width: 992px) {
  .status-modal .status-content {
    left: 15%;
  }
}
@media (max-width: 576px) {
  .status-modal .status-content {
    left: 2%;
  }
  .status-modal .status-content {
    width: 300px;
  }
  .status-modal .status-content .setting-status {
    width: 155px;
  }
  .status-modal .status-content .setting-status .text-status {
    font-size: 11px;
  }
  .status-modal .status-content .status-title .text-title-ready {
    font-size: 15px;
    top: 25%;
  }
  .status-modal .status-content .status-title .text-title-relax {
    font-size: 15px;
    top: 25%;
  }
  .status-modal .status-content .setting-status .check {
    width: 65px;
  }
}
</style>
