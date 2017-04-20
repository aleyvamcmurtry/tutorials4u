/* GET home page */
module.exports.index = function(req, res){
  res.render('index', { title: 'Tutorials4U' });
};

module.exports.tutorials = function(req, res){
  res.render('tutorials', { title: 'tutorials' });
};

module.exports.resources = function(req, res){
  res.render('resources', { title: 'resources' });
};

module.exports.about = function(req, res){
  res.render('about', { title: 'about' });
};