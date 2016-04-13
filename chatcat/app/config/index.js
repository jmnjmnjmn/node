'use strict';
if(process.env.NODE_ENV === 'production'){
	//production
	module.exports = {
		host: process.env.host || "",
		dbURI: process.env.dbURI,
		sessionSecret: process.env.sessionSecret
	}
}else {
	//dev
	module.exports = require('./development.json');
}