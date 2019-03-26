// TODO: refactor?

exports.printTypesAll = (req, res) => {
  res.render('options', {
    title: 'Printer Options',
    options: [{
        link: '/2d',
        text: '2D'
      },
      {
        link: '/reserve/3d',
        text: '3D'
      },
      {
        link: '/reserve/photolab',
        text: 'Photo Lab'
      }
    ]
  });
};

exports.printTypes2D = (req, res) => {
  res.render('options', {
    title: 'Print Options',
    options: [{
        link: '/reserve/inkjet',
        text: 'Inkjet'
      },
      {
        link: '/reserve/large',
        text: 'Large'
      },
      {
        link: '/reserve/laser',
        text: 'Laser'
      }
    ]
  });
};
