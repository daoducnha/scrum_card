import React, { Component } from 'react';

import './App.css';
import Room from './components/Room';
import {
  Routes,
  Route,
} from 'react-router-dom';
import TopBar from './components/TopBar';
import RegisterRoomForm from './components/RegisterRoomForm';

const storyPoints = [1, 2, 3, 5, 8, 13];

class App extends Component {

  state = {
    roomId: 'room-1234567',
    user: {
      id: 1,
      name: 'Nha',
      isHost: true,
      pointSelected: 5,
    }
  }

  render() {
    return (
      <div className="App">
        <TopBar user={this.state.user} />
        <br />
        <Routes>
          <Route
            path='/'
            element={<RegisterRoomForm />}
          />

          <Route
            path='/room/:roomId'
            element={
              <Room
                roomId={this.state.roomId}
                storyPoints={storyPoints}
                user={this.state.user}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
