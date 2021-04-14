import {Dispatch} from "redux"
import {Car, modelCar} from "./Api";

type getCarsACType = ReturnType<typeof getCarsAC>
type setErrACType = ReturnType<typeof setErrAC>
type addNewCarACType = ReturnType<typeof addNewCarAC>
type removeCarACType = ReturnType<typeof removeCarAC>
type updateCarACType = ReturnType<typeof updateCarAC>
export type carType = {
    brand: string
    carNumber: string
    engineType: string
    model: string
    id: number
}
type initialStateType = {
    cars: Array<carType>
    car: carType
    err: string
}
type actionType = getCarsACType | setErrACType | addNewCarACType | removeCarACType | updateCarACType
const initialState: initialStateType = {
    car: {brand: '', carNumber: '', engineType: '', model: '', id: 0},
    cars: [],
    err: ''
}
export const CarReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'GET_CARS': {
            return {...state, cars: action.payload}
        }
        case "SET_ERR": {
            return {...state, err: action.err}
        }
        case "ADD_CARS": {
            return {...state, cars: [...state.cars, action.payload]}
        }
        case "UPDATE_CARS": {
            return {
                ...state, cars: state.cars.map(c => {
                        if (c.id === action.payload.id) {
                            return action.payload
                        } else {
                            return c
                        }
                    }
                )
            }
        }
        case "REMOVE_CARS": {
            return {...state, cars: state.cars.filter(c => c.id !== action.id)}
        }
        default:
            return state
    }
}
//AC
export const getCarsAC = (payload: Array<carType>) => ({type: 'GET_CARS', payload} as const)
export const addNewCarAC = (payload: carType) => ({type: 'ADD_CARS', payload} as const)
export const updateCarAC = (payload: carType) => ({type: 'UPDATE_CARS', payload} as const)
export const removeCarAC = (id: number) => ({type: 'REMOVE_CARS', id} as const)
export const setErrAC = (err: string) => ({type: 'SET_ERR', err} as const)


//TC
export const getCarsTC = () => (dispatch: Dispatch) => {
    Car.getCars()
        .then(res => {
            // @ts-ignore
            dispatch(getCarsAC(res.data.cars))
        }).catch(e => {
        console.log(e.message);
        dispatch(setErrAC(e.message))
    })
}
export const addCarTC = ({brand, carNumber, engineType, model}: modelCar) => (dispatch: Dispatch) => {
    Car.createCar({brand, carNumber, engineType, model})
        .then(res => {
            dispatch(addNewCarAC(res.data.car))
        }).catch(e => {
        console.log(e.message);
        dispatch(setErrAC(e.message))
    })
}
export const removeCarTC = (id: number) => (dispatch: Dispatch) => {
    Car.removeCars(id).then(res => {
        dispatch(removeCarAC(id))
        // dispatch(getCarsTC())
    }).catch(e => {
        console.log(e.message);
        dispatch(setErrAC(e.message))
    })
}
export const updateCarTC = (id: number, {brand, carNumber, engineType, model}: modelCar) => (dispatch: Dispatch) => {
    Car.updateCar(id, {brand, carNumber, engineType, model}).then(res => {
        dispatch(updateCarAC({id, brand, carNumber, engineType, model}))
    }).catch(e => {
        console.log(e.message);
        dispatch(setErrAC(e.message))
    })
}