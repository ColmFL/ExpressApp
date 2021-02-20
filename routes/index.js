var express = require('express');
var router = express.Router();
var Comment = require('../models/comments');
var add = require('./add');
var multiply = require('./multiply');
var vehicles = require('./vehicles');
var validator = require('validator');

/* GET feed page. */
router.get('/feed', function(req, res, next) {
res.render('feed');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Get about page. */
router.get('/about', function(req, res, next) {
res.render('aboutUs', { message: 'Welcome to my about page' });
});

/* GET sum of two numbers */
router.get('/add', function (req, res, next){
var sum = add(2, 2);
console.log(sum);
res.status(200).send('The sum of the numbers is '+
sum);
});

/* GET product of two numbers */
router.get('/multiply', function (req, res, next){
var product = multiply(parseInt(req.query.num1), parseInt(req.query.num2));
console.log(req);
res.status(200).send('You have multiplied two numbers!' + product);
});

/**
* Adds comments to our database
*/
router.post('/addComment', function(req, res, next) {
// Extract the request body which contains the comments
comment = new Comment(req.body);
comment.save(function (err, savedComment) {
if (err)
throw err;
res.json({
"id": savedComment._id
});
});
});
module.exports = router;

/**
* Retrieves comments from the database
*/
router.get('/getComments', function(req, res, next){
Comment.find({}, function (err,
comments) {
if (err)
res.send(err);
res.json(comments);
});
});

/*Update comment by id*/
router.put('/updateComments',  function(req, res, next) {
 var id = req.body.id;
 
 if(req.body.comment)
	{		
	if(validator.isAlphanumeric(req.body.comment)) //=> true
		{
			Comment.update({_id:id},{$set:{comment : req.body["comment"]}}, function(err, comments){
		
		if(err)
			res.send(err);
		
		res.json({"status" : "Comment updated"});
			});
		}		
		else
		{
			res.json({"Error" : "This is not a valid entry, please try again."});
		}
		}
	else
	{
		res.json({"Error" : "An error has occurred"});
	}
	
});

/*
Deletes a comment from the database
*/
router.delete('/removeComment/:id', function(req, res, next){
var id = req.params.id;
Comment.remove({_id:id}, function (err, comment) {
if (err)
res.send(err);
res.json(comment);
});
});


//GET vehicles
/*
router.get('/vehicles', function(req, res, next) {
	var marysVehicles = [{make:"Ford", model: "Focus", year: 2019}, {make: "Fiat", model: "Stilo", year: 2007}];
	if(req.query.name == 'Mary') {
		res.json({"response": "Hello Mary!"});
	}
	else if (req.query.name == 'John') {
		res.json({"response": "Hello John!"});
	}
});
*/

/*Post signup
validator.isEmail('foo@bar.com'); //=> true
*/

module.exports = router;