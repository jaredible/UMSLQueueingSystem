const pageConfig = require('../config/ui/pages');
const selectionsConfig = require('../config/ui/selections');

exports.index = (req, res) => {
  // TODO: Should be checking values exist before passing them into view.
  res.render('index', {
    title: pageConfig[req.url].title,
    selections: selectionsConfig[req.url.toLowerCase()]
  });
};

exports.getRoutes = () => {
  return Object.keys(selectionsConfig);
};
