import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/Saved">
            <Saved />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;