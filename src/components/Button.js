import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
