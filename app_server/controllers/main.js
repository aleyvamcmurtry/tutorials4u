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