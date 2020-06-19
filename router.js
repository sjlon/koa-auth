const Router = require('@koa/router')
const User = require('./model/user.schma')
const router = new Router({
	prefix: '/api',
})

router.get('/', async ctx => {
	ctx.body = ctx.query
})
router.post('/register', async ctx => {
	const user = await User.create({
		...ctx.request.body,
	})
	ctx.body = user
})
module.exports = router
