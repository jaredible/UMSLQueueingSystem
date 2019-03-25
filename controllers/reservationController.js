const Reservation = require('../models/reservation');

exports.index = (req, res) => {
  // TODO: ensure type exists and use specific types
  var params = req.params;
  if (params.type !== '') {
    var type = params.type.toLowerCase();

    if (req.method === 'POST') {
      res.redirect('/');
    } else {
      switch (type) {
        case '2d':
          res.render('selection', {
            title: '2D Print Type Selection',
            selections: [{
                key: 'inkjet',
                value: 'Inkjet'
              },
              {
                key: 'laser',
                value: 'Laser'
              },
              {
                key: 'large',
                value: 'Large'
              }
            ]
          });
          break;
        case '3d':
        case 'photolab':
        case 'inkjet':
        case 'laser':
        case 'large':
          res.render('reserve', {
            title: 'Reserve',
            type: req.params.type
          });
          break;
        default:
          res.redirect('/');
          break;
      }
    }
  } else {
    res.redirect('/');
  }
};
