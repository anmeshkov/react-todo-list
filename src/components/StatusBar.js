import {Component} from "react";

class StatusBar extends Component {
  onButoonClick = (event) => {
    const status = event.target.value;
    this.props.changeStatus(status);
  };

  render() {
    // массив кнопок
    const buttons = [
      { status: "all", name: "Все" },
      { status: "active", name: "Активные" },
      { status: "done", name: "Выполненные" },
    ];

    // формируем массив с кнопками
    const renderButtons = buttons.map((btn) => {
      const classNames =
        this.props.status === btn.status ? "btn btn-primary" : "btn btn-light";
      return (
        <button
          onClick={this.onButoonClick}
          type="button"
          className={classNames}
          value={btn.status}
          key={btn.status}
        >
          {btn.name}
        </button>
      );
    });

    return (
      <div className="btn-group" role="group">
        {renderButtons}
      </div>
    );
  }
}

export default StatusBar;
