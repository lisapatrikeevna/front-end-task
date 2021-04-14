import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import {CarReducer} from "./CarReducer";

export type RootStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    car: CarReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
export default store