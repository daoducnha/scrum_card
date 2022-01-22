import React from "react";

import { Label } from "semantic-ui-react";

import { Link } from "react-router-dom";

export default function TopBar({user}) {
    return (
        <div
            className='ui massive top attached fluid secondary menu'
        >
            <div className='item' />
            <div className='item'>
                <h1
                    className='ui header'
                    style={{ marginTop: '10px' }}
                >
                    Story point
                </h1>
            </div>

            <div className='right menu'>
                <div style={{ marginTop: '26px' }}>
                    <Label as='a' image >
                        <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
                        {user.name}
                    </Label>
                </div>

                <Link className='ui item' to='/logout'>
                    Logout
                </Link>

            </div>
        </div>
    );
}
