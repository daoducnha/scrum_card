import React, { Component } from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Image,
  Grid,
  Card
} from 'semantic-ui-react'

export default class Room extends Component {

  state = {
    roomId: 'room-1234567',
    storyPoints: [1, 2, 3, 5, 8, 13],
    members: [
      { id: 1, name: 'Nha', point: 2 },
      { id: 2, name: 'Tuan', point: 3 },
      { id: 3, name: 'LA', point: 5 },
      { id: 4, name: 'Quy', point: 8 },
      { id: 5, name: 'Hoi', point: 2 },
      { id: 6, name: 'c Giang', point: 2 },
      { id: 7, name: 'a Danh', point: 2 },
      { id: 8, name: 'a Vu', point: 5 },
      { id: 9, name: 'Cong', point: 8 },
      { id: 10, name: 'Ngan', point: 2 },
    ]
  }

  render() {
    return (
      <Container>
        {/* Room info */}
        <Header
          icon
          textAlign='center'
          as='h1'
        >
          <Icon name='users' circular />
          <Header.Content>ROOM {this.state.roomId}</Header.Content>
        </Header>
        <Container>
          <Grid columns={5} divided>
            {this.state.members.map((member) => (
              <Grid.Column key={member.id}>
                <Card
                  image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                  header={member.name}
                  meta={member.point}
                />
              </Grid.Column>
            ))}
          </Grid>
        </Container>
        {/* End room info */}
        <br />
        <br />
        <br />
        {/* Pick point of card */}
        <Container>
          <Header
            textAlign='center'
            as='h2'
          >
            <Header.Content>Pick your point</Header.Content>
          </Header>
          <br />
          <div>
            <Grid columns={6} divided>
              {this.state.storyPoints.map((point, index) => (
                <Grid.Column key={`card-${index}`}>
                  <Card color={point === 2 ? 'red' : ''}
                    header={point}
                  />
                </Grid.Column>
              ))}
            </Grid>
          </div>
        </Container>
        {/* End pick point of card */}
        <br />
        <br />
        {/* Buttons open and reset card point */}
        <Container>
          <Button content='Open Card' />
          <Button content='Reset Card' />
        </Container>
        {/* end buttons open and reset card point */}
      </Container>
    );
  }
}
