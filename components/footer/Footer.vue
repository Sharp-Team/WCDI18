<template>
  <div class="footer">
    <div class="up-footer">
      <div class="container">
        <div class="row">
          <div class="item-footer my-auto col-md-3">
            <nuxt-link
              to="/"
              class="logo-footer">
              <img
                src="/images/logo.png"
                alt="" >
            </nuxt-link>
          </div>
          <div class="item-footer col-md-2">
            <h3 class="title-footer">LIÊN HỆ</h3>
            <ul class="ul">
              <li class="sub-contact">
                <a href="#about">Về chúng tôi</a>
              </li>
              <li class="sub-contact">
                <a href="#how-to-use">Cách sử dụng</a>
              </li>
              <li class="sub-contact">
                <nuxt-link to="/feedback">Feedback</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="item-footer col-md-3">
            <h3 class="title-footer">KẾT NỐI</h3>
            <div class="social-link">
              <a href="#">
                <i class="fab fa-google" />
              </a>
              <a href="#">
                <i class="fab fa-facebook-f" />
              </a>
              <a href="https://github.com/Sharp-Team">
                <i class="fab fa-github" />
              </a>
              <a href="#">
                <i class="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div class="item-footer col-md-4 col-footer-final">
            <div class="footer-info mb-1">
              <img
                src="/images/icon-footer/icon-local.png"
                alt="" >
              <span class="is-address">
                Km29 - Đại Lộ Thăng Long - Thạch Hòa - Thạch Thất - Hà Nội
              </span>
            </div>
            <div class="footer-info mb-1">
              <img
                src="/images/icon-footer/icon-phone.png"
                alt="" >
              <span class="is-address">0123456789</span>
            </div>
            <div class="footer-info mb-1">
              <img
                src="/images/icon-footer/icon-contact.png"
                alt="" >
              <span class="is-address">thaycacacc@gmail.com</span>
            </div>
            <form class="form-inline frm-contact">
              <div class="form-group">
                <input
                  id="inputEmail"
                  type="email"
                  class="form-control button-mail"
                  placeholder="E-mail"
                >
              </div>
              <button
                type="submit"
                class="btn btn-send uppercase ml-1">
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-footer">
      <div class="container is-footer">
        <div class="copyright">
          Copyright@2018. Go Green
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/variable.scss';
.button-mail {
  border-radius: 4px !important;
}
.is-footer {
  margin-top: 0 !important;
}
.copyright {
  color: #fff;
}
.footer {
  background-color: $color-main;
  padding: 0;
  font-weight: 600;
  .logo-footer {
    padding-bottom: 45px;
  }
  .item-footer {
    h3 {
      font-weight: 600;
      font: 22px;
    }
    a {
      font-weight: 600;
    }
  }
  .col-footer-final {
    .footer-info {
      position: relative;
      padding-left: 20px;
      color: #fff;
      margin-bottom: 5px;
      > img {
        width: auto;
        height: 14px;
        color: #707070;
        position: absolute;
        top: 3px;
        left: 0;
      }
    }
    @media (max-width: 768px) {
      .footer-info {
        padding-left: 0;
        > img {
          display: none;
        }
      }
    }
    .frm-contact {
      margin-top: 20px;
      .form-group {
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.19);
        margin: 0;
        .form-control {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          padding-left: 2rem;
          padding-right: 2rem;
          height: 46px;
          max-width: 100%;
          border: 0;
        }
      }
      .btn-send {
        color: rgb(0, 0, 0);
        background-color: rgb(216, 213, 213) !important;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height: 46px;
        padding-left: 1rem;
        padding-right: 1rem;
        text-transform: uppercase;
        border-radius: none;
      }
      @media (max-width: 1441px) {
        .form-group {
          margin-bottom: 5px;
          width: 100%;
          margin-left: 4px;
          .form-control {
            min-width: 100%;
          }
        }
        .btn-send {
          width: 100%;
        }
      }
      @media (max-width: 1200px) {
        .form-group {
          margin-bottom: 5px;
          width: 100%;
          margin-left: 4px;
          .form-control {
            min-width: 100%;
          }
        }
        .btn-send {
          width: 100%;
        }
      }
      @media (max-width: 768px) {
        .btn-send {
          background-color: #d8d5d5 !important;
          color: #000;
        }
      }
    }
  }
  .bottom-footer {
    padding: 1.5rem 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .up-footer {
    padding: 4rem 0 3rem;
    font-family: $font-family-main;
    .item-footer {
      font-size: 90%;
      color: #fff;
      a {
        color: white !important;
      }
      h3 {
        color: white !important;
        font-size: 20px;
      }
      ul {
        padding-left: 0;
        li {
          margin-bottom: 5px;
          list-style-type: none;
          font-weight: 300;
        }
      }
      .logo-footer {
        max-width: 200px;
        padding-right: 2rem;
        display: inline-block;
        > img {
          max-width: 100%;
        }
      }
      .social-link {
        font-size: 2rem;
        a {
          display: inline-block;
          margin-right: 0.5rem;
          margin-top: 0;
        }
      }
    }
    @media (max-width: 768px) {
      .item-footer {
        margin-bottom: 15px;
        .logo-footer {
          display: none;
          margin-bottom: 15px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .up-footer {
      padding-top: 25px;
      padding-bottom: 5px;
    }
    .title-footer {
      font-size: 19px !important;
    }
    .sub-contact {
      font-size: 13px !important;
    }
    .social-link {
      font-size: 1.5rem !important;
    }
    .is-address {
      font-size: 12px !important;
    }
    .bottom-footer {
      padding: 10px 0 !important;
      .copyright {
        font-size: 12px;
      }
    }
  }
}
</style>
