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
          <tbody
            v-for="page in pages"
            :key=page.no>
            <tr>
              <th scope="row">{{ page.no }}</th>
              <td>{{ page.name }}</td>
              <td><a :href="page.link">{{ page.link }}</a></td>
            </tr>
          </tbody>
        </table>
        <h5 class="title-small">Test back-end</h5>
        <back-end class="is-back-end" />
      </div>
    </section>
  </div>
</template>

<script>
  import BackEnd from '~/components/TestBackEnd'
  import MyFooter from '~/components/footer/Footer'
  import Navbar from '~/components/header/Navbar'
  import Notification from '~/components/share/Notification'
  import Slider from '~/components/header/Slider'

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
            name: 'Trang chủ',
            link: '/homepage'
            
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
