import axios from 'axios';

const CAR_API_BASE_URL = "http://localhost:8080/api/v1/cars";

class CarService {

    getCars(){
        return axios.get(CAR_API_BASE_URL);
    }

    createCar(car){
        return axios.post(CAR_API_BASE_URL, car);
    }

    getCarById(carId){
        return axios.get(CAR_API_BASE_URL + '/' + carId);
    }

    updateCar(car, carId){
        return axios.put(CAR_API_BASE_URL + '/' + carId, car);
    }
    
    deleteCar(carId){
        return axios.delete(CAR_API_BASE_URL + '/' + carId);
    }

}

const carService = new CarService();

export default carService;