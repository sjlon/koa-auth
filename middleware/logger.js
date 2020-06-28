module.exports = function () {
	return async (ctx, next) => {
		// app.use(async (ctx, next) => {
		// 	await next()
		// 	const rt = ctx.response.get('X-Response-Time')
		// 	console.log(`${ctx.method}--${ctx.url}--${rt}`)
		// })
		// app.use(async (ctx, next) => {
		const start = Date.now()
		await next()
		const ms = Date.now() - start
		console.log(`${ctx.method}--${ctx.url}--${ms}ms`)
		// })
	}
}
