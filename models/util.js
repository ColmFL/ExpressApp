var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://mongodb4970lc:py2vyr@danu7.it.nuigalway.ie:8717/mongodb4970',
{ useNewUrlParser: true,  useUnifiedTopology: true });

exports.connection = connection;
