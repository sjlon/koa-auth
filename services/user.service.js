const UserSchema = require('../model/user.schma')
const mongoose = require('../db')
const User = mongoose.model('User', UserSchema)
