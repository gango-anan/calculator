import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleClick = (btnName) => {
  //   console.log(this.props);
  //   const { clickHandler } = this.props;
  //   clickHandler(btnName);
  // }

  render() {
    const { name, clickHandler } = this.props;
    return <button type="button" onClick={() => clickHandler(name)}>{name}</button>;
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
