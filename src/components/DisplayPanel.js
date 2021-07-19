import React from 'react';
import PropTypes from 'prop-types';

const DisplayPanel = ({ result }) => <div>{ result }</div>;

DisplayPanel.propTypes = {
  result: PropTypes.string,
};

DisplayPanel.defaultProps = {
  result: '0',
};

export default DisplayPanel;
