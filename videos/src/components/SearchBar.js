import React from "react";

class SearchBar extends React.Component {
  state = { textSearch: "" };

  onInputChange = event => {
    this.setState({ textSearch: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    //TODO: Make sure we call callback from parent component
    this.props.onFormSubmit(this.state.textSearch)   

  };

  render() {
    return (
      <div className="serach-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.textSearch}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
