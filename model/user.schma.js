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

module.exports = UserSchema
