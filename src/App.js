import React, { Component } from 'react';

import Overlay from './components/Overlay/Overlay';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Overlay />
        <Header />
      </div>
    );
  }
}

export default App;
