import React, { HTMLAttributes } from 'react';


interface ExitModalProps extends HTMLAttributes<HTMLDivElement> {
    setResponse: (accepted: boolean) => void;
}

const ExitModal: React.FC<ExitModalProps> = ({ setResponse, ...props }) => {
    return (
        <div {...props} >
            <div>
                <h1>Tem certeza que deseja sair?</h1>

                <div>
                    <button onClick={() => setResponse(false)} >Cancelar</button>
                    <button onClick={() => setResponse(true)}  >Tenho</button>
                </div>
            </div>
        </div>
    );
}

export default ExitModal;