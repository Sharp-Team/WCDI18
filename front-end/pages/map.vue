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
        controlUI.style.backgroundColor = 'rgba(255,255,255,0.7)';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.style.zIndex = 1000;
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '12px';
        controlText.style.lineHeight = '20px';
        controlText.style.paddingLeft = '2px';
        controlText.style.paddingRight = '2px';
        controlText.innerHTML = 'Vị trí của bạn';
        controlUI.appendChild(controlText);

        // Setup the click event listeners
        controlUI.addEventListener('click', function () {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              map.setCenter(pos);
            }, function () {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
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
          infoWindow.setContent(`
            <p>Chào bạn đến với <span style="color: green; font-weight: bold; font-size: 15px">GoGreen</span></p>
            <p>Bạn đang ở đây!!!</p>
          `);
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
          type: 'electric',
          fullname: 'Phan Văn Đức',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(21.2186188, 105.1408639),
          type: 'car',
          fullname: 'Phạm Ngọc Hòa',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(21.3186188, 105.2418639),
          type: 'doctor',
          fullname: 'Trần Quang Nhật',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(21.4186188, 105.4428639),
          type: 'motorcycle',
          fullname: 'Đỗ Quang Hiệp',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(21.5186188, 105.3438639),
          type: 'fridge',
          fullname: 'Nguyễn Xuân Cường',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(21.6186188, 105.9448639),
          type: 'laptop',
          fullname: 'Nguyễn Phương Hồng Thủy',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(21.7186188, 105.7458639),
          type: 'fan',
          fullname: 'Nguyễn Hải Nam',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(21.8106188, 105.8468639),
          type: 'phone',
          fullname: 'Phạm Quang Hiệp',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(21.9196188, 105.6478639),
          type: 'waste',
          fullname: 'Lê Đức Anh Quân',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(20.0186188, 105.0488639),
          type: 'doctor',
          fullname: 'Nguyễn Minh Chiến',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(20.8176188, 105.5488639),
          type: 'car',
          fullname: 'Nguyễn Phương Anh',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: new google.maps.LatLng(20.7166188, 105.5498639),
          type: 'phone',
          fullname: 'Phạm Văn A',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
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
          infowindow.setContent(`
          <h6>Thông tin chi tiết</h6>
          <table class="table">
            <tr>
              <td>Họ và tên</td>
              <td style="font-weight: bold">` + feature.fullname + `</td>
            </tr>
            <tr class="table-success">
              <td>Email</td>
              <td style="font-weight: bold">` + feature.email + `</td>
            </tr>
            <tr>
              <td>Số điện thoại</td>
              <td style="font-weight: bold">` + feature.phone + `</td>
            </tr>
            <tr class="table-success">
              <td>Địa chi</td>
              <td style="font-weight: bold">` + feature.address + `</td>
            </tr>
            <tr>
                <td>Nội dung</td>
                <td style="font-weight: bold">` + feature.content + `</td>
              </tr>
          </table>
          `);
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
       * VẼ BÁN PHẠM VI QUÉT
       */
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var drawCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.4,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: pos,
            radius: 500 * 100
          });
        }, function () {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }

      /**
       * QUAY TRỞ VỀ VỊ TRÍ HIỆN TẠI
       */

      var centerControlDiv = document.createElement('div');
      var centerControl = new this.CenterControl(centerControlDiv, map);
      centerControlDiv.index = 1;
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    },
    head: {
      script: [{
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQjtj0TxFDfqm8uQbovjJ0pEVtkCgePCw&',
        async: true,
        defer: true
      }]
    }
  }

</script>

<style lang="scss" scoped>
  #map {
    background-color: #2EBE4A;
    width: 100%;
    height: 100vh;
    margin-top: 54px;
  }

  #legend {
    font-family: Arial, sans-serif;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    margin: 10px;
    border: 1px solid rgba(0, 0, 0, 0.25);
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
