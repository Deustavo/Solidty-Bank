import React, { HTMLAttributes } from 'react';


interface ExitModalProps extends HTMLAttributes<HTMLDivElement> {
    setResponse: (accepted: boolean) => void;
}

const ExitModal: React.FC<ExitModalProps> = ({ setResponse, ...props }) => {
    return (
        <div {...props} className="main-modal" >
            <div className="main-card">
                <h1>Tem certeza que deseja sair?</h1>

                <div style={{ marginTop: 12 }}>
                    <button className="main-button" onClick={() => setResponse(false)} >Continuar na plataforma</button>
                    <button className="main-button" onClick={() => setResponse(true)}  >Sair</button>
                </div>
            </div>
        </div>
    );
}

export default ExitModal;