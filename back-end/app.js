const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config()
const routes = require('./app/routes/index')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// app.use('/users', require('./app/routes/user'))
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});
// app.get('/', (req, res) => {
//   res.status(200).json(user)
// })

let port = process.env.PORT
app.listen(port, () => {
  console.log(`Ahihi, Server is running on port ${port} !`)
})
