import React, {FC} from 'react';
import './/myModal.css'

interface modalProps {
    children?: React.ReactNode;
    visible?: boolean;
    setVisible?: () => void;
}

const MyModal:FC<modalProps> = ({children, visible, setVisible}) => {

    const rootClasses = ['MyModal'];

    if (visible) {
        rootClasses.push('MyModalActive');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible}>
            <div className="MyModalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;