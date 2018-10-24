import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ParkCar extends Component {
  static propTypes = {
    parking: PropTypes.string.isRequired,
    car: PropTypes.string.isRequired,
    driver: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    place: PropTypes.number.isRequired,
    term: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div>
        <h1>ParkCar</h1>
      </div>
    );
  }
}
