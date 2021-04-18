import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import Article from "./components/Article";
import LoginPage from "./components/LoginPage";
import RegisterationPage from "./components/RegisterationPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import "./css/Init.css";

function App() {
	const [ token, setToken] = useState({});
	const tokenObtain = ( tokens, id )=>{
		setToken({ token : tokens,
			id:id 
		});
	}
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/users">
            <NavBar />
            <SideBar />
            <UserPage token = {token}/>
          </Route>
          <Route path="/" exact>
            <NavBar />
            <SideBar />
            <HomePage token= {token}/>
          </Route>
          <Route exact path="/login">
            <LoginPage tokenObtain = {tokenObtain}/>
          </Route>
          <Route exact path="/register">
            <RegisterationPage />
          </Route>
          <Route exact path="/:id">
            <NavBar />
            <SideBar />
            <Article token = {token}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
