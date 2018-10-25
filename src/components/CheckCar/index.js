import React, { Component } from 'react';

export default class CheckCar extends Component {
  state = {
    input: '',
  };

  handleChange = event => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const carNumber = this.state.input;
    //Проверка на соответствие номера российским стандартам.
    let valid = /^([a-z])\d{3}[a-z]{2}(\d{2,3})$/.test(carNumber.toLowerCase());
    if (!valid)
      valid = confirm('Вы ввели номер - ' + carNumber + ' ,вы уверены?');
    if (valid) {
      this.props.handleSubmit(carNumber);
    }
  };

  render() {
    return (
      <div className="text-center">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Введите номер машины</h1>
          <label htmlFor="carNumber" className="sr-only">
            Номер машины
          </label>
          <input
            id="carNumber"
            className="form-control"
            placeholder="Номер"
            autoFocus={true}
            type="text"
            style={{ fontSize: 26 }}
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={this.handleSubmit}
          >
            Отправить
          </button>
        </form>
      </div>
    );
  }
}
