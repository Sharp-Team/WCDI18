const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
var session = require('express-session')

const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/signup', async (req, res) => {
  try {
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
  } catch (e) {
    console.log(e)
  }
})

router.post('/signin', async (req, res) => {
  const { username, password } = req.body
  await User.findOne({ username: username }, (err, result) => {
    if (result) {
      if (result.password === password) {
        req.session.username = result.full_name
        req.session.avatar = result.avatar
        res.status(200).json({
          data: result.avatar,
          error: null
        })
      } else {
        res.status(200).json({
          data: '',
          error: 'Mật khẩu không chính xác'
        })
      }
    } else {
      console.log(err)
      res.status(200).json({
        data: null,
        error: `Tài khoản
        ${username} không tồn tại, vui lòng đăng ký. Hoặc mật khẩu sai`
      })
    }
  })
})

router.get('/signout', async (req, res) => {
  await req.session.regenerate(error => {
    console.log(error)
  })
})

router.post('/profile', async (req, res) => {
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

router.post('/password', async (req, res) => {
  const { username, oldpassword, newpassword } = req.body
  try {
    await User.findOne({
      username: username
    }).then(result => {
      if (result.password !== oldpassword) {
        res.status(200).json({
          data: '',
          error: 'Mật khẩu cũ không chính xác'
        })
      }
    })
    await User.findOneAndUpdate(
      { username: username },
      {
        password: newpassword
      }
    ).then(response => {
      res.status(200).json({
        data: `Cập nhật mật khẩu thành công`,
        error: null
      })
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router