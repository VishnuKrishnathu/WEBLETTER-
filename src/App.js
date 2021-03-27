import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import Article from "./components/Article";
import "./css/Init.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <SideBar />
        <Switch>
          <Route path="/users">
            <UserPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
        <Route exact path="/:id" component={Article} />
      </div>
    </Router>
  );
}

export default App;
