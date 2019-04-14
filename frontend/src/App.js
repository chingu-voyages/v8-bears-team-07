import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              WIIYF
            </a>
          </nav>
          <div className="searchForm">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Type ingredients"
            />
            <button type="button" class="btn btn-secondary">
              Search
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
