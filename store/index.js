import Vuex from 'vuex'
import mutations from '~/store/mutations'
import actions from '~/store/actions'
import getters from '~/store/getters'

const store = () =>
  new Vuex.Store({
    state: {
      range: 5,
      username: null,
      user: null,
      avatar: null,
      full_name: null,
      map: null,
      icons: {
        electric: {
          name: 'Thợ sửa điện tử',
          icon: '/images/icon/electric.png'
        },
        fridge: {
          name: 'Thợ sửa điện lạnh',
          icon: '/images/icon/fridge.png'
        },
        phone: {
          name: 'Thợ sửa điện thoại',
          icon: '/images/icon/phone.png'
        },
        motorcycle: {
          name: 'Thợ sửa xe máy',
          icon: '/images/icon/motorcycle.png'
        },
        car: {
          name: 'Thợ sửa ô tô',
          icon: '/images/icon/car.png'
        },
        waste: {
          name: 'Thu mua phế liệu',
          icon: '/images/icon/waste.png'
        },
        doctor: {
          name: 'Bác sĩ',
          icon: '/images/icon/doctor.png'
        },
        laptop: {
          name: 'Thợ sửa máy tính/ laptop',
          icon: '/images/icon/laptop.png'
        },
        fan: {
          name: 'Thợ sửa đồ gia dụng',
          icon: '/images/icon/fan.png'
        }
      },
      markers: []
    },
    getters,
    mutations,
    actions
  })

export default store
