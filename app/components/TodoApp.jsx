var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Get crazy',
          completed: false
        }, {
          id: uuid(),
          text: 'Get money',
          completed: false
        }, {
          id: uuid(),
          text: 'Get Vans socks',
          completed: true
        }, {
          id: uuid(),
          text: 'Practice React',
          completed: true
        }
      ]
    };
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  handleToggle(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  }

  render() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
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
