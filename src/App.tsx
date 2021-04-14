import React from 'react'
import cl from './App.module.css'
import ProductList from "./2ui/product/productList"
import Header from "./2ui/heder/heder"
import NewProduct from "./2ui/product/newProduct"
import {Alert} from 'antd'
import {useDispatch, useSelector} from "react-redux"
import {RootStateType} from "./1bll/store"
import {setErrAC} from "./1bll/CarReducer"

function App() {
    const dispatch = useDispatch()
    let err = useSelector<RootStateType, string>(state => state.car.err)
    const close = () => {
        dispatch(setErrAC(''))
    }
    setTimeout(()=>{close()}, 5000)
    return (
        <div className="App">
            <Header/>
            <div className={cl.container}>
                <div className={cl.head}>
                    <h2>CAR LIST</h2>
                    <NewProduct/>
                </div>
                <ProductList/>
            </div>
            {err && <Alert message="Error" description={err}
                           type="error"
                           // showIcon
                           style={{width:'300px', margin: 'auto'}}
            />}
        </div>
    );
}

export default App


