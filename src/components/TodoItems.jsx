import React, { Component } from "react";
class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  createTasks(item) {
    return (
      <div className="row">
        <div className="col-md-9">
          <li key={item.key} className="listItem ">
            {item.text}{" "}
          </li>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-sm btn-danger "
            onClick={() => this.delete(item.key)}
          >
            X
          </button>
        </div>
      </div>
    );
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return <ul className="listItems list-unstyled">{listItems}</ul>;
  }
}

export default TodoItems;
