const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//Load foundation
$(document).foundation();
//App CSS
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
