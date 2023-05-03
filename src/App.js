import React, { Component } from "react";
import "./App.css";
import Lyrics from "./components/Lyrics";
import FrontPage from "./components/FrontPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "front",
    };
  }

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <button onClick={() => this.handlePageChange("front")}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => this.handlePageChange("lyrics")}>
                Lyrics
              </button>
            </li>
          </ul>
        </nav>

        {currentPage === "front" && <FrontPage />}
        {currentPage === "lyrics" && <Lyrics />}
      </div>
    );
  }
}

export default App;
