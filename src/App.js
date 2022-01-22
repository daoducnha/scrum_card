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
    roomId: '',
    user: {
      id: '',
      name: '',
      isHost: false,
      pointSelected: 0,
    }
  }

  onCreateRoom = ( member, roomId ) => {
    const user = Object.assign({}, member);
    this.setState({
      user: user, 
      roomId: roomId
    })
  }

  onJoinRoom = (member, roomId ) => {
    const user = Object.assign({}, member);
    this.setState({
      user: user, 
      roomId: roomId
    })
  }

  render() {
    return (
      <div className="App">
        <TopBar user={this.state.user} />
        <br />
        <Routes>
          <Route
            path='/'
            element={
              <RegisterRoomForm
                onCreateRoom={this.onCreateRoom}
                onJoinRoom={this.onJoinRoom}
              />
            }
          />

          <Route
            path={`/room/${this.state.roomId}`}
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
