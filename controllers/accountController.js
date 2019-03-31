exports.index = (req, res) => {
  if (req.method === 'GET') {
    res.render('login', {
      title: 'Login'
    });
  } else if (req.method === 'POST') {
    req.session.user = {
      email: 'test',
      password: 'test'
    };

    res.redirect('/');
  }
};

exports.logout = (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    res.redirect('/account/login');
  }
};

exports.reservations = (req, res) => {
  res.render('reservations', {
    title: 'Reservations'
  });
};
