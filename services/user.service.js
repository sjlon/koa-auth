const UserSchema = require('../model/user.schma')
const mongoose = require('../db')
const User = mongoose.model('User', UserSchema)
const config = require('../config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

async function login(ctx, data) {
	const { username, password } = data
	const userData = await User.findOne({ username })
	if (!userData) {
		ctx.body = {
			msg: '用户名不存在',
			isSuccess: false,
		}
		return
	}
	const isPwdValid = bcrypt.compareSync(password, userData.password)
	if (!isPwdValid) {
		return (ctx.body = {
			msg: '密码无效',
			isSuccess: false,
		})
	} else {
		const token = jwt.sign(
			{
				name: username,
				_id: userData._id,
			},
			config.SECRET,
			{ expiresIn: '60000' }
		)
		return (ctx.body = {
			data: {
				username: userData.username,
				_id: userData._id,
				token,
			},
			msg: '登陆成功',
			isSuccess: true,
		})
	}
}
module.exports = {
	register,
	login,
}
