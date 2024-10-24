import React, {FC} from 'react';
import "./MyButton.css"

interface buttonProps {
    onClick: (e: any) => void;
    defaultValue?: string;
}

const MyButton: FC<buttonProps> = ({onClick, defaultValue}) => {
    return (
        <button onClick={onClick} className="MyButton">
            {defaultValue}
        </button>
    );
};

export default MyButton;