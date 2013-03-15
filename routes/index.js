
/*
 * routes/index.js
 * 
 * Routes contains the functions (callbacks) associated with request urls.
 */
var moment = require('moment');
moment().format();


var isThereFoodOnTheFloor = false;
var lastTimeFoodArrivedHolder;

exports.index = function(req, res) {
	
	console.log("main page requested");

    //var displayedTime = moment();
  	var computerTime = moment();

	console.log(computerTime._d);
	console.log(lastTimeFoodArrivedHolder);

	var a = moment(computerTime._d);
	var b = moment(lastTimeFoodArrivedHolder);

	console.log(a.diff(b,'seconds'));

	var differenceInMinutes = a.diff(b,'minutes');
	var differenceInSeconds = a.diff(b,'seconds');

	if (differenceInSeconds >= 30){
		isThereFoodOnTheFloor = false;
	} else {
		isThereFoodOnTheFloor = true;
	}

	//if the food arrived more than 10 minutes ago
	//istherefoodonthefloor = true;
	//else, no food. 


	var templateData = {
		food : isThereFoodOnTheFloor,
		time : computerTime,
	}

	res.render('index.html', templateData);
}

exports.getFood = function(req,res){
	console.log("someone's about to drop knowledge");

	var templateData = {
	}

	res.render('nowthereis.html', templateData);
}

// exports.updated = function(req,res) {
// 	var templateData = {
// 		updatedText : textHolder
// 	}
// 	res.render('updated.html', templateData); 
// }


exports.postFood = function(req,res) {
	console.log("someone rang the dinner bell")
	var lastTimeFoodArrived = moment();
	lastTimeFoodArrivedHolder = lastTimeFoodArrived;
	console.log("the time is " + lastTimeFoodArrived._d);


	res.redirect('/')
}



