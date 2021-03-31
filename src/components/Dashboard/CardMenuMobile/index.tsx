import React from 'react';
import './index.css';

interface ComponentProp {
    title: string;
    name: string;
    func: Function;
}

const CardMenuMobile: React.FC<ComponentProp> = ( props ) => {

    const changeComponent = () => {
        props.func(props.title);
    }

    return (
        <div className="background-card" onClick={changeComponent}>
            <p>{props.name}</p>
        </div>
    )
}

export default CardMenuMobile;
