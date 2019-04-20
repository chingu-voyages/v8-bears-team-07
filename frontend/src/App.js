import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./Partials/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
            </Switch>
          </main>
          <footer> &copy; 2018 Chingu Project.</footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
