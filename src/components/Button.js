import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    const { name } = this.props;
    this.state = {
      name,
    };
  }

  render() {
    const { name } = this.state;
    return <button type="button">{name}</button>;
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
