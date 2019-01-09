import React, { Component } from "react";
import PropTypes from "prop-types";

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

SearchBAr.propTypes = {
  searchTerm: PropTypes.string
};

export default SearchBAr;
