var React = require('react');

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e) {
    e.preventDefault();
    var todoText = this.refs.text.value;

    if (todoText.length > 1) {
      this.refs.text.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.text.focus();
    }
  }
  render() {
    return (
      <div className="small-3">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" placeholder="What do you need to do?" ref="text" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

module.exports = AddTodo;
