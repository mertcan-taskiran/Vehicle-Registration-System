import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarService from '../services/CarService';

class CreateCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //id: this.props.match.params.id,
      carName: '',
      brand: '',
      modal: '',
      year: '',
      plaka: '',
      errors: {
        carName: false,
        brand: false,
        modal: false,
        year: false,
        plaka: false,
      },
    };

    this.changeCarNameHandler = this.changeCarNameHandler.bind(this);
    this.changeBrandHandler = this.changeBrandHandler.bind(this);
    this.changeModalHandler = this.changeModalHandler.bind(this);
    this.changeYearHandler = this.changeYearHandler.bind(this);
    this.changePlakaHandler = this.changePlakaHandler.bind(this);
  }

  saveCar = (e) => {
    e.preventDefault();
    const { carName, brand, modal, year, plaka } = this.state;
    const errors = {};

    if (!carName) {
      errors.carName = true;
    }
    if (!brand) {
      errors.brand = true;
    }
    if (!modal) {
      errors.modal = true;
    }
    if (!year) {
      errors.year = true;
    }
    if (!plaka) {
      errors.plaka = true;
    }

    this.setState({ errors });

    if (!Object.values(errors).includes(true)) {
      const car = { carName, brand, modal, year, plaka };
      console.log('car => ' + JSON.stringify(car));
      CarService.createCar(car).then((res) => {
        // Mesaj
        toast.success('Car saved successfully!');
      });
    }
  }

  changeCarNameHandler = (event) => {
    this.setState({ carName: event.target.value, errors: { ...this.state.errors, carName: false } });
  }

  changeBrandHandler = (event) => {
    this.setState({ brand: event.target.value, errors: { ...this.state.errors, brand: false } });
  }

  changeModalHandler = (event) => {
    this.setState({ modal: event.target.value, errors: { ...this.state.errors, modal: false } });
  }

  changeYearHandler = (event) => {
    this.setState({ year: event.target.value, errors: { ...this.state.errors, year: false } });
  }

  changePlakaHandler = (event) => {
    const inputValue = event.target.value;
    const cleanedValue = inputValue.replace(/[çğıöşü]/g, '').toUpperCase();
    const trimmedValue = cleanedValue.replace(/\s/g, '');
    this.setState({
      plaka: trimmedValue,
      errors: { ...this.state.errors, plaka: false },
    });
  }

  render() {
    const { errors } = this.state;
    const isDisabled = Object.values(errors).includes(true);

    return (
      <div>
        <h3>Add New Car</h3>
        <hr />
        <div className="container">
          <form>
            <div className="form-group mt-3">
              <label> Car Name </label>
              <input
                placeholder="Car Name"
                name="carName"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent ${errors.carName ? 'is-invalid' : ''}`}
                value={this.state.carName}
                onChange={this.changeCarNameHandler}
              />
              {errors.carName && <div className="invalid-feedback">This field is required.</div>}
            </div>

            <div className="form-group mt-3">
              <label> Brand </label>
              <input
                placeholder="Brand"
                name="brand"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent ${errors.brand ? 'is-invalid' : ''}`}
                value={this.state.brand}
                onChange={this.changeBrandHandler}
              />
              {errors.brand && <div className="invalid-feedback">This field is required.</div>}
            </div>

            <div className="form-group mt-3">
              <label> Modal </label>
              <input
                placeholder="Modal"
                name="modal"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent ${errors.modal ? 'is-invalid' : ''}`}
                value={this.state.modal}
                onChange={this.changeModalHandler}
              />
              {errors.modal && <div className="invalid-feedback">This field is required.</div>}
            </div>

            <div className="form-group mt-3">
              <label> Year </label>
              <input
                placeholder="Year"
                name="year"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent ${errors.year ? 'is-invalid' : ''}`}
                value={this.state.year}
                onChange={this.changeYearHandler}
              />
              {errors.year && <div className="invalid-feedback">This field is required.</div>}
            </div>

            <div className="form-group mt-3">
              <label> Plaka </label>
              <input
                placeholder="Plaka"
                name="plaka"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent ${errors.plaka ? 'is-invalid' : ''}`}
                value={this.state.plaka}
                onChange={this.changePlakaHandler}
              />
              {errors.plaka && <div className="invalid-feedback">This field is required.</div>}
            </div>

            <div className="mt-3 d-flex justify-content-end">
              <Link to="/home" type="button" className="btn btn-secondary me-3">
                Cancel
              </Link>
              <button className="btn btn-primary" onClick={this.saveCar} disabled={isDisabled}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCar;
