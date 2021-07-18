import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { result } = this.props;
    return (
      <div>
        { result }
      </div>
    );
  }
}

DisplayPanel.propTypes = {
  result: PropTypes.string,
};

DisplayPanel.defaultProps = {
  result: '0',
};

export default DisplayPanel;
