import React from "react";

class Footer extends React.Component {

	state = {
		taskTitle: ''
	}

	onInputChange = (event) => {
		this.setState((state) => {
			return {
				taskTitle: event.target.value
			}
		})
	}

	onFormSubmit = (event) => {
		event.preventDefault()
		this.props.addItem(this.state.taskTitle)
	}

  render() {
    return (
      <footer>
        <form onSubmit={this.onFormSubmit} className="footer">
          <input onChange={this.onInputChange}
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