import React from "react";

class Search extends React.Component {
	
	changeInput = (event) => {
		const inputValue = event.target.value
		this.props.changeTerm(inputValue)
	}

  render() {
    return (
      <div className="search">
        <input
          onChange={this.changeInput}
					value={this.props.term}
          type="text"
          placeholder="введите фразу для поиска"
          className="form-control me-2"
        />
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary">
            Все
          </button>
          <button type="button" className="btn btn-light">
            Активные
          </button>
          <button type="button" className="btn btn-light">
            Выполненные
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
