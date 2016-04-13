'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

//Log an error
Mongoose.connection.on('error', error =>{
	console.log("MongoDB Error", error);
});

module.exports = {
	Mongoose
}