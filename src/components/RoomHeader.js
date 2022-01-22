import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";

const roomId = 'room-123456';

export default function RoomHeader() {
    return (
        <Container>        
            <Header icon textAlign='center' as='h1'>
                <Icon name='users' circular />
                <Header.Content>
                    ROOM {roomId}
                </Header.Content>
            </Header>
        </Container>
    );
}
