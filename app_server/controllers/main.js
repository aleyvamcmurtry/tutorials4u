/* GET home page */
exports.index = function(req, res){
  res.render('index', { title: 'Tutorials4U' });
};

exports.tutorials = function(req, res){
  res.render('tutorials', { title: 'tutorials' });
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