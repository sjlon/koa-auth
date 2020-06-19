const Router = require('@koa/router')
const userCtr = require('./user.controller')
const router = new Router({
	prefix: '/api',
})

const routerBuilder = (namespace, ctr) => {
	router.use(namespace, ctr.routes(), ctr.allowedMethods())
}

routerBuilder('/user', userCtr.userRouter)

module.exports = router
