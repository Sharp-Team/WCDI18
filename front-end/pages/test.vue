<template>
  <div>
    <div id="map"></div>
    <div id="legend"><h3>Legend</h3></div>
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
          zoom: 8
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
      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
      var icons = {
        parking: {
          name: 'Parking',
          icon: iconBase + 'parking_lot_maps.png'
        },
        library: {
          name: 'Library',
          icon: iconBase + 'library_maps.png'
        },
        info: {
          name: 'Info',
          icon: iconBase + 'info-i_maps.png'
        }
      };
      var features = [
        {
          position: new google.maps.LatLng(21.0186188, 105.5698639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0186188, 105.5408639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0186188, 105.5418639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0186188, 105.5428639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0186188, 105.5438639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0186188, 105.5448639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0186188, 105.5458639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0106188, 105.5468639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0196188, 105.5478639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0186188, 105.5488639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0176188, 105.5488639),
          type: 'info'
        }, {
          position: new google.maps.LatLng(21.0166188, 105.5498639),
          type: 'parking'
        }, {
          position: new google.maps.LatLng(21.0156188, 105.5498639),
          type: 'parking'
        }, {
          position: new google.maps.LatLng(21.0146188, 105.5498639),
          type: 'parking'
        }, {
          position: new google.maps.LatLng(21.0136188, 105.5498639),
          type: 'parking'
        }, {
          position: new google.maps.LatLng(21.0126188, 105.5498639),
          type: 'parking'
        }, {
          position: new google.maps.LatLng(21.0116188, 105.5498639),
          type: 'parking'
        }, {
          position: new google.maps.LatLng(21.0886188, 105.5498639),
          type: 'parking'
        }, {
          position: new google.maps.LatLng(21.0886188, 105.5498639),
          type: 'library'
        }
      ]
      // Create markers.
      features.forEach(function(feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map
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
  background: #fff;
  padding: 10px;
  margin: 10px;
  border: 3px solid #000;
}
#legend h3 {
  margin-top: 0;
}
#legend img {
  vertical-align: middle;
}
</style>
