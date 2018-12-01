<template>
  <div>
    <div id="modalDirection">
      <h3 class="has-text-centered title-direction">Lộ trình</h3>
    </div>
    <div id="map" />
    <button
      id="showNote"
      type="button"
      class="button is-primary d-sm-none"
    >
      Chú thích
    </button>
    <button
      id="showDirection"
      type="button"
      class="button is-primary"
    >
      Lộ trình
    </button>
    <div id="modalNote">
      <h3>Chú thích</h3>
    </div>
    <footer-map />
  </div>
</template>

<script>
import FooterMap from '~/components/footer/FooterMap'
import modal from '~/static/js/modals'
import { mapGetters } from 'vuex'

export default {
  transition: 'slider-left',
  components: {
    FooterMap
  },
  data() {
    return {
      icons: null,
      markers: null,
      map: null,
      drawRange: null
    }
  },
  layout: 'map',
  middleware: 'authenmap',
  computed: {
    rangeCurrent() {
      return this.$store.getters.GET_RANGE
    }
  },
  watch: {
    rangeCurrent: function(val, oldVal) {
      /**
       * DRAW AREA SCAN
       */
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            this.drawRange.setMap(null)
            this.drawRange = new google.maps.Circle({
              strokeColor: 'green',
              strokeOpacity: 0.4,
              strokeWeight: 2,
              fillColor: 'red',
              fillOpacity: 0.35,
              map: this.map,
              center: pos,
              radius: val * 1000
            })
          },
          function() {
            handleLocationError(true, infoWindow, this.map.getCenter())
          }
        )
      } else {
        handleLocationError(false, infoWindow, map.getCenter())
      }
    }
  },
  beforeMount() {
    this.icons = this.$store.getters.GET_ICONS
  },
  mounted() {
    this.$nextTick(function() {
      modal()
    })
    /**
     * INIT MAP
     */
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 21.1186188,
        lng: 105.5698639
      },
      zoom: 10,
      /**
       * CHANGE POSITION FUNCTION OF MAP
       */
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      fullscreenControl: true
    })
    /**
     * DIRECTION MAP
     */
    var direction = document.getElementById('modalDirection')
    this.map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(direction)
    /**
     * SET CENTER POSITION USER
     */
    var infoWindow = new google.maps.InfoWindow()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          infoWindow.setPosition(pos)
          infoWindow.setContent(`
            <p>Chào mừng bạn đến với <span style="color: green; font-weight: bold; font-size: 15px">GoGreen</span></p>
            <p>Bạn đang ở đây!!!</p>
          `)
          infoWindow.open(this.map)
          this.map.setCenter(pos)
          var marker = new google.maps.Marker({
            position: pos,
            map: this.map,
            label: 'U'
          })
        },
        function() {
          handleLocationError(true, infoWindow, this.map.getCenter())
        }
      )
    } else {
      handleLocationError(false, infoWindow, this.map.getCenter())
    }

    var legend = document.getElementById('modalNote')
    for (var key in this.icons) {
      var type = this.icons[key]
      var name = type.name
      var icon = type.icon
      var div = document.createElement('div')
      div.innerHTML = '<img src="' + icon + '"> ' + name
      legend.appendChild(div)
    }
    this.map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(legend)
    /**
     * DRAW AREA SCAN
     */
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          this.drawRange = new google.maps.Circle({
            strokeColor: 'green',
            strokeOpacity: 0.4,
            strokeWeight: 2,
            fillColor: 'red',
            fillOpacity: 0.35,
            map: this.map,
            center: pos,
            radius: 0 * 1000
          })
        },
        function() {
          handleLocationError(true, infoWindow, this.map.getCenter())
        }
      )
    } else {
      handleLocationError(false, infoWindow, map.getCenter())
    }
    /**
     * COME BACK CURRENT POSITION
     */
    var centerControlDiv = document.createElement('div')
    var centerControl = new this.CenterControl(centerControlDiv, this.map)
    centerControlDiv.index = 1
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      centerControlDiv
    )

    this.$store.dispatch('SET_MAP', this.map)
  },
  methods: {
    CenterControl(controlDiv, map) {
      // Set CSS for the control border.
      var controlUI = document.createElement('div')
      controlUI.style.backgroundColor = 'rgba(255,255,255,0.7)'
      controlUI.style.border = '2px solid #fff'
      controlUI.style.borderRadius = '3px'
      controlUI.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)'
      controlUI.style.cursor = 'pointer'
      controlUI.style.marginBottom = '22px'
      controlUI.style.textAlign = 'center'
      controlUI.style.zIndex = 1000
      controlUI.title = 'Click to recenter the map'
      controlDiv.appendChild(controlUI)
      // Set CSS for the control interior.
      var controlText = document.createElement('div')
      controlText.style.color = 'rgb(25, 25, 25)'
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif'
      controlText.style.fontSize = '12px'
      controlText.style.lineHeight = '20px'
      controlText.style.paddingLeft = '2px'
      controlText.style.paddingRight = '2px'
      controlText.innerHTML = 'Vị trí của bạn'
      controlUI.appendChild(controlText)
      // Setup the click event listeners
      controlUI.addEventListener('click', function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
              map.setCenter(pos)
            },
            function() {
              handleLocationError(true, infoWindow, map.getCenter())
            }
          )
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter())
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.abde {
  margin-top: 45px;
  position: absolute;
  z-index: 999;
  bottom: 85px;
}
button.abcd.button.is-success {
  bottom: 85px;
}
#modalDirection {
  font-family: 'Roboto', 'sans-serif';
  width: 300px;
  height: 450px;
  background: rgba(255, 255, 255, 0.8);
  overflow: scroll;
  .title-direction {
    font-size: 1rem;
    margin-top: 5px;
  }
}
#map {
  background-color: #2ebe4a;
  width: 100%;
  height: 90vh;
  margin-top: 54px;
}
#modalNote {
  font-family: Arial, sans-serif;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
#modalNote h3 {
  margin-top: 0;
  font-size: 1.2rem;
}
#modalNote img {
  vertical-align: middle;
}
button#showNote {
  position: absolute;
  bottom: 55px;
  right: 5px;
}
button#showDirection {
  position: absolute;
  bottom: 55px;
  left: 5px;
}
#modalDirection {
  display: none;
}
.modal-note {
  display: block !important;
}
@media (max-width: 576px) {
  #modalDirection {
    width: 200px;
    height: 300px;
  }
  #modalNote {
    top: 175px !important;
    width: 150px;
    overflow: scroll;
    height: 250px;
    display: none;
  }
  .modal-note {
    display: block !important;
  }
}
</style>
