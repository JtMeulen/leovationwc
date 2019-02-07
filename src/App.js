import React, { Component } from 'react';

import Overlay from './components/Overlay/Overlay';
import Header from './components/Header/Header';
import './App.css';

import openSocket from 'socket.io-client';

let socket;
try {
  socket = openSocket('http://localhost:8000');
} catch (err) {
  console.warn('Could not communicate with server! ', err);
}

function hi(cb) {
  cb = (err, response) => {
    if (err) {
      console.log('Error contacting server: ', err);
      return;
    }
    console.log('Server responded with: ', response);
  }
  socket.on('hi back', (response) => cb(null, response));
  socket.emit('hi');
}

function getCurrentState(cb) {
  socket.on('currentState', (response) => cb(null, response));
  socket.emit('getCurrentState');
}

function subscribeToChanges(cb) {
  socket.on('newState', (response) => cb(null, response));
  socket.emit('subscribeToChanges');
}
// export { subscribeToTimer };

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toiletState: {}
    }
    hi();
    getCurrentState((err, res) => this.handleResponse(err, res));
    subscribeToChanges((err, res) => this.handleResponse(err, res));
  }

  handleResponse(err, response) {
    if (err) {
      console.warn('Could not communicate with server! ', err);
      return;
    }
    this.setState({
      toiletState: response
    });
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    console.log('toilet state is: ', this.state.toiletState);
    return (
      <div className="App">
        <Overlay state={this.state.toiletState}/>
        <Header />
      </div>
    );
  }
}

export default App;
