var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        // console.log(data);
        var output = {
            burger: data
        };
        // console.log(output);
        res.render("index", output);
    });
});

router.get("/api", function (req, res) {
    burger.selectAll(function (data) {
        res.json(data);
    });
});

router.post("/", function (req, res) {
    console.log(req.body.value);
    burger.insertOne(req.body.value, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var id = req.params.id;
    // console.log(id);
    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;