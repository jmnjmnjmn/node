'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

//Log an error
Mongoose.connection.on('error', error =>{
	console.log("MongoDB Error", error);
});

// Create a Schema that defines the user data
const chatUser = new Mongoose.Schema({
	profileId: String,
	fullName: String,
	profilePic: String
});

//Turn the schema into a usable model
let userModel = Mongoose.model('chatUser', chatUser);

module.exports = {
	Mongoose,
	userModel
}