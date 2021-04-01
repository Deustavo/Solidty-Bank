import React from 'react';
import { useHistory } from 'react-router-dom';

import LogoSRC from '../../assets/Vector.png';

const Logo: React.FC = () => {
    const history = useHistory();

    return (
        <div style={{ display: 'flex' }}>
            <img style={{ width: 40 }} onClick={ () => history.push('/') } src={ LogoSRC } alt="Logo principal" />
            <div style={{ marginLeft: 16, color: '#FFF' }}>
                <p style={{ fontWeight: 'bold' }}>Solidty</p>
                <p>Bank</p>
            </div>
        </div>
    );
}

export default Logo;