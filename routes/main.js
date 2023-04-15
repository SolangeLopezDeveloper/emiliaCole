const express = require('express');
const { isAbsolute } = require('path/win32');
const router = express.Router();


const {home,about,contact,music} = require('../controllers/mainController')


/* GET home page. */
router
.get('/', home)
.get('/about', about)
.get('/contact', contact)
.get('/music', music)

module.exports = router;