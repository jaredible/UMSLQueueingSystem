exports.index = (req, res) => {
  res.render('selection', {
    title: 'Home',
    selections: [{
        key: '2d',
        value: '2D'
      },
      {
        key: '3d',
        value: '3D'
      },
      {
        key: 'photolab',
        value: 'Photo Lab'
      }
    ]
  });
};
