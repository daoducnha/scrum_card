import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Icon, Input } from 'semantic-ui-react';

export default class InputField extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  state = {
    value: this.props.value,
  }

  static getDerivedStateFromProps(nextProps) {
    return { value: nextProps.value }
  }

  onChange = evt => {
    const name = this.props.name;
    const value = evt.target.value;

    this.setState({ value });
    this.props.onChange({ name, value });
  }

  render() {
    return (
      <Input
        icon
        placeholder={this.props.placeholder}
       
      >
        <input  onChange={this.onChange}/>
        <Icon name={this.props.icon} />
      </Input>
    );
  }
}
