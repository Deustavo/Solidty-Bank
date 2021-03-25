import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    Icon: IconType;
}

const Button: React.FC<ButtonProps> = ({ text, Icon, ...props }) => {
    return (
        <button {...props} >
            <span>{ text }</span>
            <Icon size={ 21 } color="#fff" />
        </button>
    );
}

export default Button;