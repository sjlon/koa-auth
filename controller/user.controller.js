const Router = require('@koa/router')
const userRouter = new Router()
const userService = require('../services/user.service')

userRouter.get('/', async ctx => {
	ctx.body = ctx.query
})
userRouter.post('/register', async ctx => {
	const params = ctx.request.body
	await userService.register(ctx, params)
})
module.exports = { userRouter }
