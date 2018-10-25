import React, { Component } from 'react';

import { URL_CAR_CHECK } from '../../const';
import ParkCar from '../ParkCar';
import CheckCar from '../CheckCar';

export default class ParkCarConteiner extends Component {
  state = {
    isLoading: false,
    isLoaded: false,
    error: '',
    message: {},
  };

  checkCar = carNumber => {
    this.setState(state => {
      return {
        isLoading: true,
      };
    });
    fetch(URL_CAR_CHECK, {
      headers: {
        'Content-Type': 'text/plain',
      },
      method: 'POST',
      body: carNumber,
    })
      .then(data => data.json())
      .then(data => {
        this.setState(state => {
          return {
            isLoading: false,
            isLoaded: true,
            message: data,
          };
        });
      })
      .catch(error => {
        this.setState(state => {
          return {
            isLoading: false,
            isLoaded: false,
            error: error,
          };
        });
      });
  };

  render() {
    const { isLoading, isLoaded, error, message } = this.state;

    if (error) {
      return (
        <div>
           <h3>Ошибка призагрузке</h3>
        </div>
      )
    }

    if (isLoading) return <h3>Данные загружаются...</h3>;

    if (isLoaded) {
      return <ParkCar />;
    }

    return <CheckCar handleSubmit={this.checkCar} />;
  }
}
