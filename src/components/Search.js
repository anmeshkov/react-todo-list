import React from "react";

class Search extends React.Component {
  changeInput = (event) => {
    const inputValue = event.target.value;
    this.props.changeTerm(inputValue);
  };

  render() {
    return (
        <input
          onChange={this.changeInput}
          value={this.props.term}
          type="text"
          placeholder="введите фразу для поиска"
          className="form-control me-2"
        />
    );
  }
}

export default Search;
