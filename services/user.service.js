const UserSchema = require('../model/user.schma')
const mongoose = require('../db')
const User = mongoose.model('User', UserSchema)

const register = async (ctx, params) => {
	const { username, password } = params
	const userData = await User.findOne({ username })
	if (userData) {
		ctx.body = {
			msg: '用户已存在',
			isSuccess: false,
		}
		return
	}
	const user = await User.create({
		username,
		password,
	})
	ctx.body = {
		data: user,
		msg: '创建用户成功',
		isSuccess: true,
	}
}
module.exports = {
	register,
}
