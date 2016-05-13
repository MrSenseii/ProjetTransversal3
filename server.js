/**
 * Created by Erwana on 13/05/2016.
 */
var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app).listen(8080);

app.use(express.static("static"));

app.get("/",function(req, res){
    res.sendfile(__dirname+"index.html");
});

var host = "messagesight.demos.ibm.com";
var port = 1883;

var mqtt    = require('mqtt');
var client  = mqtt.connect({host: host,port: port});

//------------ CODE MQTT----------------//


client.on('connect', function () {
    client.subscribe('ingesupb2/michel');
    client.publish('ingesupb2/michel', 'Bonsoir, C\'est Michel');
});

client.on('message', function (topic, message) {
    var date = new Date();

    var second = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    console.log( hour +":"+minutes +":"+ second +" : "+message);
});