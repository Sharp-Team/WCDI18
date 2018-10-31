<template>
  <div>
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
        <h5 class="title-small">Modal</h5>
        <div class="flex-row">
          Đăng Nhập:
        </div>
        <login />
        <div class="flex-row">
          Đăng Ký:
        </div>
        <register />
        <h5 class="title-small">Test back-end</h5>
        <back-end />
      </div>
    </section>
  </div>
</template>

<script>
  import BackEnd from '~/components/TestBackEnd.vue'
  import Login from '../components/share/login.vue'
  import Register from '../components/share/register.vue'
  import MyFooter from '../components/footer/footer.vue'
  import Navbar from '../components/header/navbar.vue'
  import Notification from '../components/share/notification.vue'
  export default {
    data () {
      return {
        pages: [
          { no: '1', name: 'Thông tin tài khoản', link: '/profile' },
          { no: '2', name: 'Đổi mật khẩu', link: '/change-password' },
          { no: '3', name: 'Lịch sử giao dịch',link: '/history'},
          { no: '4', name: 'Đăng nhập ver 2',link: '/login'}
        ]
      }
    },
    components: {
      BackEnd,
      Login,
      Register,
      MyFooter,
      Navbar,
      Notification
    },
    lauout: 'default'
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

</style>
