var React = require('react');
var TodoList = require('TodoList');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Get crazy'
        }, {
          id: 2,
          text: 'Get money'
        }, {
          id: 3,
          text: 'Get Vans socks'
        }, {
          id: 4,
          text: 'Practice React'
        }
      ]
    };
  }
  render() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
};

// var TodoApp = React.createClass({
//   getInitialState: function () {
//     return {
//       todos: [
//         {
//           id: 1,
//           text: 'Get money'
//         }, {
//           id: 2,
//           text: 'Get Vans socks'
//         }
//       ]
//     };
//   },
//   render: function () {
//     var {todos} = this.state;
//
//     return (
//       <div>
//         <TodoList todos={todos}/>
//       </div>
//     );
//   }
// });

module.exports = TodoApp;
