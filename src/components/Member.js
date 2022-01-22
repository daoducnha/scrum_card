import React from "react";

import { Card } from "semantic-ui-react";

export default function Member({member}) {
    return (        
            <Card
                image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                header={member.name}
                meta={member.point}
            />
    );
}
