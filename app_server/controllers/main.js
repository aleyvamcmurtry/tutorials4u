/* GET home page */
exports.index = function(req, res){
  res.render('index', { title: 'Tutorials4U' });
};

exports.tutorialshome = function(req, res){
  res.render('tutorialshome', { title: 'tutorials' });
};

exports.tutorials1 = function(req, res){
  res.render('tutorials1', { title: 'First Tutorial' });
};

exports.tutorials2 = function(req, res){
  res.render('tutorials2', { title: 'Second Tutorial' });
};

exports.tutorials1section1 = function(req, res){
  res.render('tutorials1section1', { title: 'tutorials' });
};


exports.resources = function(req, res){
  res.render('resources', { title: 'resources' });
};

exports.about = function(req, res){
  res.render('about', { title: 'about' });
};

exports.login = function(req, res){
  res.render('login', { title: 'login' });
};

exports.signup = function(req, res){
  res.render('signup', { title: 'signup' });
};

/*In progress*/
exports.comingsoon = function(req, res){
  res.render('comingsoon', { title: 'Coming Soon' });
};