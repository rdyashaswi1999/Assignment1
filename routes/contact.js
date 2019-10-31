/**
 * File Name:- contact.js
 * Author's Name:- Yashaswi
 * Website Name:- Assignment1
 * Website Description:- .js file for contact.pug which provides the contact information.
 */

'use strict';
var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('contact');
});

module.exports = router;
