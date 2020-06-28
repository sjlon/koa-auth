module.exports = function (app) {
	return async (ctx, next) => {
		await next().catch(err => {
			console.log(err)
			if (err.status === 401) {
				ctx.status = 401
				ctx.body = {
					data: null,
					message: 'token无效',
					isSuccess: false,
				}
			} else {
				throw err
			}
		})
	}
}
