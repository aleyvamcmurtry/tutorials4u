var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlTutorial = require('../controllers/tutorials');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/tutorialshome', ctrlMain.tutorialshome);
router.get('/tutorials1', ctrlMain.tutorials1);
router.get('/tutorials1section1', ctrlMain.tutorials1section1);
router.get('/tutorials1section2', ctrlMain.tutorials1section2);
router.get('/tutorials1section3', ctrlMain.tutorials1section3);
router.get('/tutorials1section4', ctrlMain.tutorials1section4);
router.get('/tutorials2', ctrlMain.tutorials2);
router.get('/tutorials3', ctrlMain.tutorials3);
router.get('/resources', ctrlMain.resources);
router.get('/help', ctrlMain.help);
router.get('/about', ctrlMain.about);
router.get('/login', ctrlMain.login);
router.get('/signup', ctrlMain.signup);

/*For Inprogress pages*/
router.get('/comingsoon', ctrlMain.comingsoon);

/* Tutorials routes. */
router.get('/tutorials1', ctrlTutorial.tutorials1);
router.get('/tutorials1section1', ctrlTutorial.tutorials1section1);

module.exports = router;

