var express = require('express');

var app = express();

var getRandom = function(min, max)
{
	return Math.floor(Math.random() * (max - min) + min);
}

var randomNumber = getRandom(1, 100001);

app.set('port', 3000);

app.use('/',function(req,res){
  res.type('text/plain');
  res.send("Enjoy this random number: " + randomNumber.toString());
});


app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
