import React, {ChangeEvent, useEffect, useState} from 'react'
import cl from './input.module.css'

type inputType = {
    placeholder: string
    type: string
    value: string
    addInputValue: (value: string) => void
}
const Input = (props: inputType) => {
    let [value, setValue] = useState('')
    useEffect(() => {
        setValue(props.value)
    }, [props.value])
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value.trim())
    }
    const handleBlur = () => {
        props.addInputValue(value)
    }
    return (
        <input type={props.type} placeholder={props.placeholder}
               value={value} onChange={onChangeHandler}
               onBlur={handleBlur} className={cl.input}
        />
    )
}

export default Input;