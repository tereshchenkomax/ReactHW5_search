import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import SearchBar from "./components/SearchBar";
import Frameworks from "./components/Frameworks";

import "./styles.css";

const list = [
  {
    name: "React",
    link: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    name: "Angular",
    link: "https://angularjs.org/img/AngularJS-large.png"
  },
  {
    name: "Vue",
    link: "https://vuejs.org/images/logo.png"
  },
  {
    name: "Ember",
    link: "https://upload.wikimedia.org/wikipedia/commons/2/27/Ember-logo.png"
  }
];

class App extends Component {
  state = {
    searchTerm: ""
  };
  search = ({ value }) => {
    this.setState({ searchTerm: value });
  };
  render() {
    return (
      <div className="container">
        <SearchBar search={this.search} />
        <ul className="list-group">
          {list
            .filter(item =>
              item.name
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
            )
            .map(fr => (
              <Frameworks key={fr.name}>
                <h1>{fr.name}</h1>
                <div className="img-box">
                  <img src={fr.link} alt={fr.name} />
                </div>
              </Frameworks>
            ))}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  searchTerm: PropTypes.string
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
