var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/tutorials', ctrlMain.tutorials);
router.get('/resources', ctrlMain.resources);
router.get('/about', ctrlMain.about);


module.exports = router;

