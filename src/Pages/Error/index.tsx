import React, { useCallback } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import ButtonSecondary from '../../components/Button/secondary';
import Header from '../../components/Header';
import './style.css';

const Error: React.FC = () => {
    const history = useHistory();

    const handleGoBack = useCallback(() => {
        history.push('/')
    }, [history]);

    return (
        <>
            <Header />
            <div className="error-page">
                <FiAlertTriangle className="icon" size={102}/>
                <h3>Oops, algo deu errado!</h3>
                <ButtonSecondary text="Voltar" Icon={FaArrowLeft} onClick={handleGoBack} />
            </div>
        </>
    );
}

export default Error;