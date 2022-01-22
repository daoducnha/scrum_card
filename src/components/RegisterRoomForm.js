import React, { Component } from "react";

import { Button, Container, Header, } from "semantic-ui-react";
import { Link } from "react-router-dom";
import uuid from 'react-uuid';

import InputField from "./InputField";


const LinkButton = ({ to, label, onClick }) => (
    <Button>
        <Link to={to} onClick={onClick}>
            {label}
        </Link>
    </Button>
)

export default class RegisterRoomForm extends Component {
    state = {
        roomId: '',
        fields: {
            name: '',
            roomId: '',
        },
    }

    static getDerivedStateFromProps(nextProps) {
        return { value: nextProps.value }
    }

    onCreateRoom = () => {
        const { roomId } = this.state.fields;
        debugger
        const member = Object.assign({}, this.state.fields, {
            id: uuid(),
            isHost: true,
        });
        
        this.setState({
            fields: {
                name: '',
                roomId: '',
            },
            roomId: roomId,
        });
        this.props.onCreateRoom(member, this.state.roomId);
    }

    onJoinRoom = () => {
        const { roomId } = this.state.fields;
        const member = Object.assign({}, this.state.fields, {
            id: uuid(),
            isHost: false,
        });

        this.setState({
            fields: {
                name: '',
                roomId: '',
            },
            roomId: roomId,
        })
        this.props.onJoinRoom(member, this.state.roomId);
    }

    onInputChange = ({ name, value }) => {
        const fields = Object.assign({}, this.state.fields)

        fields[name] = value;
        console.log(fields);
        this.setState({ fields })
    }

    render() {
        return (
            <Container>
                <Header as='h1'>Please enter your name and room id</Header>
                <br />
                <Container>
                    <InputField
                        placeholder='Enter your name.'
                        name='name'
                        value={this.state.fields.name}
                        icon='user'
                        onChange={this.onInputChange}
                    />
                    <br />
                    <br />
                    <InputField
                        placeholder='Enter room id.'
                        name='roomId'
                        value={this.state.fields.roomId}
                        icon='group'
                        onChange={this.onInputChange}
                    />
                </Container>
                <br />

                <Container>
                    <LinkButton to={`/room/${this.state.roomId}`} label='Create Room' onClick={this.onCreateRoom} />
                    <LinkButton to={`/room/${this.state.roomId}`} label='Join Room' onClick={this.onJoinRoom} />
                </Container>
            </Container>
        );
    }
}