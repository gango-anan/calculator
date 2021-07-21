import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ name, clickHandler, csName }) => <button className={`button ${csName}`} type="button" onClick={() => clickHandler(name)}>{name}</button>;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  csName: PropTypes.string.isRequired,
};

export default Button;
