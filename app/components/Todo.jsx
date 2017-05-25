var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {text, completed, id} = this.props;
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed} />
        {text}
      </div>
    );
  }
});

module.exports = Todo;
