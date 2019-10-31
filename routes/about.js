/**
 * File Name:- about.js
 * Author's Name:- Yashaswi
 * Website Name:- Assignment1
 * Website Description:- .js file for about.pug which describes about me.
 */
 'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('about');
});

module.exports = router;
