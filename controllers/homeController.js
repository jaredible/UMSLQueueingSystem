exports.index = (req, res) => {
  res.render('index', {
    title: 'Title',
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
      }
    ]
  });
};
