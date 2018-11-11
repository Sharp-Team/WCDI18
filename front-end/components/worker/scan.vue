<template>
  <div
    class="modal is-modal"
    id="scan-Modal"
  >
    <div
      class="notification-content modal-content-1 ml-2"
      id="scan-ModalContent"
    >
      <h6 class="notification-title">Quét
        <i
          class="fas fa-times is-IconClose"
          id="scanCloseModal"></i>
      </h6>
      <div class="wrapper-notification">
        <div class="one-notification">
          <div class="notification-container py-3">
            <div class="media">
              <div class="media-body">
                <div class="d-flex justify-content-between">
                  <h5 class="mt-0 mb-1 title-notification">
                    Vị trí của bạn
                  </h5>
                </div>
                <p class="my-0 mt-1 is-content">
                  <img
                    src="/images/icon-navbar/local.png"
                    alt="local"
                    class="noti-image"
                  />
                  {{ address }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="one-notification mt-2 pb-2">
          <div class="notification-container py-3">
            <div class="media">
              <div class="media-body">
                <div class="d-flex justify-content-between">
                  <h5 class="mt-0 mb-3 title-notification">
                    Chọn công việc
                  </h5>
                </div>
                <b-autocomplete
                  class="pb-2 b-complete-cus"
                  v-model="name"
                  icon="magnify"
                  placeholder="Chọn công việc"
                  :keep-first="keepFirst"
                  :open-on-focus="openOnFocus"
                  :data="filteredDataObj"
                  field="name"
                  @select="option => selected.push(option)">
                </b-autocomplete>
                <b-field
                  grouped
                  group-multiline>
                  <div
                    v-for="(item) in selected"
                    :key="item.id"
                    v-if="item !== null"
                    track-by="name"
                    class="control"
                  >
                    <!-- FIXME: v-if="isTag1Active"  -->
                    <b-tag
                      type="is-success"
                      size="is-medium"
                      closable @close="isTag1Active = false"
                    >
                      {{ item.name }}
                    </b-tag>
                  </div>
                </b-field>
              </div>
            </div>
          </div>
        </div>
        <div class="one-notification mt-2">
          <div class="notification-container py-3">
            <div class="media">
              <div class="media-body">
                <div class="d-flex justify-content-between">
                  <h5 class="mt-0 mb-2 title-notification">
                    Phạm vi quét: {{ range }} Km
                  </h5>
                </div>
                <input
                  type="range"
                  min="0"
                  max=30
                  v-model.number="range">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="reset-notification text-center">
        <button class="btn-reset-notification btn">
          <i class="fas fa-search-location mr-2"></i>
          Quét
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  const data = require('~/assets/json/data-job.json')
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        keepFirst: true,
        openOnFocus: false,
        name: '',
        selected: [],
        data,
        isTag1Active: true,
        address: 'Room D413, FPT University'
      }
    },
    computed: {
      filteredDataObj() {
        return this.data.filter((option) => {
          return option.name.toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        })
      },
      range: {
        get () {
          return this.$store.getters.GET_RANGE
        },
        set (value) {
          this.$store.commit('setRange', value)
        }
      },
    }
  }

</script>

<style lang="scss" scoped>
  @import '~assets/scss/variable.scss';

  .noti-image {
    margin-right: 7px;
  }

  .is-content {
    font-size: 0.8rem !important;
  }

  .input {
    background-color: #f9f9f9;
    border-radius: 20px;
  }

  .is-modal {
    visibility: hidden;
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: block;
    cursor: pointer;
  }

  .notification-content {
    position: fixed;
    left: 0;
    height: 86vh;
    top: 20px;
    bottom: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    width: 310px;
    overflow-y: scroll;
    border: 0 !important;
    border-radius: 10px !important;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    button {
      border: none !important;
    }
  }

  .modal-content-1 {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateX(-120%);
  }

  .notification-title {
    font-size: 17px;
    background: $color-main;
    color: #fff;
    padding: 0.6em 0 0.6em 1.2em;
    position: relative;

    #scanCloseModal {
      position: absolute;
      right: 15px;
      font-size: 0.9em;
      cursor: pointer;
      border-radius: 50%;
      padding: 3px 5px;
      color: $color-main;
      background: #fff;
    }
  }

  .is-close {
    color: $font-color-grey;
  }

  .wrap-icon-noti {
    cursor: pointer;
    position: relative;
    margin: 0 10px;

    .is-icon-noti {
      font-size: 30px;
    }

    .noti-number {
      background-color: $color-main;
      padding: 0px 5px;
      color: white;
      border-radius: 10px;
      position: absolute;
      margin-left: 20px;
      margin-top: -35px;
    }
  }

  .wrapper-notification {
    padding: 2px 15px 15px 15px;

    .one-notification {
      font-size: 16px;
      background-color: $color-grey-light;
      border-radius: 8px;

      .notification-container {
        .media {
          .media-body {
            padding: 0 15px;

            .title-notification,
            .is-content {
              font-size: 0.9rem;

              .noti-image {
                width: 4%;
                padding-bottom: 5px;
              }
            }

            .is-content {
              color: #868686;
            }

            $track-w: 100%;
            $track-h: .1em;
            $thumb-d: 1em;

            @mixin track() {
              box-sizing: border-box;
              border: none;
              width: $track-w;
              height: $track-h;
              background: #ccc;
            }

            @mixin thumb() {
              box-sizing: border-box;
              border: none;
              width: $thumb-d;
              height: $thumb-d;
              border-radius: 50%;
              background: $color-main;
            }

            [type='range'] {

              &,
              &::-webkit-slider-thumb {
                -webkit-appearance: none;
              }

              margin: 0;
              padding: 0;
              width: $track-w;
              height: $thumb-d;
              background: transparent;
              font: 1em/1 arial,
              sans-serif;

              &::-webkit-slider-runnable-track {
                @include track
              }

              &::-moz-range-track {
                @include track
              }

              &::-ms-track {
                @include track
              }

              &::-webkit-slider-thumb {
                margin-top: .5*($track-h - $thumb-d);
                @include thumb
              }

              &::-moz-range-thumb {
                @include thumb
              }

              &::-ms-thumb {
                margin-top: 0;
                @include thumb
              }

              &::-ms-tooltip {
                display: none
              }
            }
          }
        }
      }
    }
  }

  .reset-notification {
    padding: 15px 0;

    .btn-reset-notification {
      background: $color-main;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 10px 25px;
      margin: auto;
      font-size: 14px;
    }
  }

  @media (max-width: 576px) {
    .notification-content {
      width: 300px;

      .notification-title {
        font-size: 14px !important;
      }

      .wrapper-notification {
        .one-notification {
          font-size: 12px !important;
        }
      }
    }
  }

</style>
