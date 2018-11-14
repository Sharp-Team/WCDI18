const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

router.post('/signup', async (req, res) => {
  const {
    username,
    password,
    avatar,
    email,
    full_name,
    phone_number,
    province,
    district,
    address_detail,
    object,
    career,
    indentify_card
  } = req.body
  const findUser = await User.findOne({
    username
  })
  if (findUser) {
    res.status(200).json({
      data: null,
      error: `Tài khoản ${findUser.username} đã có người sử dụng`
    })
  } else {
    const newUser = await User.create({
      username,
      password,
      avatar,
      email,
      full_name,
      phone_number,
      province,
      district,
      address_detail,
      object,
      career,
      indentify_card
    })
    await newUser.save()
    res.status(200).json({
      data: newUser,
      error: null
    })
  }
})

router.post('/signin', async (req, res) => {
  const user = req.body
  await User.findOne({
    username: user.username
  })
    .then(result => {
      if (result.password === user.password) {
        res.status(200).json({
          data: `Đăng nhập thành công`,
          error: null
        })
      } else {
        res.status(200).json({
          data: '',
          error: 'Mật khẩu không chính xác'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(200).json({
        data: null,
        error: `Tài khoản ${user.username} không tồn tại, vui lòng đăng ký`
      })
    })
})
router.get('/signout', async (req, res) => {
  await delete req.session
  if (req.session == null) {
    res.status(200).json({
      data: 'Đăng xuất thành công !',
      error: null
    })
  } else {
    res.status(200).json({
      data: null,
      error: `Không thể đăng xuất`
    })
  }
})

router.get('/profile', async (req, res) => {
  try {
    const { username } = req.body
    const findUser = await User.findOne({
      username
    })
    res.status(200).json(findUser)
  } catch (error) {
    console.log(error.message)
  }
})

module.exports = router
