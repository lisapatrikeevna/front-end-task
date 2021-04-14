import axios from 'axios'
import {carType} from "./CarReducer"


const instans = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://test-backend.esverito.com/api/',
})
export const Car = {
    getCars() {
        return instans.get<resType<carsType>>('car/')
    },
    removeCars(carId: number) {
        return instans.delete<resType>(`car/${carId}`)
    },
    createCar({brand, carNumber, engineType, model}: modelCar) {
        return instans.post('car/', {brand, carNumber, engineType, model})
    },
    updateCar(carId: number, {brand, carNumber, engineType, model}: modelCar) {
        return instans.put<resType>(`car/${carId}`, {brand, carNumber, engineType, model})
    },
}

type resType<T = {}> = {
    status: number
    statusText: string
    data: T
}
export type carsType = {
    cars: Array<carType>
}
export type resCarType = {
    car: carType
}
export type modelCar = {
    brand: string
    carNumber: string
    engineType: string
    model: string
}