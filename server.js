const Koa = require('koa')
var gzip = require('koa-gzip')
const app = new Koa()
app.use(gzip())
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const router = require('./controller/index')

app.use(router.routes()).use(router.allowedMethods())
app.listen(3001, () => {
	console.log('http://localhost:3001')
})
