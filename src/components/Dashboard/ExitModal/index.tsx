import React, { HTMLAttributes } from "react";
import ButtonMain from "../../Button/main";
import ButtonSecondary from "../../Button/secondary";

interface ExitModalProps extends HTMLAttributes<HTMLDivElement> {
  setResponse: (accepted: boolean) => void;
}

const ExitModal: React.FC<ExitModalProps> = ({ setResponse, ...props }) => {
  return (
    <div {...props} className="main-modal">
      <div className="main-card">
        <h1>Tem certeza que deseja sair?</h1>

        <div style={{ marginTop: 1, display: "flex", flexDirection: "column" }}>
          <ButtonMain
            type="submit"
            text="Continuar na plataforma"
            onClick={() => setResponse(false)}
          />
          <ButtonSecondary
            type="submit"
            text="Sair"
            onClick={() => setResponse(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default ExitModal;
