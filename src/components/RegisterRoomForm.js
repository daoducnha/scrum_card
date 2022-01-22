import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Header,
    Icon,
    Input,
} from "semantic-ui-react";

const InputForm = ({ placeholder, icon }) => (
    <Input icon placeholder={placeholder}>
        <input />
        <Icon name={icon} />
    </Input>
)

const LinkButton = ({ to, label }) => (
    <Button>
        <Link to={to}>
            {label}
        </Link>
    </Button>
)

export default function RegisterRoomForm() {
    return (
        <Container>
            <Header as='h1'>Please enter your name and room id</Header>
            <br />
            <Container>
                <InputForm placeholder='Enter your name.' icon='user' />
                <br />
                <br />
                <InputForm placeholder='Enter room id.' icon='group' />
            </Container>
            <br />
            
            <Container>
                <LinkButton to='/room/:roomId' label='Create Room' />
                <LinkButton to='/room/:roomId' label='Join Room' />                
            </Container>
        </Container>
    );
}
