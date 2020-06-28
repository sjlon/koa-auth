const Koa = require('koa')
var gzip = require('koa-gzip')
const jwtKoa = require('koa-jwt')
const app = new Koa()
app.use(gzip())
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const logger = require('./middleware/logger')
app.use(logger(app))
const auth = require('./middleware/auth')
app.use(auth(app))

const router = require('./controller/index')
const config = require('./config')
app.use(
	jwtKoa({
		secret: config.SECRET,
	}).unless({
		path: [/^\/api\/user\/login/, /^\/api\/user\/register/],
	})
)
app.use(router.routes()).use(router.allowedMethods())
app.listen(3001, () => {
	console.log('http://localhost:3001')
})
