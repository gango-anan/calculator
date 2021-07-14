import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value,
    };
  }

  render() {
    const { value } = this.state;
    return <div>{value}</div>;
  }
}

Button.propTypes = {
  value: PropTypes.string,
};

Button.defaultProps = {
  value: '0',
};

export default Button;
