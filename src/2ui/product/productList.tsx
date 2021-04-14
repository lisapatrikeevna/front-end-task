import React, {useEffect} from 'react'
import {Table} from 'antd'
import {ColumnsType} from 'antd/es/table'
import {carType, getCarsTC, removeCarTC} from "../../1bll/CarReducer"
import {useDispatch, useSelector} from "react-redux"
import {RootStateType} from "../../1bll/store"
import {DeleteOutlined} from '@ant-design/icons'
import ProductItem from "./productItem"
import cl from '../../App.module.css'


const ProductList = () => {
    const dispatch = useDispatch()
    const removeProduct = (id: number) => () => {
        dispatch(removeCarTC(id))
    }

    useEffect(() => {
        dispatch(getCarsTC())
    }, [dispatch])
    //
    let products = useSelector<RootStateType, Array<carType>>(state => state.car.cars)
    const columns: ColumnsType<carType> = [
        {
            title: 'brand',
            dataIndex: 'brand',
            sorter: (a: any, b: any) => a.brand.length - b.brand.length,
            sortDirections: ['descend'],
        },
        {
            title: 'carNumber',
            dataIndex: 'carNumber',
            defaultSortOrder: 'descend',
            sorter: (a: any, b: any) => a.carNumber - b.carNumber,
        },
        {
            title: 'engineType',
            dataIndex: 'engineType',
            defaultSortOrder: 'descend',
            sorter: (a: any, b: any) => a.engineType - b.engineType,
        },
        {
            title: 'model',
            dataIndex: 'model',
            filters: [
                {
                    text: 'Juke',
                    value: 'Juke',
                },
                {
                    text: 'Civic',
                    value: 'Civic',
                },
                {
                    text: 'Camry',
                    value: 'Camry',
                },
                {
                    text: 'Jimny',
                    value: 'Jimny',
                },
                {
                    text: '3',
                    value: '3',
                },
            ],
            filterMultiple: false,
            onFilter: (value: any, record) => record.model.indexOf(value) === 0,
            sorter: (a: any, b: any) => a.model.length - b.model.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Actions',
            dataIndex: 'Actions',
            width: '120px',
            render: (value: null, products) => <>
                <DeleteOutlined onClick={removeProduct(products.id)}
                                style={{fontSize: '20px', color: 'red', padding: '0 10px'}}/>
                <ProductItem car={products}/>
                {/*olor: '#26253D' ,padding: '0 10px'}}/>*!/*/}
            </>
        }
    ];


    return (<div className={cl.tableBody}>
        <Table columns={columns} dataSource={products} pagination={{pageSize: 5}}/>
    </div>)
}

export default ProductList;
