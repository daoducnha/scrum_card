import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Header,
    Button,
    Input,
    Icon,
} from 'semantic-ui-react';

export default function Home() {
    return (
        <Container>        
            <Header as='h1'>Please enter your name and room id</Header>
            <br />
            <div>
                <Input icon placeholder='Enter your name.' >
                    <input />
                    <Icon name='user' />
                </Input>
                <br />
                <br />
                <Input icon placeholder='Enter room id.' >
                    <input />
                    <Icon name='group' />
                </Input>
            </div>

            <br />
            <Button>
                <Link to='/room/:roomId'>
                    Create Room
                </Link>
            </Button>
            
            <Button>
                <Link to='/room/:roomId'>
                    Join Room
                </Link>
            </Button>            
        </Container>
    );
}
