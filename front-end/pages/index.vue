<template>
  <div>
    <slider></slider>
    <section class="container">
      <div>
        <h2 class="title">
          Coding Project 2018
        </h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Trang</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody v-for="page in pages" :key=page.no>
            <tr>
              <th scope="row">{{ page.no }}</th>
              <td>{{ page.name }}</td>
              <td><a :href="page.link">{{ page.link }}</a></td>
            </tr>
          </tbody>
        </table>
        <h5 class="title-small">Test back-end</h5>
        <back-end class="is-back-end" />
        <button @click="showPosition">Posision current</button>
        <div id="out"></div>
      </div>
    </section>
  </div>
</template>

<script>
  import BackEnd from '~/components/TestBackEnd.vue'
  import MyFooter from '../components/footer/footer.vue'
  import Navbar from '../components/header/navbar.vue'
  import Notification from '../components/share/notification.vue'
  import Slider from '../components/header/slider.vue';
  export default {
    data() {
      return {
        posistionCurren: '',
        pages: [{
            no: '1',
            name: 'Thông tin tài khoản',
            link: '/profile'
          },
          {
            no: '2',
            name: 'Đổi mật khẩu',
            link: '/change-password'
          },
          {
            no: '3',
            name: 'Lịch sử giao dịch',
            link: '/history'
          },
          {
            no: '4',
            name: 'Map',
            link: '/map'
          },
          {
            no: '5',
            name: 'Đăng nhập ver 2',
            link: '/login'
          },
          {
            no: '6',
            name: 'Đăng kí ver 2',
            link: '/register'
          },
          {
            no: '7',
            name: 'Click lấy thông tin',
            link: '/popover-info'
          }
        ]
      }
    },
    components: {
      BackEnd,
      MyFooter,
      Navbar,
      Notification,
      Slider
    },
    layout: 'home',
    methods: {
      showPosition() {
        var output = document.getElementById("out");
        if (!navigator.geolocation) {
          output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
          return;
        }
        function success(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;

          output.innerHTML = '<p>Latitude is ' + latitude + ' <br>Longitude is ' + longitude + '</p>';

        }
        function error() {
          output.innerHTML = "Unable to retrieve your location";
        }
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }
  }

</script>

<style lang="scss" scope>
  .title {
    margin: 0 auto;
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .title-small {
    margin-top: 25px;
    font-weight: 300;
    font-size: 30px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .is-back-end {
    margin-bottom: 50px;
  }

</style>
