const mongoose = require('../db')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const UserSchema = new Schema({
	username: {
		type: String,
	},
	password: {
		type: String,
		set(val) {
			return bcrypt.hashSync(val, 10)
		},
	},
})

module.exports = UserSchema
