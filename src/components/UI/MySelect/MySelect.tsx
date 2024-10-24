import React, {FC} from 'react';
import {IOption} from "../../../data/IInterfaces";

interface filterProps {
    options: IOption[];
    defaultValue: string;
    value: string;
    onChange: (selectedSort: string) => void;
}

const MySelect: FC<filterProps> = ({options, value, defaultValue, onChange}) => {
    return (
        <select
            value={value}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
};

export default MySelect;