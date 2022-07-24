import React from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import Jobs from "./pages/Jobs/Jobs";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <h1>Welcome to my website!</h1>
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
