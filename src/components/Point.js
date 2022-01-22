import React, { Component } from "react";

import { Card } from "semantic-ui-react";

export default class Point extends Component {
    
    handleSelected = () => {
        this.props.onPointSelected(this.props.point);
    }

    render() {
        return (
            <Card
                color={this.props.isSelected ? 'red' : 'grey'}
                header={this.props.point}
                onClick={this.handleSelected}
            />
        );
    }
}
