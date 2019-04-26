/* GET home page */
exports.index = function(req, res){
  res.render('index', { title: 'Tutorials4U' });
};

exports.tutorialshome = function(req, res){
  res.render('tutorialshome', { title: 'tutorials' });
};

/* Tutorials 1-4 */
exports.tutorials1 = function(req, res){
  res.render('tutorials1', { title: 'First Tutorial' });
};

exports.tutorials2 = function(req, res){
  res.render('tutorials2', { title: 'Second Tutorial' });
};

exports.tutorials3 = function(req, res){
  res.render('tutorials3', { title: 'Third Tutorial' });
};

exports.tutorials4 = function(req, res){
  res.render('tutorials4', { title: 'Fourth Tutorial' });
};

/* Tutorial 1 Section 1-4 */
exports.tutorials1section1 = function(req, res){
  res.render('tutorials1section1', { title: 'Tutorial 1-1' });
};

exports.tutorials1section2 = function(req, res){
  res.render('tutorials1section2', { title: 'Tutorial 1-2' });
};

exports.tutorials1section3 = function(req, res){
  res.render('tutorials1section3', { title: 'Tutorial 1-3' });
};

exports.tutorials1section4 = function(req, res){
  res.render('tutorials1section4', { title: 'Tutorial 1-4' });
};



/* Tutorial 2 Section 1-6 */
exports.tutorials2section1 = function(req, res){
  res.render('tutorials2section1', { title: 'Tutorial 2-1' });
};

exports.tutorials2section2 = function(req, res){
  res.render('tutorials2section2', { title: 'Tutorial 2-2' });
};

exports.tutorials2section3 = function(req, res){
  res.render('tutorials2section3', { title: 'Tutorial 2-3' });
};

exports.tutorials2section4 = function(req, res){
  res.render('tutorials2section4', { title: 'Tutorial 2-4' });
};

exports.tutorials2section5 = function(req, res){
  res.render('tutorials2section5', { title: 'Tutorial 2-4' });
};

exports.tutorials2section6 = function(req, res){
  res.render('tutorials2section6', { title: 'Tutorial 2-4' });
};



/* Tutorial 3 Section 1-4 */
exports.tutorials3section1 = function(req, res){
  res.render('tutorials3section1', { title: 'Tutorial 3-1' });
};

exports.tutorials3section2 = function(req, res){
  res.render('tutorials3section2', { title: 'Tutorial 3-2' });
};

exports.tutorials3section3 = function(req, res){
  res.render('tutorials3section3', { title: 'Tutorial 3-3' });
};

exports.tutorials3section4 = function(req, res){
  res.render('tutorials3section4', { title: 'Tutorial 3-4' });
};

exports.tutorials3section5 = function(req, res){
  res.render('tutorials3section5', { title: 'Tutorial 3-5' });
};

exports.tutorials3section6 = function(req, res){
  res.render('tutorials3section6', { title: 'Tutorial 3-6' });
};

exports.tutorials3section7 = function(req, res){
  res.render('tutorials3section7', { title: 'Tutorial 3-7' });
};

exports.tutorials3section8 = function(req, res){
  res.render('tutorials3section8', { title: 'Tutorial 3-8' });
};


/* Tutorial 4 Section 1-4 */
exports.tutorials4section1 = function(req, res){
  res.render('tutorials4section1', { title: 'Tutorial 4-1' });
};

exports.tutorials4section2 = function(req, res){
  res.render('tutorials4section2', { title: 'Tutorial 4-2' });
};

exports.tutorials4section3 = function(req, res){
  res.render('tutorials4section3', { title: 'Tutorial 4-3' });
};

exports.tutorials4section4 = function(req, res){
  res.render('tutorials4section4', { title: 'Tutorial 4-4' });
};

/* Other pages */

exports.resources = function(req, res){
  res.render('resources', { title: 'resources' });
};

exports.about = function(req, res){
  res.render('about', { title: 'about' });
};


/*Help Pages*/
exports.help = function(req, res){
  res.render('help', { title: 'tutorials' });
}; 

exports.help1 = function(req, res){
  res.render('help1', { title: 'tutorials' });
};

exports.help2 = function(req, res){
  res.render('help2', { title: 'tutorials' });
};

exports.help3 = function(req, res){
  res.render('help3', { title: 'tutorials' });
};

exports.help4 = function(req, res){
  res.render('help4', { title: 'tutorials' });
};

exports.help5 = function(req, res){
  res.render('help5', { title: 'tutorials' });
};


/*In progress*/
exports.comingsoon = function(req, res){
  res.render('comingsoon', { title: 'Coming Soon' });
};


/*Not using at moment HIATUS */

exports.login = function(req, res){
  res.render('login', { title: 'login' });
};

exports.signup = function(req, res){
  res.render('signup', { title: 'signup' });
};