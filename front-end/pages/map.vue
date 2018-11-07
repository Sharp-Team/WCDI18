<template>
  <div>
    <div id="map"></div>
    <div id="legend">
      <h3>Chú thích</h3>
    </div>
    <footer-map />
  </div>
</template>

<script>
  import FooterMap from '../components/footer/footer-map'

  export default {
    layout: 'map',
    components: {
      FooterMap
    },
    methods: {
      CenterControl(controlDiv, map) {
        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Trở về vị trí của bạn';
        controlUI.appendChild(controlText);

        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', function () {
          map.setCenter({
            lat: 41.85,
            lng: -87.65
          });
        });
      }
    },
    mounted() {
      /**
       * KHỞI TẠO MAP
       */
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 9,

        /**
         * THAY ĐỔI VỊ TRÍ CÁC CÁC CHỨC NĂNG CỦA MAPS
         */
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
        fullscreenControl: true
      });

      /**
       * SET CENTER VỊ TRÍ CỦA USER VÀ POPUP THÔNG BÁO VỊ TRÍ CỦA NGƯỜI DÙNG
       */
      var infoWindow = new google.maps.InfoWindow;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Bạn đang ở đây.');
          infoWindow.open(map);
          map.setCenter(pos);
          var marker = new google.maps.Marker({
            position: pos,
            map: map
          });
        }, function () {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }

      /**
       * ĐÁNH DẤU MỘT VỊ TRÍ
       */
      //  const position = {
      //  lat: 21.0086188,
      //  lng: 105.5598639
      //  };
      //  var marker = new google.maps.Marker({
      //    position: position,
      //    map: map
      //  });

      /**
       * KHAI BÁO CÁC CÔNG VIỆC
       */
      var iconBase = '/images/icon/';
      var icons = {
        electric: {
          name: 'Thợ sửa điện tử',
          icon: iconBase + 'electric.png'
        },
        fridge: {
          name: 'Thợ sửa điện lạnh',
          icon: iconBase + 'fridge.png'
        },
        phone: {
          name: 'Thợ sửa điện thoại',
          icon: iconBase + 'phone.png'
        },
        motorcycle: {
          name: 'Thợ sửa xe máy',
          icon: iconBase + 'motorcycle.png'
        },
        car: {
          name: 'Thợ sửa ô tô',
          icon: iconBase + 'car.png'
        },
        waste: {
          name: 'Thu mua phế liệu',
          icon: iconBase + 'waste.png'
        },
        doctor: {
          name: 'Bác sĩ',
          icon: iconBase + 'doctor.png'
        },
        laptop: {
          name: 'Thợ sửa máy tính/ laptop',
          icon: iconBase + 'laptop.png'
        },
        fan: {
          name: 'Thợ sửa đồ gia dụng',
          icon: iconBase + 'fan.png'
        }
      };

      /**
       * KHAI BÁO LIST CÁC CÔNG VIỆC VÀ VỊ TRÍ CỦA NÓ
       */
      var features = [
        {
          position: new google.maps.LatLng(21.1186188, 105.5698639),
          type: 'electric'
        },
        {
          position: new google.maps.LatLng(21.2186188, 105.1408639),
          type: 'car'
        },
        {
          position: new google.maps.LatLng(21.3186188, 105.2418639),
          type: 'doctor'
        },
        {
          position: new google.maps.LatLng(21.4186188, 105.4428639),
          type: 'motorcycle'
        },
        {
          position: new google.maps.LatLng(21.5186188, 105.3438639),
          type: 'fridge'
        },
        {
          position: new google.maps.LatLng(21.6186188, 105.9448639),
          type: 'laptop'
        },
        {
          position: new google.maps.LatLng(21.7186188, 105.7458639),
          type: 'fan'
        },
        {
          position: new google.maps.LatLng(21.8106188, 105.8468639),
          type: 'phone'
        },
        {
          position: new google.maps.LatLng(21.9196188, 105.6478639),
          type: 'waste'
        },
        {
          position: new google.maps.LatLng(20.0186188, 105.0488639),
          type: 'doctor'
        },
        {
          position: new google.maps.LatLng(20.8176188, 105.5488639),
          type: 'car'
        },
        {
          position: new google.maps.LatLng(20.7166188, 105.5498639),
          type: 'phone'
        },
        {
          position: new google.maps.LatLng(20.6156188, 105.5498639),
          type: 'laptop'
        },
        {
          position: new google.maps.LatLng(21.5146188, 105.5498639),
          type: 'electric'
        },
        {
          position: new google.maps.LatLng(21.4136188, 105.5498639),
          type: 'laptop'
        },
        {
          position: new google.maps.LatLng(21.0126188, 105.5498639),
          type: 'laptop'
        }
      ]

      /**
       * TẠO LIST VỊ TRÍ CỦA NGƯỜI DÙNG VÀ CÔNG VIỆC
       */
      var infowindow = new google.maps.InfoWindow();
      features.forEach(function (feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map
        });
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.close(); // Close previously opened infowindow
          infowindow.setContent("<div id='infowindow'>" + icons[feature.type].icon + "</div>");
          infowindow.open(map, marker);
        });
      });
      var legend = document.getElementById('legend');
      for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon = type.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
      }

      map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(legend);

      /**
       * Draw circle
       */
      var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER,
          drawingModes: ['circle']
        },
        markerOptions: {
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        },
        circleOptions: {
          fillColor: '#ffff00',
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1
        }
      });
      drawingManager.setMap(map);

      /**
       * Come back center
       */

      var centerControlDiv = document.createElement('div');
      var centerControl = new this.CenterControl(centerControlDiv, map);
      centerControlDiv.index = 1;
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    },
    head: {
      script: [{
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQjtj0TxFDfqm8uQbovjJ0pEVtkCgePCw&libraries=drawing&',
        async: true,
        defer: true
      }]
    }
  }

</script>

<style lang="scss" scoped>
  #map {
    background-color: red;
    width: 100%;
    height: 100vh;
    margin-top: 54px;
  }

  #legend {
    font-family: Arial, sans-serif;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    margin: 10px;
    border: 1px solid #000;
    border-radius: 10px;
  }

  #legend h3 {
    margin-top: 0;
    font-size: 1.2rem;
  }

  #legend img {
    vertical-align: middle;
  }

</style>
