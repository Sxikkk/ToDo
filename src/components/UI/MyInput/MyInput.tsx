import React, {FC} from 'react';
import './MyInput.css'
import {InputType} from "../../../data/enums";

interface inputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: InputType
}

const MyInput:FC<inputProps> = ({placeholder, value, onChange, type}) => {

    return (
        <input value={value} placeholder={placeholder} onChange={onChange} className='MyInput' type={type}/>
    );
};

export default MyInput;