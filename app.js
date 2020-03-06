//Require Statments
var express = require("express");
var indexRoutes = require("./routes/index");

//Setup application
var app = express();
app.set("view engine", "ejs");
app.use(indexRoutes);


//Listener
app.listen(4000, function(){
    console.log("Bug Tracker server is running");
});