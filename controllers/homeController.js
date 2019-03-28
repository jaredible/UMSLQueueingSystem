exports.index = (req, res) => {
  res.render('index', {
    title: 'Reserve',
    type: req.params.type
  });
};
