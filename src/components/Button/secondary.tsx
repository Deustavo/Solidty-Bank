import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import "../../styles/button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    Icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ text, Icon, ...props }) => {
    return (
        <button {...props} className="secondary-button button">
            <p style={{ marginRight: 16 }}>{ text }</p>
            {Icon ? <Icon size={ 16 } color="var(--primary-color)" /> : ""}
        </button>
    );
}

export default Button;