const bodyParser = require('body-parser'),
	express = require('express'),
	morgan = require('morgan'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	User = require('./testServer/src/components/user/userRouter')
require('dotenv').config()

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())
app.use(cors())

mongoose.Promise = global.Promise
mongoose.connect(process.env.CONNECT_MONGO, {
	useNewUrlParser: true
}).then(() => {
	console.log('Connect Db')
}).catch((err) => console.log(err))

app.use('/user', User)

const port = process.env.PORT
app.listen(port, () => {
	console.log(`Server is running on port ${port} !`)
})
