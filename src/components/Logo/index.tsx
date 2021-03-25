import React from 'react';
import { useHistory } from 'react-router-dom';

import LogoSRC from '../../assets/main-logo.png';

const Logo: React.FC = () => {
    const history = useHistory();

    return (
        <img onClick={ () => history.push('/') } src={ LogoSRC } alt="Logo principal" />
    );
}

export default Logo;