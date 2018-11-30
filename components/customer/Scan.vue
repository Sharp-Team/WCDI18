<template>
  <div
    id="modalScanCustomer"
    class="modal is-modal"
  >
    <div
      id="contentScanCustomer"
      class="notification-content contentScanCustomer1 ml-2"
    >
      <h6 class="notification-title">Quét người làm việc
        <i
          id="closeScanCustomer"
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
                    Vị trí của bạn
                  </h5>
                </div>
                <p class="my-0 mt-1 is-content">
                  <img
                    src="/images/icon-navbar/local.png"
                    alt="local"
                    class="noti-image"
                  >
                  {{ address }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="one-notification pb-2">
          <div class="notification-container py-3">
            <div class="media">
              <div class="media-body">
                <div class="d-flex justify-content-between">
                  <h5 class="mt-0 mb-3 title-notification">
                    Chọn công việc
                  </h5>
                </div>
                <b-autocomplete
                  v-model="name"
                  :keep-first="keepFirst"
                  :open-on-focus="openOnFocus"
                  :data="filteredData"
                  class="pb-2 b-complete-cus"
                  icon="magnify"
                  placeholder="Chọn công việc"
                  field="name"
                  @select="option => selected.push(option)"
                />
                <b-field
                  grouped
                  group-multiline>
                  <div
                    v-for="(item, index) in selected"
                    v-if="item !== null"
                    :key="`${index}`"
                    track-by="name"
                    class="control"
                  >
                    <span class="tag is-success">
                      {{ item.name }}
                      <button
                        class="delete is-small"
                        @click="remove(index)" />
                    </span>
                  </div>
                </b-field>
              </div>
            </div>
          </div>
        </div>
        <div class="one-notification">
          <div class="notification-container py-3">
            <div class="media">
              <div class="media-body">
                <div class="d-flex justify-content-between">
                  <h5 class="mt-0 mb-2 title-notification">
                    Phạm vi quét: {{ range }} Km
                  </h5>
                </div>
                <input
                  v-model.number="range"
                  type="range"
                  min="1"
                  max="30"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="reset-notification text-center">
        <button
          class="btn-reset-notification btn"
          @click="showMarker(icons, selected)"
        >
          <i class="fas fa-search-location mr-2" />
          Quét
        </button>
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
      name: '',
      data,
      address: 'Room D413, FPT University',
      selected: [],
      features: null,
      markers: null,
      map: null,
      icons: null
    }
  },
  computed: {
    filteredData() {
      return this.data.filter(option => {
        return option.name.toLowerCase().indexOf(this.name.toLowerCase()) >= 0
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
    const { socket } = this.$io
    this.$io.getWorkerOnline()
    socket.on('updateWorkers', this.updateWorkers)
  },
  beforeMount() {
    this.markers = this.$store.getters.GET_MARKERS
    this.icons = this.$store.getters.GET_ICONS
  },
  methods: {
    remove(index) {
      this.selected.splice(index, 1)
    },
    showMarker(icons, selected) {
      let jobs = []
      selected.forEach(element => {
        if (element) {
          jobs.push(element.type)
        }
      })
      // remove all markers
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null)
      }
      var infowindow = new google.maps.InfoWindow()
      this.features.forEach(feature => {
        window.setTimeout(() => {
          if (jobs.includes(feature.type)) {
            var marker = new google.maps.Marker({
              position: feature.position,
              icon: icons[feature.type].icon,
              animation: google.maps.Animation.BOUNCE,
              map: this.$store.getters.GET_MAP
            })
            this.markers.push(marker)
            this.$store.dispatch('SET_MARKERS', this.markers)
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.close()
              infowindow.setContent(
                `<h6>Thông tin chi tiết</h6>
                <table class="table">
                  <tr>
                    <td>Họ và tên</td>
                    <td style="font-weight: bold">` +
                  feature.fullname +
                  `</td>
                  </tr>
                  <tr class="table-success">
                    <td>Email</td>
                    <td style="font-weight: bold">` +
                  feature.email +
                  `</td>
                  </tr>
                  <tr>
                    <td>Số điện thoại</td>
                    <td style="font-weight: bold">` +
                  feature.phone +
                  `</td>
                  </tr>
                  <tr class="table-success">
                    <td>Địa chi</td>
                    <td style="font-weight: bold">` +
                  feature.address +
                  `</td>
                  </tr>
                  <tr>
                      <td>Nghề nghiệp</td>
                      <td style="font-weight: bold">` +
                  feature.career +
                  `</td>
                    </tr>
                </table>`
              )
              infowindow.open(map, marker)
            })
          }
        }, 400)
      })
    },
    updateWorkers(alldata) {
      if (this.selected.length > 0) {
        console.log(this.icons)
        console.log(this.selected)
        this.features = alldata.workers
        this.showMarker(this.icons, this.selected)
      }
      this.features = alldata.workers
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
.noti-image {
  margin-right: 7px;
}
.is-content {
  font-size: 0.8rem !important;
}
.input {
  background-color: #f9f9f9;
  border-radius: 20px;
}
.is-modal {
  visibility: hidden;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
  cursor: pointer;
}
.notification-content {
  position: fixed;
  left: 0;
  height: 86vh;
  top: 20px;
  bottom: 20px;
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
.contentScanCustomer1 {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateX(-120%);
}
.notification-title {
  font-size: 17px;
  background: $color-main;
  color: #fff;
  padding: 0.6em 0 0.6em 1.2em;
  position: relative;
  #closeScanCustomer {
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
    font-size: 16px;
    background-color: $color-grey-light;
    border-radius: 8px;
    .notification-container {
      margin-top: 14px;
      .media {
        .media-body {
          padding: 0 15px;
          .title-notification,
          .is-content {
            font-size: 0.9rem;
            .noti-image {
              width: 4%;
              padding-bottom: 5px;
            }
          }
          .is-content {
            color: #868686;
          }
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
            font: 1em/1 arial, sans-serif;
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
