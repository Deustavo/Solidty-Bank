import React, { useCallback } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';


import Button from '../../components/Button';
import Header from '../../components/Header';

const Error: React.FC = () => {
    const history = useHistory();

    const handleGoBack = useCallback(() => {
        history.push('/')
    }, [history]);

    return (
        <>
            <Header />
                    <FiAlertTriangle className="icon" size={102} />
                    <h3>Oops, algo deu errado!</h3>
                    <Button text="Voltar" Icon={FaArrowLeft} onClick={handleGoBack} />
        </>
    );
}

export default Error;