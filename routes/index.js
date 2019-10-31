/**
 * File Name:- index.js
 * Author's Name:- Yashaswi
 * Website Name:- Assignment1
 * Website Description:- .js file for index.pug
 */

'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;
