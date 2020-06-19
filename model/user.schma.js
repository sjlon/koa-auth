const mongoose = require('../db')
const Schema = mongoose.Schema
const UserSchema = new Schema({
	username: {
		type: String,
	},
	password: {
		type: String,
	},
})

const User = mongoose.model('User', UserSchema)

module.exports = User
