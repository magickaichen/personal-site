import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import SiteHeader from './components/SiteHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <SiteHeader/>
        </Container>
      </div>
    );
  }
}

export default App;
