import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";
import ErrorBoundry from "../Components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      humans: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ humans: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { humans, searchfield } = this.state;
    const filteredHumans = humans.filter((human) => {
      return human.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !humans.length ? (
      <h1>Loading..</h1>
    ) : (
      <div className="tc">
        <h1>HoomanFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList humans={filteredHumans} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
