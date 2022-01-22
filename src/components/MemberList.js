import React from "react";

import { Card, Container, Grid } from "semantic-ui-react";
import Member from "./Member";

const members = [
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

export default function MemberList() {
    return (
        <Container>
            <Grid columns={5} divided>
                {
                    members.map((member) => (
                        <Grid.Column key={member.id}>
                            <Member member={member} />                            
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Container>
    );
}
