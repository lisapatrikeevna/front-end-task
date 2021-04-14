import React, {useState} from 'react'
import Input from "../common/input"
import {useDispatch} from "react-redux"
import {addCarTC} from "../../1bll/CarReducer"
import {Button, Modal} from "antd"
import cl from './product.module.css'


const NewProduct = () => {
    const dispatch = useDispatch()
    const [brand, setBrand] = useState<string>('')
    const [model, setModel] = useState<string>('')
    const [carNumber, setCarnumber] = useState<string>('')
    const [engineType, setEnginetype] = useState<string>('FUEL')
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleOk = () => {
        dispatch(addCarTC({brand, carNumber, engineType, model}))
        setIsModalVisible(false)
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <>
            <Button type="primary" onClick={showModal} className={cl.btn}>
               create car
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Input placeholder='Brand' type='text' value={brand} addInputValue={setBrand}/>
                    <Input placeholder='Model' type='text' value={model} addInputValue={setModel}/>
                    <Input placeholder='Car Number' type='text' value={carNumber} addInputValue={setCarnumber}/>
                    <Input placeholder='Engine Type' type='text' value={engineType} addInputValue={setEnginetype}/>
            </Modal>
        </>
    )
}

export default NewProduct


