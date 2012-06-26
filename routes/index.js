
/*
 * GET home page.
 */
var Link = require('../models/Link.js');

exports.index = function(req, res){
	Link.find(function(error, links) {
	  res.render('index', { title: 'Express', links: links });
	});
};