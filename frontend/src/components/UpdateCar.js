import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CarService from '../services/CarService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      carName: '',
      brand: '',
      modal: '',
      year: '',
      plaka: '',
    };
    this.changeCarNameHandler = this.changeCarNameHandler.bind(this);
    this.changeBrandHandler = this.changeBrandHandler.bind(this);
    this.changeModalHandler = this.changeModalHandler.bind(this);
    this.changeYearHandler = this.changeYearHandler.bind(this);
    this.changePlakaHandler = this.changePlakaHandler.bind(this);
  }

  componentDidMount() {
    CarService.getCarById(this.state.id).then((res) => {
      let car = res.data;
      this.setState({
        carName: car.carName,
        brand: car.brand,
        modal: car.modal,
        year: car.year,
        plaka: car.plaka,
      });
    });
  }

  updateCar = (e) => {
    e.preventDefault();
    let car = {carName: this.state.carName, brand: this.state.brand, modal: this.state.modal, year: this.state.year, plaka: this.state.plaka};
    console.log('car => ' + JSON.stringify(car));
    console.log('id => ' + JSON.stringify(this.state.id));

    CarService.updateCar(car, this.state.id).then( res => {
      toast.success('Car updated successfully!');
    });

  }

  changeCarNameHandler = (event) => {
    this.setState({ carName: event.target.value });
  }

  changeBrandHandler = (event) => {
    this.setState({ brand: event.target.value });
  }

  changeModalHandler = (event) => {
    this.setState({ modal: event.target.value });
  }

  changeYearHandler = (event) => {
    this.setState({ year: event.target.value });
  }

  changePlakaHandler = (event) => {
    this.setState({ plaka: event.target.value });
  }

  render() {
    return (
      <div>
        <h3>Update Car</h3>
        <hr />
        <div className="container">
          <form>
            <div className="form-group mt-3">
              <label> Car Name </label>
              <input
                placeholder="Car Name"
                name="carName"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent`}
                value={this.state.carName}
                onChange={this.changeCarNameHandler}
              />
            </div>

            <div className="form-group mt-3">
              <label> Brand </label>
              <input
                placeholder="Brand"
                name="brand"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent`}
                value={this.state.brand}
                onChange={this.changeBrandHandler}
              />
            </div>

            <div className="form-group mt-3">
              <label> Modal </label>
              <input
                placeholder="Modal"
                name="modal"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent`}
                value={this.state.modal}
                onChange={this.changeModalHandler}
              />
            </div>

            <div className="form-group mt-3">
              <label> Year </label>
              <input
                placeholder="Year"
                name="year"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent`}
                value={this.state.year}
                onChange={this.changeYearHandler}
              />
            </div>

            <div className="form-group mt-3">
              <label> Plaka </label>
              <input
                placeholder="Plaka"
                name="plaka"
                className={`form-control border border-top-0 border-end-0 border-start-0 bg-transparent`}
                value={this.state.plaka}
                onChange={this.changePlakaHandler}
              />
            </div>

            <div className="mt-3 d-flex justify-content-end">
              <Link to="/home" type="button" className="btn btn-secondary me-3">
                Cancel
              </Link>
              
              <button className="btn btn-primary" onClick={this.updateCar}>Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateCar;
