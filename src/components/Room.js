import React, { Component } from 'react';

import { Container, Button } from 'semantic-ui-react';

import RoomHeader from './RoomHeader';
import MemberList from './MemberList';
import PointSelect from './PointSelect';

export default class Room extends Component {
  state = {
    openPick: false,
    resetPick: false,
    currentMemnber: this.props.user,
    members: [
      { id: 1, name: 'Nha', point: 2, isHost: true },
      { id: 2, name: 'Tuan', point: 3, isHost: false },
      { id: 3, name: 'LA', point: 5, isHost: false },
      { id: 4, name: 'Quy', point: 8, isHost: false },
      { id: 5, name: 'Hoi', point: 2, isHost: false },
      { id: 6, name: 'c Giang', point: 2, isHost: false },
      { id: 7, name: 'a Danh', point: 2, isHost: false },
      { id: 8, name: 'a Vu', point: 5, isHost: false },
      { id: 9, name: 'Cong', point: 8, isHost: false },
      { id: 10, name: 'Ngan', point: 2, isHost: false },
    ],
  }

  handlePointSelected = (point) => {    
    const updatedMembers = this.state.members.map((member) => {
      if (member.id === this.state.currentMemnber.id) {
        return Object.assign({}, member, {
          point: point
        });
      } else {
        return member;
      }
    })

    this.setState({
        currentMemnber: Object.assign({}, this.state.currentMemnber, {
          pointSelected: point
        }),
        members: updatedMembers
      });
  }

  handleOpenPick = () => {
    this.setState({openPick: true})
  }

  handleResetPick = () => {
    this.setState({openPick: false})
  }

  render() {
    return (
      <Container>
        <RoomHeader roomId={this.props.roomId} />
        <br />

        <MemberList
          members={this.state.members}
          openPick={this.state.openPick}
          resetPick={this.state.resetPick}
        />
        <br />

        <PointSelect
          storyPoints={this.props.storyPoints}
          pointSelected={this.state.currentMemnber.pointSelected}
          handlePointSelected={this.handlePointSelected}
        />
        <br />

        <Container>
          <Button
            content='Open Pick'
            className={this.state.currentMemnber.isHost ? 'primary' : ''}
            disabled={!this.state.currentMemnber.isHost}
            onClick={this.handleOpenPick}
          />

          <Button
            content='Reset Pick'
            className={this.state.currentMemnber ? 'primary' : ''}
            disabled={!this.state.currentMemnber.isHost}
            onClick={this.handleResetPick}
          />
        </Container>
        <br />
        <br />
      </Container>
    );
  }
}