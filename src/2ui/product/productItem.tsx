import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {carType, updateCarTC} from "../../1bll/CarReducer"
import {Modal} from "antd"
import Input from "../common/input"
import {EditOutlined} from '@ant-design/icons'
import cl from './product.module.css'


type propsType = {
    car: carType
}
//useMemo
const ProductItem = ({car}: propsType) => {
    const dispatch = useDispatch()

    const [brand, setBrand] = useState<string>('')
    const [model, setModel] = useState<string>('')
    const [carNumber, setCarnumber] = useState<string>('')
    const [engineType, setEnginetype] = useState<string>('')

    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => {
        setIsModalVisible(true)
        setBrand(car.brand)
        setModel(car.model)
        setCarnumber(car.carNumber)
        setEnginetype(car.engineType)
    }
    const removeData = () =>{
        setBrand('')
        setModel('')
        setCarnumber('')
        setEnginetype('')
    }
    const handleOk = () => {
        dispatch(updateCarTC(car.id, {brand, carNumber, engineType, model}))
        setIsModalVisible(false)
        removeData()
    }
    const handleCancel = () => {
        removeData()
        setIsModalVisible(false)
    }


    return (
        <>
            <EditOutlined onClick={showModal} style={{fontSize: '20px', color: '#26253D', padding: '0 10px'}}/>

            <Modal title="EDIT CAR INFORMATION" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className={cl.modal}>
                    <Input placeholder='Brand' type='text' value={brand} addInputValue={setBrand}/>
                    <Input placeholder='Model' type='text' value={model} addInputValue={setModel}/>
                    <Input placeholder='Car Number' type='text' value={carNumber} addInputValue={setCarnumber}/>
                    <Input placeholder='Engine Type' type='text' value={engineType} addInputValue={setEnginetype}/>
                </div>
            </Modal>
        </>
    )
};

export default ProductItem