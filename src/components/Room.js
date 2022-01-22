import React from 'react';

import { Container, Button } from 'semantic-ui-react';

import RoomHeader from './RoomHeader';
import MemberList from './MemberList';
import PointSelect from './PointSelect';

const roomId = 'room-1234567';

export default function Room() {
  return (
    <Container>
      <RoomHeader />
      <br />

      <MemberList />
      <br />

      <PointSelect />
      <br />

      <Container>
        <Button content='Open Card' />
        <Button content='Reset Card' />
      </Container>
      <br />
      <br />
    </Container>
  );
}
