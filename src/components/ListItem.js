/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";

class ListItem extends React.Component {
  state = {
    important: false,
    done: false,
  };

  onImportantClick = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  };

  onDoneClick = () => {
    this.setState((state) => {
      return {
        important: false,
        done: !state.done,
      };
    });
  };

  render() {
    let classNames = "todo-item";

    if (this.state.important) {
      classNames += " important";
    }

    if (this.state.done) {
      classNames += " done";
    }

    return (
      <li className={classNames}>
        <span onClick={this.onDoneClick} className="todo-item-text">
          {this.props.task.title}
        </span>
        <div className="btn-group">
          <button
            onClick={this.onImportantClick}
            role="button"
            className="btn btn-outline-dark btn-sm"
          >
            Важное
          </button>
          <button role="button" className="btn btn-outline-danger btn-sm">
            Удалить
          </button>
        </div>
      </li>
    );
  }
}

export default ListItem;
