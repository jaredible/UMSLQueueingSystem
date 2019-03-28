exports.index = (req, res) => {
  var confirmed = false;

  if (req.method === 'POST') {
    confirmed = true;
  }

  res.render('index', {
    title: 'Title',
    confirmed: confirmed
  });
};
