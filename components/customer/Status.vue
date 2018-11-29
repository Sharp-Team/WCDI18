<template>
  <div
    id="status-customer-modal"
    class="modal fade modal-scan-user"
    tabindex="-1"
    role="dialog"
    aria-labelledby="basicModal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6
            id="myModalLabel"
            class="modal-title ml-2"
          >
            Phát thông báo
          </h6>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h6 class="title is-6">Vị trí của bạn:</h6>
          <p class="my-0 mt-1 is-content">
            <img
              src="/images/icon-navbar/local.png"
              alt="local"
              class="noti-image"
            >
            {{ address }}
          </p>
        </div>
        <div class="modal-body">
          <h6 class="title is-6">Chọn công việc: {{ title }}</h6>
          <b-autocomplete
            v-model="title"
            :keep-first="keepFirst"
            :open-on-focus="openOnFocus"
            :data="filteredData"
            class="pb-2 b-complete-cus"
            icon="magnify"
            placeholder="Chọn công việc"
            field="name"
            @select="option => selected = option"
          />
        </div>
        <div class="modal-body">
          <h6 class="title is-6">Nội dung công việc: </h6>
          <textarea
            id="message-text"
            v-model="content"
            class="form-control"
            rows="3"
            placeholder="Nhập chi tiết công việc" />
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-success text-center btn-scan-user"
            @click="sendNotification">
            <i class="fas fa-broom mr-2" />
            Phát thông báo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const data = require('~/assets/json/data-job.json')
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      keepFirst: true,
      openOnFocus: false,
      title: '',
      content: '',
      data,
      selected: null,
      address: 'Room D413, FPT University'
    }
  },
  computed: {
    filteredData() {
      return this.data.filter(option => {
        return option.name.toLowerCase().indexOf(this.title.toLowerCase()) >= 0
      })
    },
    range: {
      get() {
        return this.$store.getters.GET_RANGE
      },
      set(value) {
        this.$store.commit('setRange', value)
      }
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
    sendNotification() {
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
                    this.$io.sendNotificationWorker({
                      username: user.username,
                      title: this.title,
                      content: this.content
                    })
                    let typeCareer
                    switch (this.title) {
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
                    this.$io.customerOnline({
                      position: pos,
                      type: typeCareer,
                      fullname: user.full_name,
                      email: user.email,
                      phone: user.phone_number,
                      address: positionCurrent,
                      content: this.content,
                      username: user.username
                    })
                    this.$toast.open({
                      message: 'Phát thông báo thành công!',
                      position: 'is-bottom',
                      type: 'is-success'
                    })
                    this.title = ''
                    this.content = ''
                    $('#status-customer-modal').modal('hide')
                  } else {
                    window.alert('No results found')
                  }
                } else {
                  window.alert('Geocoder failed due to: ' + status)
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
.modal-body {
  flex: 0 !important;
}
.modal-content {
  margin: 0 !important;
}
.is-content {
  font-size: 0.8rem !important;
}
.noti-image {
  margin-right: 7px;
  width: 4%;
}
.modal-title {
  font-size: 15px !important;
}

.modal-scan-user {
  z-index: 1100 !important;
  .modal-dialog {
    margin: 0 !important;
    .modal-content {
      position: fixed;
      left: 20px;
      top: 20px;
      border-radius: 10px !important;
      height: 86vh;
      overflow: scroll;
      width: 310px;
      .modal-header {
        background-color: $color-main !important;
        border-bottom: none !important;
        padding: 0.7rem;
        h6 {
          font-size: 17px;
          color: #fff;
          font-weight: 400;
          line-height: 1.125;
        }
        .check {
          cursor: pointer;
          bottom: 0%;
          display: block;
          position: relative;
          width: 40px;
          height: 20px;
          -webkit-appearance: none;
        }
        .check2 {
          margin-top: 2px;
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
      .modal-body {
        margin-top: 14px;
        background-color: #d6d6d6;
        border-radius: 10px;
        width: 92% !important;
        left: 2.5%;
        margin-left: 5px;
        $track-w: 100%;
        $track-h: 0.1em;
        $thumb-d: 1em;
        @mixin track() {
          box-sizing: border-box;
          border: none;
          width: $track-w;
          height: $track-h;
          background: #ccc;
        }
        @mixin thumb() {
          box-sizing: border-box;
          border: none;
          width: $thumb-d;
          height: $thumb-d;
          border-radius: 50%;
          background: $color-main;
        }
        [type='range'] {
          &,
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
          }
          margin: 0;
          padding: 0;
          width: $track-w;
          height: $thumb-d;
          background: transparent;
          font: 1em/1 arial sans-serif;
          &::-webkit-slider-runnable-track {
            @include track;
          }
          &::-moz-range-track {
            @include track;
          }
          &::-ms-track {
            @include track;
          }
          &::-webkit-slider-thumb {
            margin-top: 0.5 * ($track-h - $thumb-d);
            @include thumb;
          }
          &::-moz-range-thumb {
            @include thumb;
          }
          &::-ms-thumb {
            margin-top: 0;
            @include thumb;
          }
          &::-ms-tooltip {
            display: none;
          }
        }
      }
      .modal-footer {
        border-top: none !important;
        .btn-scan-user {
          background: $color-main;
          color: #fff;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .modal-scan-user .modal-dialog .modal-content {
    span {
      position: absolute;
      top: 2px;
      right: 10px;
    }
  }
  .modal-scan-user .modal-dialog .modal-content .modal-header h6 {
    font-size: 13px;
    position: absolute;
    top: 10px;
  }
  .modal-scan-user .modal-dialog .modal-content .modal-header {
    padding: 1rem;
  }
  .modal-body {
    h6.title.is-6 {
      font-size: $font-title-small-mobile;
      margin-bottom: 10px;
    }
    p.my-0.mt-1.is-content {
      font-size: $font-description-mobile !important;
    }
  }
}
</style>
