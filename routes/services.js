/**
 * File Name:- services.js
 * Author's Name:- Yashaswi
 * Website Name:- Assignment1
 * Website Description:- .js file for services.pug which states the info about all the services provided
 */

'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('services');
});

module.exports = router;
