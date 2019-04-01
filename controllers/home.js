exports.index = (req, res) => {
  if (!(req.session.user && req.cookies.user_sid)) {
    res.redirect('/account/login');
    return;
  }

  res.render('index', {
    title: 'Home',
    options: [
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      {
        title: 'Card title',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }
    ]
  });
};
