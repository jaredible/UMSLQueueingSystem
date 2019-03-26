const Reservation = require('../models/reservation');

exports.index = (req, res) => {
  // TODO: ensure type exists and use specific types
  var params = req.params;
  if (params.type !== '') {
    var type = params.type.toLowerCase();

    if (req.method === 'POST') {
      res.redirect('/reserve/' + type + '/confirmation');
    } else {
      switch (type) {
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


// will handle data saving stuff and confirmation stuffs