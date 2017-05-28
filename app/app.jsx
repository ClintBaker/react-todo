const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard son'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation
$(document).foundation();
//App CSS
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
