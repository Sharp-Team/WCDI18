<template>
  <div>
    <div id="map"></div>
    <div id="legend">
      <h3>Chú thích</h3>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {

      /**
       * Khởi tạo map
       */
      var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 21.0086188 , lng: 105.5298639},
          zoom: 9
      });

      /**
       * Đánh dấu một marker
       */
      const position1 = {lat: 21.0086188, lng: 105.5598639};
      const position2 = {lat: 21.2086188, lng: 105.5598639};
      var marker = new google.maps.Marker({position: position1, map: map});
      var marker = new google.maps.Marker({position: position2, map: map});

      /**
       * Modifier marker
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
      var features = [
        {
          position: new google.maps.LatLng(21.1186188, 105.5698639),
          type: 'electric'
        }, {
          position: new google.maps.LatLng(21.2186188, 105.1408639),
          type: 'car'
        }, {
          position: new google.maps.LatLng(21.3186188, 105.2418639),
          type: 'doctor'
        }, {
          position: new google.maps.LatLng(21.4186188, 105.4428639),
          type: 'motorcycle'
        }, {
          position: new google.maps.LatLng(21.5186188, 105.3438639),
          type: 'fridge'
        }, {
          position: new google.maps.LatLng(21.6186188, 105.9448639),
          type: 'laptop'
        }, {
          position: new google.maps.LatLng(21.7186188, 105.7458639),
          type: 'fan'
        }, {
          position: new google.maps.LatLng(21.8106188, 105.8468639),
          type: 'phone'
        }, {
          position: new google.maps.LatLng(21.9196188, 105.6478639),
          type: 'waste'
        }, {
          position: new google.maps.LatLng(20.0186188, 105.0488639),
          type: 'doctor'
        }, {
          position: new google.maps.LatLng(20.8176188, 105.5488639),
          type: 'car'
        }, {
          position: new google.maps.LatLng(20.7166188, 105.5498639),
          type: 'phone'
        }, {
          position: new google.maps.LatLng(20.6156188, 105.5498639),
          type: 'laptop'
        }, {
          position: new google.maps.LatLng(21.5146188, 105.5498639),
          type: 'electric'
        }, {
          position: new google.maps.LatLng(21.4136188, 105.5498639),
          type: 'laptop'
        }, {
          position: new google.maps.LatLng(21.0126188, 105.5498639),
          type: 'laptop'
        }
      ]
      // Create markers.
      var infowindow = new google.maps.InfoWindow();
      features.forEach(function(feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map
        });
        google.maps.event.addListener(marker, 'click', function(){
          infowindow.close(); // Close previously opened infowindow
          infowindow.setContent( "<div id='infowindow'>"+ icons[feature.type].icon +"</div>");
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

        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

      /**
       * Click to show information
       */
      var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';


    },
    head: {
    script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQjtj0TxFDfqm8uQbovjJ0pEVtkCgePCw',
        async: true,
        defer: true
      }
    ]
  }
  }
</script>

<style lang="scss" scoped>
#map {
  background-color: red;
  width: 100%;
  height: 100vh;
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
