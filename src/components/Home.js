import React from 'react';
import {
    Header,
    Button,
    Input,
    Icon,
} from 'semantic-ui-react';

export default function Home() {
    return (
        <div className='ui'>
            <Header as='h1'>Scrum Card</Header>
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
            <Button content='Create Room' />
            <Button content='Join Room' />
        </div>
    );
}
