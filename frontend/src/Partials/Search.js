import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
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
    );
  }
}
