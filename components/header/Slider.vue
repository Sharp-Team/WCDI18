<template>
  <div class="home-page d-flex is-hidden-mobile">
    <no-ssr>
      <div class="my-button">
        <nuxt-link to="/map">
          <button
            type="button"
            class="btn btn-home"
          >
            Bắt đầu với maps
          </button>
        </nuxt-link>
      </div>
    </no-ssr>
    <!-- Add Map SVG -->
    <div class="map">
      <img
        src="/images/map/map.svg"
        alt=""
        class="image-map"
      >
      <svg
        id="world-map"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 384"
        class="animation-location"
      >
        <defs />
        <g>
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-1"
            width="35"
            height="35"
            x="444.0889262322294"
            y="221.37641413057995"
          />
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-2"
            width="35"
            height="35"
            x="387.80778"
            y="257.30380282393287"
          />
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-3"
            width="35"
            height="35"
            x="383.00131856757406"
            y="201.04408894117424"
          />
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-4"
            width="35"
            height="35"
            x="313.60829994533833"
            y="174.34640958249776"
          />
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-5"
            width="35"
            height="35"
            x="364.7513298283196"
            y="218.88940165306045"
          />
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-6"
            width="35"
            height="35"
            x="152.990988943731"
            y="206.12918929531648"
          />
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-7"
            width="35"
            height="35"
            x="155.63802803968545"
            y="194.46087328533156"
          />
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-8"
            width="35"
            height="35"
            x="67.8921808757991"
            y="188.90494921458713"
            cursor="pointer"
          />
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-9"
            width="35"
            height="35"
            x="564.23014"
            y="341.91507625556955"
          />
          <image
            data-index="0"
            fill="grey"
            stroke="#505050"
            fill-opacity="1"
            stroke-width="1"
            stroke-opacity="1"
            r="5"
            class="jvectormap-marker jvectormap-element image-10"
            width="35"
            height="35"
            x="101.13737372592306"
            y="167.9898624827323"
            cursor="pointer"
          />
        </g>
      </svg>
    </div>
    <div class="page-info">
      <div class="row">
        <div class="col-md-6 left">
          <div class="content">
            <p>Người dùng online: <span class="my-number">13</span></p>
            <p>Tổng số lần giao dịch: <span class="my-number">627</span></p>
            <p class="end">Tổng thời gian sử dụng: <span class="my-number">8451</span></p>
          </div>
        </div>
        <div class="col-md-6 right">
          <div class="content">
            <p>Cần cù thôi...chưa đủ</p>
            <p>muốn làm chủ phải tinh khôn</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationMap: null
    }
  },
  mounted() {
    let image1 = parseInt(
      document.getElementsByClassName('image-1')[0].className.baseVal.charAt(43)
    )
    let image2 = parseInt(
      document.getElementsByClassName('image-2')[0].className.baseVal.charAt(43)
    )
    let image3 = parseInt(
      document.getElementsByClassName('image-3')[0].className.baseVal.charAt(43)
    )
    let image4 = parseInt(
      document.getElementsByClassName('image-4')[0].className.baseVal.charAt(43)
    )
    let image5 = parseInt(
      document.getElementsByClassName('image-5')[0].className.baseVal.charAt(43)
    )
    let image6 = parseInt(
      document.getElementsByClassName('image-6')[0].className.baseVal.charAt(43)
    )
    let image7 = parseInt(
      document.getElementsByClassName('image-7')[0].className.baseVal.charAt(43)
    )
    let image8 = parseInt(
      document.getElementsByClassName('image-8')[0].className.baseVal.charAt(43)
    )
    let image9 = parseInt(
      document.getElementsByClassName('image-9')[0].className.baseVal.charAt(43)
    )

    this.animationMap = setInterval(function() {
      image1 = image1 + 1
      let image1Change = image1 % 10
      document
        .getElementsByClassName('image-1')[0]
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/images/slider/' + image1Change + '.png'
        )

      image2 = image2 + 1
      let image2Change = image2 % 10
      document
        .getElementsByClassName('image-2')[0]
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/images/slider/' + image2Change + '.png'
        )

      image3 = image3 + 1
      let image3Change = image3 % 10
      document
        .getElementsByClassName('image-3')[0]
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/images/slider/' + image3Change + '.png'
        )

      image4 = image4 + 1
      let image4Change = image4 % 10
      document
        .getElementsByClassName('image-4')[0]
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/images/slider/' + image4Change + '.png'
        )

      image5 = image5 + 1
      let image5Change = image5 % 10
      document
        .getElementsByClassName('image-5')[0]
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/images/slider/' + image5Change + '.png'
        )

      image6 = image6 + 1
      let image6Change = image6 % 10
      document
        .getElementsByClassName('image-6')[0]
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/images/slider/' + image6Change + '.png'
        )

      image7 = image7 + 1
      let image7Change = image7 % 10
      document
        .getElementsByClassName('image-7')[0]
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/images/slider/' + image7Change + '.png'
        )

      image8 = image8 + 1
      let image8Change = image8 % 10
      document
        .getElementsByClassName('image-8')[0]
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/images/slider/' + image8Change + '.png'
        )

      image9 = image9 + 1
      let image9Change = image9 % 10
      document
        .getElementsByClassName('image-9')[0]
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/images/slider/' + image9Change + '.png'
        )
    }, 500)
  },
  destroyed() {
    clearInterval(this.animationMap)
  }
}
</script>

<style lang="scss" csoped>
.home-page {
  width: 100%;
  height: 100%;
  position: relative;
  height: 100vh;
  background-image: url('/images/slider/slider.png');
  .map {
    width: 100%;
    position: absolute;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    #world-map {
      width: 52%;
    }
    path.jvectormap-region.jvectormap-element {
      fill: #ededee;
      opacity: 0.8;
    }
    .image-map {
      width: 55%;
      position: absolute;
      z-index: 0;
    }
    .animation-location {
      z-index: 1;
    }
  }
  .my-button {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 65px;
    z-index: 10;
    .btn-home {
      text-transform: uppercase;
      border-radius: 20px;
      padding-left: 35px;
      padding-right: 35px;
      background: rgba(0, 0, 0, 0);
      color: #e4f7f7b5;
      border: 2px solid #e4f7f7b5;
      transition: transform 0.2s;
      cursor: pointer;
      &:hover {
        -ms-transform: scale(1.3);
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }
    }
  }
  .page-info {
    position: absolute;
    bottom: 20px;
    width: 100%;
    .left {
      border-right: 1px solid #ededee;
      .content {
        padding-right: 20px;
        font-size: 13px;
        p {
          text-transform: uppercase;
          text-align: right;
          color: #ededee;
          margin-bottom: 6px;
        }
        .my-number {
          color: #eafbfa;
          font-weight: bold;
        }
        .end {
          margin-bottom: 0;
        }
      }
    }
    .right {
      .content {
        padding-top: 15px;
        padding-left: 20px;
        min-width: 300px;
        p {
          color: #ededee;
          margin-bottom: 6px;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .home-page {
    height: 350px;
  }
}
</style>
