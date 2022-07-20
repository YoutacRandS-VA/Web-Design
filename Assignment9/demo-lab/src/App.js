import React from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Jobs from "./pages/Jobs";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <h1>First React Lab</h1>
            <ul className="header">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs">About US</NavLink>
              </li>
              <li>
                <NavLink to="/Jobs">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/contactUs">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/contactUs" component={ContactUs} />
              <Route path="/jobs" component={Jobs} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
