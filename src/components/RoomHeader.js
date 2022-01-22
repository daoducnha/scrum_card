import React from "react";

import { Container, Header, Icon } from "semantic-ui-react";

export default function RoomHeader({roomId}) {
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
