import React, { Component } from 'react';

import Overlay from './components/Overlay/Overlay';
import Header from './components/Header/Header';
import Meetingrooms from './Meetingrooms.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Overlay />
        <Header />
        <img className="mapImage" src={Meetingrooms} />
      </div>
    );
  }
}

export default App;
