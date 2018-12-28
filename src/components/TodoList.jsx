import React, { Component } from "react";
import TodoItems from "./TodoItems";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });
    this.setState({ items: filteredItems });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4 body">
          <div className="todo mt-5">
            <form action="#" onSubmit={this.addItem}>
              <input
                ref={a => (this._inputElement = a)}
                type="text"
                placeholder="Enter task here"
              />
              <button type="submit" className="btn btn-sm ml-5">
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4 ">
          <h1>Welcome Moyin</h1>
          <p>
            Please add a add a todo list to our fast application built with the
            react technology
          </p>
        </div>
        <div className="col-md-4 grey">
          {" "}
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TodoList;
