import React from "react";

import { Container, Grid } from "semantic-ui-react";

import Member from "./Member";

export default function MemberList({members, openPick}) {
    return (
        <Container>
            <Grid columns={5} divided>
                {
                    members.map((member) => (
                        <Grid.Column key={member.id}>
                            <Member member={member} openPick={openPick}/>                            
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Container>
    );
}
