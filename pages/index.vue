<template>
  <div>
    <slider />
    <section class="container">
      <div>
        <h2 class="title title-home text-center">
          Coding Project 2018
        </h2>
        <button class="button-goto-map d-md-none">
          <a href="/map">
            <img
              src="/images/homepage/goto-map-mobile.png"
              alt="go to map">
          </a>
        </button>
      </div>
    </section>
    <home-page />
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
  },
  layout: 'home'
}
</script>

<style lang="scss" scope>
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
