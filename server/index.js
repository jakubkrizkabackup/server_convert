'use strict';

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  // Register the Babel require hook
  require('babel-core/register');
}

// Export the application
exports = module.exports = require('./app');

var controller = require('./api/thing/thing.controller');
var http = require('http');

var url = "http://api.coindesk.com/v1/bpi/currentprice.json";

setInterval(function(){




    http.get(url, function(res){
        var body = '';

        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){
            var fbResponse = JSON.parse(body);
            controller.create({
                body: {
                    name: fbResponse.bpi.USD.rate_float,
                    info: fbResponse.bpi.USD.description
                }
            });

        });
    }).on('error', function(e){
        console.log("Got an error: ", e);
    });





    /*controller.create({
        body: {
            name: "sadad"
        }
    });*/


}, 60000);

