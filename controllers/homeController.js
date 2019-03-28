exports.index = (req, res) => {
  if (req.method === 'POST') {
    res.redirect('/confirmation');
  }

  res.render('index', {
    title: 'Reserve'
  });
};

exports.confirmation = (req, res) => {
  res.render('confirmation', {
    title: 'Confirmation'
  });
};
