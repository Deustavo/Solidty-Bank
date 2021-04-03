import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../../store';
import UserIcon from '../../../assets/icon-user.png';
import CpfIcon from '../../../assets/icon-cpf.png';

import './styles.css';

const Profile: React.FC = () => {
  const user = useSelector( (state: ApplicationStore) => state.user );
  console.log(user);

  return(
    <div className="container-profile">
      <h1 className="title-dashboard">Informações pessoais</h1>
      <div className="info-profile">
        <img className="icon-profile" src={UserIcon} />
        <div>
          <p className="title">Nome: </p>
          <p>{user?.name}</p>
        </div>
      </div>
      <div className="info-profile">
        <img className="icon-profile" src={UserIcon} />
        <div>
          <p className="title">Nome de usuáro: </p>
          <p>{user?.login}</p>
        </div>
      </div>
      <div className="info-profile">
        <img className="icon-profile" src={CpfIcon} />
        <div>
          <p className="title">CPF: </p>
          <p>{user?.cpf}</p>
        </div>
      </div>  
    </div>
  );
}

export default Profile;