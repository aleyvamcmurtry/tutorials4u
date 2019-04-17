var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlTutorial = require('../controllers/tutorials');

/*var ctrlHelp = require('../controllers/help'); */

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/tutorialshome', ctrlMain.tutorialshome);
router.get('/tutorials1', ctrlMain.tutorials1);
router.get('/tutorials1section1', ctrlMain.tutorials1section1);
router.get('/tutorials1section2', ctrlMain.tutorials1section2);
router.get('/tutorials1section3', ctrlMain.tutorials1section3);
router.get('/tutorials1section4', ctrlMain.tutorials1section4);

router.get('/tutorials2', ctrlMain.tutorials2);
router.get('/tutorials2section1', ctrlMain.tutorials2section1);
router.get('/tutorials2section2', ctrlMain.tutorials2section2);
router.get('/tutorials2section3', ctrlMain.tutorials2section3);
router.get('/tutorials2section4', ctrlMain.tutorials2section4);
router.get('/tutorials2section5', ctrlMain.tutorials2section5);
router.get('/tutorials2section6', ctrlMain.tutorials2section6);

router.get('/tutorials3', ctrlMain.tutorials3);
router.get('/tutorials3section1', ctrlMain.tutorials3section1);
router.get('/tutorials3section2', ctrlMain.tutorials3section2);
router.get('/tutorials3section3', ctrlMain.tutorials3section3);
router.get('/tutorials3section4', ctrlMain.tutorials3section4);
router.get('/tutorials3section5', ctrlMain.tutorials3section4);
router.get('/tutorials3section6', ctrlMain.tutorials3section4);
router.get('/tutorials3section7', ctrlMain.tutorials3section4);
router.get('/tutorials3section8', ctrlMain.tutorials3section4);

router.get('/tutorials4', ctrlMain.tutorials4);
router.get('/tutorials4section1', ctrlMain.tutorials4section1);
router.get('/tutorials4section2', ctrlMain.tutorials4section2);
router.get('/tutorials4section3', ctrlMain.tutorials4section3);
router.get('/tutorials4section4', ctrlMain.tutorials4section4);


router.get('/resources', ctrlMain.resources);
router.get('/about', ctrlMain.about);
router.get('/login', ctrlMain.login);
router.get('/signup', ctrlMain.signup);
router.get('/help', ctrlMain.help);
router.get('/help1', ctrlMain.help1);
router.get('/help2', ctrlMain.help2);
router.get('/help3', ctrlMain.help3);
router.get('/help4', ctrlMain.help4);
router.get('/help5', ctrlMain.help5);



/*For Inprogress pages*/
router.get('/comingsoon', ctrlMain.comingsoon);

/* Tutorials routes. */
router.get('/tutorials1', ctrlTutorial.tutorials1);
router.get('/tutorials1section1', ctrlTutorial.tutorials1section1);

module.exports = router;

