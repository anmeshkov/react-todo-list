import {Component} from "react";

class Footer extends Component {
  state = {
    taskTitle: "",
  };

  onInputChange = (event) => {
    this.setState((state) => {
      return {
        taskTitle: event.target.value,
      };
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const title = this.state.taskTitle.trim();

    // проверяем, что введено не пустое значение и добавляем таску
    if (title !== "") {
      this.props.addItem(title);
    }

    // очищаем поле ввода
    this.setState((state) => {
      return {
        taskTitle: "",
      };
    });

  };

  render() {
    return (
      <footer>
        <form onSubmit={this.onFormSubmit} className="footer">
          <input
            onChange={this.onInputChange}
            value={this.state.taskTitle}
            type="text"
            placeholder="Что необходимо сделать"
            className="form-control me-2"
          />
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </form>
      </footer>
    );
  }
}

export default Footer;
