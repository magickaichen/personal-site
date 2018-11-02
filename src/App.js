import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import RouteConfig from "./configs/RouterConfig";
import SiteHeader from "./components/SiteHeader";
import MultiLevelRoute from "./components/MultiLevelRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Router>
            <React.Fragment>
              <SiteHeader />
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/home/bio" />} />
                <Route exact path="/home" render={() => <Redirect to="/home/bio" />} />
                {/*Route paths*/}
                {RouteConfig.map((route, i) =>(
                  <MultiLevelRoute key={i} {...route} />
                ))}
              </Switch>
            </React.Fragment>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
