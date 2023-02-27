import React, { Component } from "react";
import { MdSearch } from "react-icons/md";

class Search extends Component {
  render() {
    const { handleSearchNote } = this.props;

    return (
      <div className="search">
        <MdSearch className="search-icon" size="1.3em" />
        <input
          onChange={(event) => handleSearchNote(event.target.value)}
          type="text"
          placeholder="type to search..."
        />
      </div>
    );
  }
}

export default Search;

