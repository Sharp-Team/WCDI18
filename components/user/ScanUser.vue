<template>
  <div
    id="scanUserModal"
    class="modal fade modal-scan-user"
    tabindex="-1"
    role="dialog"
    aria-labelledby="basicModal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h6 class="title is-6">Công việc cần quét: {{ selected }}</h6>
          <b-autocomplete
            v-model="name"
            :keep-first="keepFirst"
            :open-on-focus="openOnFocus"
            :data="filteredDataObj"
            class="pb-2 b-complete-cus"
            icon="magnify"
            placeholder="Chọn công việc"
            field="name"
            @select="option => selected = option"
          />
        </div>
        <div
          class="modal-body">
          <h6 class="title is-6">Nội dung công việc</h6>
          <textarea
            id="message-text"
            v-model="detailwork"
            class="form-control"
            rows="3"
            placeholder="Nhập chi tiết công việc" />
        </div>
        <div
          class="modal-body">
          <h6 class="title is-6">Phạm vi quét: {{ range }} Km</h6>
          <input
            v-model.number="range"
            type="range"
            min="0"
            max="30"
          >
        </div>
        <div
          class="modal-footer d-flex justify-content-center"
        >
          <button
            type="submit"
            class="btn btn-success text-center btn-scan-user">
            <i class="fas fa-search-location mr-2" />
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
  data() {
    return {
      keepFirst: true,
      openOnFocus: false,
      name: '',
      detailwork: '',
      data,
      selected: null
    }
  },
  computed: {
    filteredDataObj() {
      return this.data.filter(option => {
        return
        option
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    },
    range: {
      get() {
        return this.$store.getters.GET_RANGE
      },
      set(value) {
        this.$store.commit('setRange', value)
      }
    }
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
      width: 65% !important;
      left: -80%;
      .modal-header {
        border-bottom: none !important;
        h6 {
          font-size: 17px;
          color: #363636;
          font-weight: 600;
          line-height: 1.125;
        }
        .check {
          cursor: pointer;
          bottom: 0%;
          display: block;
          position: relative;
          width: 40px;
          height: 20px;
          -webkit-appearance: none;
        }
        .check2 {
          background: #333;
          outline: none;
          border-radius: 60px;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          transition: 0.5s;
        }
        .check2:checked {
          background: #10ad10d6;
        }
        .check2:before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 60px;
          top: 0;
          left: 0;
          transform: scale(0.8);
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
          background: #fff;
          transition: 0.5s;
        }
        .check2:checked:before {
          left: 50%;
        }
      }
      .modal-body {
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 14px;
        background-color: #d6d6d6;
        border-radius: 10px;
        width: 92% !important;
        left: 2.5%;
        $track-w: 100%;
        $track-h: 0.1em;
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
          font: 1em/1 arial sans-serif;
          &::-webkit-slider-runnable-track {
            @include track;
          }
          &::-moz-range-track {
            @include track;
          }
          &::-ms-track {
            @include track;
          }
          &::-webkit-slider-thumb {
            margin-top: 0.5 * ($track-h - $thumb-d);
            @include thumb;
          }
          &::-moz-range-thumb {
            @include thumb;
          }
          &::-ms-thumb {
            margin-top: 0;
            @include thumb;
          }
          &::-ms-tooltip {
            display: none;
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
