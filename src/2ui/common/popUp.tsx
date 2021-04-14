import React, {useState} from 'react'
import { Modal, Button } from 'antd'

type propsType = {
    child:any
    textBtn: string
    // setData:()=>void
}
const PopUp = (props:propsType) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        // debugger
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                {/*Open Modal*/}
                {props.textBtn}
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {props.child}
            </Modal>
        </>
    );
};

export default PopUp;