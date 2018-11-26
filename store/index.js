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
      features: [
        {
          position: { lat: 21.1186188, lng: 105.5698639 },
          type: 'electric',
          fullname: 'Phan Văn Đức',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 21.2186188, lng: 105.1408639 },
          type: 'car',
          fullname: 'Phạm Ngọc Hòa',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 21.3186188, lng: 105.2418639 },
          type: 'doctor',
          fullname: 'Trần Quang Nhật',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 21.4186188, lng: 105.4428639 },
          type: 'motorcycle',
          fullname: 'Đỗ Quang Hiệp',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 21.5186188, lng: 105.3438639 },
          type: 'fridge',
          fullname: 'Nguyễn Xuân Cường',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 21.6186188, lng: 105.9448639 },
          type: 'laptop',
          fullname: 'Nguyễn Phương Hồng Thủy',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 21.7186188, lng: 105.7458639 },
          type: 'fan',
          fullname: 'Nguyễn Hải Nam',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 21.8106188, lng: 105.8468639 },
          type: 'phone',
          fullname: 'Phạm Quang Hiệp',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 21.9196188, lng: 105.6478639 },
          type: 'waste',
          fullname: 'Lê Đức Anh Quân',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 20.0186188, lng: 105.0488639 },
          type: 'doctor',
          fullname: 'Nguyễn Minh Chiến',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 20.8176188, lng: 105.5488639 },
          type: 'car',
          fullname: 'Nguyễn Phương Anh',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        },
        {
          position: { lat: 20.7166188, lng: 105.5498639 },
          type: 'phone',
          fullname: 'Phạm Văn A',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE'
        }
      ],
      markers: []
    },
    getters,
    mutations,
    actions
  })

export default store
