var express = require("express");
var router = express.Router();


router.get("/", function(req, res){
    res.render("home");
});

router.get("/profile", function(req, res){
    res.render("profile");
});

router.get("/profile/show", function(req, res){
    res.render("project")
});
module.exports = router;