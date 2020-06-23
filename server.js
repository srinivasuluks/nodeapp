'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', function (req, res) {
  var i = 0,
    max = 5;

  //set the appropriate HTTP header
  res.setHeader('Content-Type', 'text/html');

  //send multiple responses to the client
  for (; i <= max; i++) 
  {
	  if (i<1)
	  {
	    res.send('Hello, Welcome to first Srini Jenkinds Docker Apps ! ');
	  }
	  else
	  {
		res.send('<h1>This is the response Loop Iteration#: ' + i + '</h1>');
	  }
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
