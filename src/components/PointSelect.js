import React from "react";
import {
    Card,
    Container,
    Grid,
    Header
} from "semantic-ui-react";

const storyPoints = [1, 2, 3, 5, 8, 13];
const pointSelected = 2;

export default function PointSelect() {
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
                        storyPoints.map((point, index) => (
                            <Grid.Column key={`card-${index}`}>
                                <Card color={point === pointSelected ? 'red' : ''}
                                    header={point}
                                />
                            </Grid.Column>
                        ))
                    }
                </Grid>
            </Container>
        </Container>
    );
}
