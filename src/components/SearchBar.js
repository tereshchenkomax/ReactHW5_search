import React, { Component } from "react";

class SearchBAr extends Component {
  state = {
    value: ""
  };
  changeHandler = ({ target }) => {
    this.setState({
      value: target.value
    });
    this.props.search(target);
  };
  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default SearchBAr;
