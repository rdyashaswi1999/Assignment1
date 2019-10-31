/**
 * File Name:- project.js
 * Author's Name:- Yashaswi
 * Website Name:- Assignment1
 * Website Description:- .js file for project.pug which describes all information about the projects
 */

'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('projects');
});

module.exports = router;
