const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
require('./db')
app.use(bodyParser())
const router = require('./router')

app.use(router.routes()).use(router.allowedMethods())
app.listen(3001, () => {
	console.log('http://localhost:3001')
})
