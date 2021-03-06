import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";
class App extends React.Component {
  
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }


  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Erro: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div><SeasonDisplay lat={this.state.lat}/></div>;
    }

    return <Loading text={"Please accept location!"}/>;
  }

  render() {
    return(
    <div className="border red">
      {this.renderContent()}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
