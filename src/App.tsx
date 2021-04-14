import React from 'react'
import cl from './App.module.css'
import ProductList from "./2ui/product/productList"
import Header from "./2ui/heder/heder"
import NewProduct from "./2ui/product/newProduct"

function App() {
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
        </div>
    );
}

export default App


