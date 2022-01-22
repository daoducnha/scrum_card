import React from "react";
import { Link } from "react-router-dom";
import { Label } from "semantic-ui-react";

const memberName = "User_test";

export default function TopBar() {
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
                        {memberName}
                    </Label>
                </div>

                <Link className='ui item' to='/logout'>
                    Logout
                </Link>

            </div>
        </div>
    );
}
