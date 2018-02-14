// //Dependencies
// var path = require('path');

// //ROUTING

// module.exports = function(app){
//   //default GET route that leads to home.html - displays home page
//   app.get('/survey', function (req, res) {
//     res.sendFile(path.join(__dirname + '/../public/survey.html'));
//   });

//   //a USE route to home page
//   app.use(function (req, res) {
//     res.sendFile(path.join(__dirname + '/../public/home.html'));
//   });
// };








const express = require('express');	
const path = require("path");
	


	module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //a USE route to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};

// 	module.exports = app => {
	
// 	// default root to home.html
// 	app.get("/", function(req, res) {
// 	res.sendFile(path.join(__dirname, "/../public/home.html"))
// 	})
// 	app.get("/survey", function(req, res) {
// 	res.sendFile(path.join(__dirname, "/../public/survey.html"))
// 	})
	
// 	app.use((req, res) => { res.send('404') });
// };