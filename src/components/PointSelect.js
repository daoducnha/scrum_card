import React, { Component } from "react";

import { Container, Grid, Header } from "semantic-ui-react";

import Point from "./Point";

export default class PointSelect extends Component {

    render() {
        return (
            <Container>
                <Container>
                    <Header textAlign='center' as='h2'>
                        <Header.Content>
                            Pick your point
                        </Header.Content>
                    </Header>
                </Container>
                <br />
                <Container>
                    <Grid columns={6} divided>
                        {
                            this.props.storyPoints.map((point, index) => (
                                <Grid.Column key={`card-${index}`}>
                                    <Point
                                        isSelected={point === this.props.pointSelected}
                                        point={point}
                                        onPointSelected={this.props.handlePointSelected}
                                    />
                                </Grid.Column>
                            ))
                        }
                    </Grid>
                </Container>
            </Container>
        );
    }
}