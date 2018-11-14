<template>
  <div>
    <nav class="side-navbar">
      <div class="side-navbar-wrapper">
        <div class="sidenav-header d-flex align-items-center justify-content-center">
          <div class="sidenav-header-inner text-center">
            <h2 class="h5">Admin</h2><span>Web Developer</span>
          </div>
          <div class="sidenav-header-logo"><a href="index.html" class="brand-small text-center"> <strong>B</strong><strong
                class="text-primary">D</strong></a></div>
        </div>
        <div class="main-menu">
          <ul id="side-main-menu" class="side-menu list-unstyled">
            <li><a href="#"> <i class="icon-home"></i>Home</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="page">
      <header class="header">
        <nav class="navbar">
          <div class="container-fluid">
            <div class="navbar-holder d-flex align-items-center justify-content-between">
              <div class="navbar-header"><a id="toggle-btn" href="#" class="menu-btn">
                  <i class="icon-bars"> </i></a><a href="#" class="navbar-brand">
                  <div class="brand-text d-none d-md-inline-block">
                    <span>Go Green</span></div>
                </a></div>
              <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <li class="nav-item"><a href="#" class="nav-link logout">
                    <span class="d-none d-sm-inline-block">Logout</span><i class="fa fa-sign-out"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section class="statistics">
        <div class="container-fluid">
          <div class="row d-flex">
            <div class="col-lg-4">
              <div class="card bg-light mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Light card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card bg-light">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Light card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card bg-light mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Light card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-30px mb-30px">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div id="new-updates" class="card updates recent-updated">
                <div id="updates-header" class="card-header d-flex justify-content-between align-items-center">
                  <h2 class="h5 display"><a data-toggle="collapse" data-parent="#new-updates" href="#list-feedback"
                      aria-expanded="true" aria-controls="list-feedback">Feedback</a></h2><a data-toggle="collapse"
                    data-parent="#new-updates" href="#list-feedback" aria-expanded="true" aria-controls="list-feedback"><i
                      class="fa fa-angle-down"></i></a>
                </div>
                <div id="list-feedback" role="tabpanel" class="collapse show">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Content</th>
                        <th scope="col">User</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(feedback, index) in listFeedBack" :key="feedback.user">
                        <th scope="row">{{ index+=1 }}</th>
                        <td>{{ feedback.content }}</td>
                        <td>{{ feedback.user }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-30px mb-30px">
        <div class="container-fluid mt-3">
          <div class="row">
            <div class="col-12">
              <div id="new-updates" class="card updates recent-updated">
                <div id="updates-header" class="card-header d-flex justify-content-between align-items-center">
                  <h2 class="h5 display"><a data-toggle="collapse" data-parent="#new-updates" href="#list-user"
                      aria-expanded="true" aria-controls="list-user">Manage User</a></h2><a data-toggle="collapse"
                    data-parent="#new-updates" href="#list-user" aria-expanded="true" aria-controls="list-user"><i
                      class="fa fa-angle-down"></i></a>
                </div>
                <div id="list-user" role="tabpanel" class="collapse show">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(user, index) in listUser" :key="user.username">
                        <th scope="row">{{ index +=1 }}</th>
                        <td>{{ user.username }}</td>
                        <td>{{ user.password }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listFeedBack: [
        {
          content: 'Rất dễ sử dụng',
          user: 'Flame'
        },
        {
          content: 'Tiện lợi',
          user: 'thaycacac'
        },
        {
          content: 'Khó sử dụng :/',
          user: 'Trần Quang Nhạt'
        },
      ],
      listUser: [
        {
          username: 'bacodekiller',
          password: 'bacode'
        },
        {
          username: 'thaycacac',
          password: 'hongthuydeoyeu'
        },
        {
          username: 'NhatTQ',
          password: 'nhattq'
        },
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
  .statistics {
    margin-top: 15px;
  }

  .icon-line-chart:before {
    content: "\70";
  }

  .icon-line-chart:before {
    content: "\70";
  }

  .page {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transition: width 0.3s linear;
    transition: width 0.3s linear;
    width: calc(100% - 200px);
    background-color: #F4F7FA;
    min-height: 100vh;
    padding-bottom: 50px;
  }

  .page.active {
    width: calc(100% - 70px);
  }

  nav.navbar .navbar-holder {
    width: 100%;
  }

  .side-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    width: 200px;
    text-align: left;
    background: #393836;
    color: #fff;
    z-index: 999;
    overflow-y: auto;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .side-navbar .scrolled-wrapper {
    width: 100%;
    height: 100%;
  }

  .side-navbar.hide {
    left: -70px;
  }

  .side-navbar a.brand-small {
    text-transform: uppercase;
    font-weight: 500;
    padding: 0;
  }

  .side-navbar a.brand-small:hover,
  .side-navbar a.brand-small:focus {
    background: none;
  }

  .side-navbar a.brand-small strong {
    font-size: 1.5rem;
  }

  .side-navbar li {
    position: relative;
  }

  .side-navbar li a {
    display: block;
    position: relative;
    font-size: .9rem;
    font-weight: 300;
    color: #fff;
    text-decoration: none;
    width: 100%;
    padding: 12px;
  }

  .side-navbar li a:focus,
  .side-navbar li a:hover,
  .side-navbar li a[aria-expanded="true"] {
    background: #33b35a;
    color: #fff;
    text-decoration: none;
  }

  .side-navbar li a[data-toggle="collapse"]::before {
    content: '\f104';
    display: inline-block;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-family: 'FontAwesome';
    position: absolute;
    top: 50%;
    right: 20px;
  }

  .side-navbar li a[aria-expanded="true"]::before {
    content: '\f107';
    color: #fff;
  }

  .side-navbar li.active>a {
    background: #33b35a;
  }

  .side-navbar li li.active>a {
    background: #2d9f50 !important;
  }

  .side-navbar li ul {
    background: #292929;
    position: relative;
    min-width: 100%;
    left: 0;
    padding-left: 0;
  }

  .side-navbar li ul a {
    padding-left: 20px;
    font-size: .85rem;
  }

  .side-navbar li ul.collapse a {
    border-left: 2px solid #33b35a;
  }

  .side-navbar li ul.collapse a:hover {
    background: #121212;
  }

  .side-navbar .sidenav-header {
    background: #292929;
    padding: 14px;
    margin-bottom: 10px;
  }

  .side-navbar .sidenav-header img {
    width: 50px;
    height: 50px;
  }

  .side-navbar .sidenav-header span {
    font-size: 0.8em;
    color: #666;
  }

  .side-navbar .sidenav-header h2 {
    margin: 10px 0 0;
    text-transform: uppercase;
    letter-spacing: .1em;
  }

  .side-navbar .sidenav-heading {
    font-weight: 700;
    color: #adb5bd;
    font-size: .9rem;
    text-transform: uppercase;
    letter-spacing: .1em;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .side-navbar i[class*='icon-'] {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }

  .side-navbar span {
    display: inline-block;
  }

  .side-navbar i {
    font-size: inherit;
    margin-right: 10px;
  }

  .side-navbar .badge {
    display: inline-block;
    font-size: 0.6em;
  }

  .side-navbar .brand-small {
    display: none;
  }

  .side-navbar.shrink {
    width: 70px;
    text-align: center;
  }

  .side-navbar.shrink .brand-small {
    display: block;
  }

  .side-navbar.shrink .sidenav-header-inner {
    display: none;
  }

  .side-navbar.shrink .sidenav-heading {
    margin-left: 0;
    font-size: .8rem;
  }

  .side-navbar.shrink ul li a {
    font-size: .7rem;
    padding-left: 5px;
    padding-right: 5px;
  }

  .side-navbar.shrink ul li a[data-toggle="collapse"]::before {
    content: '\f107';
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
    position: absolute;
    top: auto;
    right: 50%;
    bottom: 0;
    left: auto;
  }

  .side-navbar.shrink ul li a[data-toggle="collapse"][aria-expanded="true"]::before {
    content: '\f106';
  }

  .side-navbar.shrink ul li ul a {
    padding-left: 10px;
    font-size: .7rem;
  }

  .side-navbar.shrink i {
    display: block;
    margin-right: 0;
    font-size: 1rem;
  }

  .side-navbar.shrink .arrow {
    float: none;
    -webkit-transform: none !important;
    transform: none !important;
  }

  .side-navbar.shrink .badge {
    display: none;
  }

</style>
