<template>
  <div>
    <section class="container">
      <div>
        <h2 class="title title-home text-center">
          Coding Project 2018
        </h2>
        <div class="has-text-centered">
          <img
            src="/images/tu.jpg"
            alt="go to map"
          >
          <img
            src="/images/hiep.jpg"
            alt="go to map"
          >
          <img
            src="/images/hoa.jpg"
            alt="go to map"
          >
          <img
            src="/images/phong.jpg"
            alt="go to map"
          >
          <img
            src="/images/nhat.jpg"
            alt="go to map"
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MyFooter from '~/components/footer/Footer'
import Navbar from '~/components/header/Navbar'
import Notification from '~/components/share/Notification'
import Slider from '~/components/header/Slider'
import HomePage from '~/components/home'

export default {
  components: {
    MyFooter,
    Navbar,
    Notification,
    Slider,
    HomePage
  }
}
</script>

<style lang="scss" scope>
.image-1 {
  width: 100%;
}
.title {
  margin: 35px auto;
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

@media (max-width: 768px) {
  .title-home {
    margin-top: 54px;
    font-size: 25px;
    margin-bottom: 0;
  }
  .button-goto-map {
    width: 100%;
    background: 0;
    border: 0;
    margin-bottom: 35px;
  }
}
</style>
