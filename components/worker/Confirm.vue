<template>
  <div>
    <div
      id="confirm-Modal"
      class="modal is-modal"
    >
      <div
        id="confirm-ModalContent"
        class="notification-content modal-content-1 ml-2"
      >
        <h6 class="notification-title">
          CHẤP NHẬN GIAO DỊCH
          <i
            id="confirmCloseModal"
            class="fas fa-times is-IconClose"
          />
        </h6>
        <no-ssr>
          <table class="table my-table">
            <tr>
              <td>Họ và tên</td>
              <td style="font-weight: bold">{{ fullname }}</td>
            </tr>
            <tr class="table-success">
              <td>Email</td>
              <td style="font-weight: bold">{{ email }}</td>
            </tr>
            <tr>
              <td>Số điện thoại</td>
              <td style="font-weight: bold">{{ phone }}</td>
            </tr>
            <tr class="table-success">
              <td>Địa chi</td>
              <td style="font-weight: bold">{{ address }}</td>
            </tr>
            <tr>
              <td>Địa chỉ hiện tại</td>
              <td style="font-weight: bold">{{ addressCurrent }}</td>
            </tr>
          </table>
        </no-ssr>
        <div class="wrap-button has-text-centered">
          <button
            id="confirm-oke"
            type="button"
            class="btn btn-success"
            @click="doneDeal">Hoàn tất và chỉ đường</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: '',
      email: '',
      phone: '',
      address: '',
      addressCurrent: '',
      career: '',
      username: '',
      usernameWorker: ''
    }
  },
  mounted() {
    const { socket } = this.$io
    this.$io.getNotificationCustomer()
    socket.on('updateNotificationCustomer', this.updateNotification)
  },
  methods: {
    updateNotification(alldata) {
      const username = this.$store.getters.GET_USERNAME
      const data = alldata.notificationsCustomer.filter(
        notification => notification.username === username
      )
      if (data.length > 0) {
        const worker = data[0]
        this.fullname = worker.fullnameWorker
        this.phone = worker.phoneWorker
        this.email = worker.emailWorker
        this.address = worker.addressWorker
        this.addressCurrent = worker.addressCurrent
        this.career = worker.career
        this.username = worker.username
        this.usernameWorker = worker.usernameWorker
        var modal = $('#confirm-Modal')
        var btnCloseNoi = $('#confirmCloseModal')
        var modalContent = $('#confirm-ModalContent')
        var btnOke = $('#confirm-oke')
        modal.css('visibility', 'visible')
        modalContent.removeClass('modal-content-1')
        btnCloseNoi.click(() => {
          modalContent.addClass('modal-content-1')
          modal.css('visibility', 'hidden')
        })
        btnOke.click(() => {
          modalContent.addClass('modal-content-1')
          modal.css('visibility', 'hidden')
        })
        $(window).click(e => {
          if (e.target.id === 'confirm-Modal') {
            modalContent.addClass('modal-content-1')
            modal.css('visibility', 'hidden')
          }
        })
      }
    },
    doneDeal() {
      this.$io.sendCustomerAcceptDeal({
        username: this.username,
        career: this.career
      })
      const username = this.$store.getters.GET_USERNAME
      this.$io.customerOffline({
        username: username
      })
      // direction
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
                    // send for worker direction
                    this.$io.sendDirection({
                      username: this.usernameWorker,
                      start: results[0].formatted_address,
                      end: this.addressCurrent
                    })
                    const map = this.$store.getters.GET_MAP
                    var directionsDisplay = new google.maps.DirectionsRenderer()
                    var directionsService = new google.maps.DirectionsService()
                    directionsDisplay.setMap(map)
                    directionsDisplay.setPanel(
                      document.getElementById('direction')
                    )
                    var start = results[0].formatted_address
                    var end = this.addressCurrent
                    directionsService.route(
                      {
                        origin: start,
                        destination: end,
                        travelMode: 'DRIVING'
                      },
                      (response, status) => {
                        if (status === 'OK') {
                          directionsDisplay.setDirections(response)
                        } else {
                          window.alert(
                            'Directions request failed due to ' + status
                          )
                        }
                      }
                    )
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
      var today = new Date()
      const time = today.toLocaleString('en-US')
      this.$axios
        .post(`/api/deal/create`, {
          username: this.username,
          time: time,
          job: this.career,
          status: 'Hoàn thành',
          object: this.usernameWorker
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      this.$axios
        .post(`/api/deal/create`, {
          username: this.usernameWorker,
          time: time,
          job: this.career,
          status: 'Hoàn thành',
          object: this.username
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      this.$toast.open({
        message: 'Giao dịch thành công!',
        position: 'is-bottom',
        type: 'is-success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
.wrap-button {
  width: 100%;
}
td {
  padding-left: 20px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
.my-table {
  margin-top: 10px;
}
.is-IconClose {
  float: right;
  margin-right: 15px;
}
.my-card {
  height: 100%;
}
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
  background-color: white;
  height: 86vh;
  width: 580px;
  overflow-y: scroll;
  border-radius: 10px !important;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.modal-content-1 {
  background-color: white;
  transform: translateX(120%);
}
.notification-title {
  font-size: 17px;
  background: $color-main;
  color: #fff;
  padding: 0.6em 0 0.6em 1.2em;
  position: relative;
  #notiCloseModal {
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
  }
}
</style>
