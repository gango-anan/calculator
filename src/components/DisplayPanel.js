import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DisplayPanel.css';

const DisplayPanel = ({ result }) => <div className="display-panel">{ result }</div>;

DisplayPanel.propTypes = {
  result: PropTypes.string,
};

DisplayPanel.defaultProps = {
  result: '0',
};

export default DisplayPanel;
