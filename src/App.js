import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import Article from "./components/Article";
import LoginPage from "./components/LoginPage";
import RegisterationPage from "./components/RegisterationPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./css/Init.css";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/users">
            <NavBar />
            <SideBar />
            <UserPage />
          </Route>
          <Route path="/" exact>
            <NavBar />
            <SideBar />
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterationPage />
          </Route>
          <Route exact path="/:id">
            <NavBar />
            <SideBar />
            <Article />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
