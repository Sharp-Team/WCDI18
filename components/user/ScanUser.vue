<template>
  <div class="modal fade modal-scan-user" id="scanUserModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="myModalLabel">Tìm người làm việc</h6>
          <input type="checkbox" v-model="checked"
          class="check check2 ml-4">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" v-if="checked">
          <h6 class="title is-6">Công việc cần quét: {{ selected }}</h6>
          <b-autocomplete
            class="pb-2 b-complete-cus"
            v-model="name"
            icon="magnify"
            placeholder="Chọn công việc"
            :keep-first="keepFirst"
            :open-on-focus="openOnFocus"
            :data="filteredDataObj"
            field="name"
            @select="option => selected = option">
          </b-autocomplete>

        </div>
        <div class="modal-body" v-if="checked">
          <h6 class="title is-6">Nội dung công việc</h6>
          <textarea class="form-control" id="message-text" rows="3" placeholder="Nhập chi tiết công việc"></textarea>
        </div>
        <div class="modal-body" v-if="checked">
          <h6 class="title is-6">Phạm vi quét: {{ range }} Km</h6>
          <input
            type="range"
            min="0"
            max=30
            v-model.number="range">
        </div>
        <div class="modal-footer d-flex justify-content-center" v-if="checked">
          <button type="submit" class="btn btn-success text-center btn-scan-user">
            <i class="fas fa-search-location mr-2"></i>
            Quét
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const data = require('~/assets/json/data-job-user.json')
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      checked: true,
      keepFirst: true,
      openOnFocus: false,
      name: '',
      data,
      selected: null
    }
  },
  computed: {
    filteredDataObj() {
      return this.data.filter((option) => {
        return option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
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

  .modal-scan-user {
    z-index: 1100 !important;
    .modal-dialog {
      .modal-content {
        position: fixed;
        width: 80% !important;
        left: 10%;
        .modal-header {
          border-bottom: none !important;
          h6 {
            font-size: 17px;
            color: #363636;
            font-weight: 600;
            line-height: 1.125;
          }
          .check{
            cursor: pointer;
            bottom: 0%;
            display: block;
            position: relative;
            width: 40px;
            height: 20px;
            -webkit-appearance: none;
          }
          .check2{
            background: #333;
            outline: none;
            border-radius: 60px;
            box-shadow: inset 0 0 5px rgba(0,0,0,.2);
            transition: .5s;
          }

          .check2:checked{
            background: #10ad10d6;
          }

          .check2:before{
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 60px;
            top: 0;
            left: 0;
            transform: scale(.8);
            box-shadow: 0 2px 15px rgba(0,0,0,.2);
            background: #fff;
            transition: .5s;
          }

          .check2:checked:before{
            left: 50%;
          }
        }
        .modal-body {
          margin-bottom: 10px;
          background-color: #d6d6d6;
          border-radius: 10px;
          width: 95% !important;
          left: 2.5%;

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
        .modal-footer {
          border-top: none !important;
          .btn-scan-user {
            background: $color-main;
            color: #fff;
          }
        }
      }
    }
  }
</style>


