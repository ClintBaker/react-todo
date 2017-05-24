const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();
//App CSS
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
