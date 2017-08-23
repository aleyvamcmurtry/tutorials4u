var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlTutorial = require('../controllers/tutorials');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/tutorialshome', ctrlMain.tutorialshome);
router.get('/tutorials1', ctrlMain.tutorials1);
router.get('/tutorials1section1', ctrlMain.tutorials1section1);
router.get('/tutorials2', ctrlMain.tutorials2);
router.get('/resources', ctrlMain.resources);
router.get('/about', ctrlMain.about);
router.get('/login', ctrlMain.login);
router.get('/signup', ctrlMain.signup);

/* Tutorials routes. */
router.get('/tutorials1', ctrlTutorial.tutorials1);
router.get('/tutorials1section1', ctrlTutorial.tutorials1section1);

module.exports = router;

