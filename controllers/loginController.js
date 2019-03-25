exports.index = (req, res) => {
  // TODO: API
  var email = '';
  var emailError = '';
  var passwordError = '';

  if (req.method === 'POST') {
    email = req.body.email;

    req.check('email', 'Invalid email address.').isEmail();
    req.check('password', 'Password is invalid.').isLength({
      min: 4
    });

    var errors = req.validationErrors();
    if (errors) {
      for (let i = 0; i < errors.length; i++) {
        let error = errors[i];

        if (error.param === 'email') {
          emailError = error.msg;
        }
        if (error.param === 'password') {
          passwordError = error.msg;
        }
      }
    } else {
      res.redirect('/');
      return;
    }
  }

  res.render('login', {
    title: 'Login',
    email: email,
    emailError: emailError,
    passwordError: passwordError
  });
};
