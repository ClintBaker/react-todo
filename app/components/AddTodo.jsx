var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.text.value;

    if (todoText.length > 1) {
      this.refs.text.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.text.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" placeholder="What do you need to do?" ref="text" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddTodo);
