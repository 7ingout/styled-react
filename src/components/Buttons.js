import React from 'react';
import './Button.scss';
import classNames from 'classname';

const Buttons = ({children, size, color, outline, fullWidth}) => {
    return (
        // <button className={`button ${size}`}>{children}</button>
        <button className={classNames('Button', size, color, {outline, fullWidth})}>{children}</button>
    );
};

export default Buttons;