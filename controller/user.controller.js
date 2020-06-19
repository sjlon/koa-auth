const Router = require('@koa/router')
const userRouter = new Router()
const userService = require('../services/user.service')

userRouter.get('/', async ctx => {
	ctx.body = 'hello world KOA-AUTH'
})
userRouter.post('/register', async ctx => {
	const data = ctx.request.body
	await userService.register(ctx, data)
})
userRouter.post('/login', async ctx => {
	const data = ctx.request.body
	await userService.login(ctx, data)
})
module.exports = { userRouter }
