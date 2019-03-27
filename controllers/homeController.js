// TODO: refactor?

exports.index = (req, res) => {
  if (req.url) {

  }
  
  var selections = [];
  
  res.render('index', {
    title: 'Printer Options',
    selections: selections
  });
};

// will handle option selection stuff