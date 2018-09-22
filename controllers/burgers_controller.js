var express = require('express');

var router = express.Router();

var burger = express = require ("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log (hbsObject)
        res.render("index",hbsObject);

    });
});

router.post("/", function(req,res) {
    burger.create("burger_name",req.body.new_burger,function() {
        res.redirect("/");
    });

});

router.put("/:id", function(req,res) {
    var condition = req.params.id; 

    console.log ("condition",condition);

    burger.update(1,condition, function() {
        res.redirect("/");
    });


});
module.exports = router;