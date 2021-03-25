import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogOut, FiAlignRight } from 'react-icons/fi';
import gamaIcon from '../../assets/svgs/gama-icon.svg';
import CardMenu from '../../components/Dashboard/CardMenu';
import CardMenuMobile from '../../components/Dashboard/CardMenuMobile';
import Deposit from '../../components/Dashboard/Deposit';
import Payments from '../../components/Dashboard/Payments';
import Plans from '../../components/Dashboard/Plans';
import Transactions from '../../components/Dashboard/Transactions';
import { useDispatch, useSelector } from 'react-redux';
import { remove_user } from '../../store/user/actions';
import { ApplicationStore } from '../../store';
import { change_screen } from '../../store/dashboard/actions';
import { Screen } from '../../store/dashboard/types';
import ExitModal from '../../components/Dashboard/ExitModal';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const currentScreen = useSelector((store: ApplicationStore) => store.dashboard.current_screen);

  const [modalIsOpen,setIsOpen] = useState(false);
  const [ isExiting, setIsExiting ] = useState(false);

  //Setting data accounts;
  const changeComponent = useCallback((title: Screen) => {
    setIsOpen(false);
    dispatch( change_screen(title) );
  }, [dispatch]);

  const handleLogOut = useCallback((accepted: boolean) => {
    if ( accepted ) {
      dispatch(remove_user());
  
      history.push('/');
    } else {
      setIsExiting(false);
    }
  }, [ dispatch, history ]);

  function setModal() { 
    if(modalIsOpen === true)
      setIsOpen(false);
    else
      setIsOpen(true);
  }

  return (
    <>
        { isExiting && <ExitModal setResponse={ handleLogOut } /> }

        {modalIsOpen && (
          <div onClick={setModal}>

            <CardMenuMobile title = 'Depósitos' func={changeComponent} />
            <CardMenuMobile title = 'Planos' func={changeComponent} />
            <CardMenuMobile title = 'Pagamentos' func={changeComponent}  />
            <CardMenuMobile title = 'Transações' func={changeComponent} />
            <div onClick={ () => {
              setIsExiting(true);
              setIsOpen(false);
            }}>
              <FiLogOut size={16} color="#fff" style={{ marginRight: 8 }} />
              Sair
            </div>
          </div>
        )}
      <div>
        <img className="logo" src={gamaIcon} alt="Gama icon"/>
        <div>
        <FiAlignRight color="#fff" size={ 60 } onClick={() => setModal()} ></FiAlignRight>
        </div>

      </div> 
      <div>
        <nav>
          <img className="logo" src={gamaIcon} alt="Gama icon" />
          <CardMenu title='Depósitos' onClick={() => changeComponent('Depósitos')} selected={currentScreen === 'Depósitos'} />
          <CardMenu title='Planos' onClick={() => changeComponent('Planos')} selected={currentScreen === 'Planos'} />
          <CardMenu title='Pagamentos' onClick={() => changeComponent('Pagamentos')} selected={currentScreen === 'Pagamentos'} />
          <CardMenu title='Transações' onClick={() => changeComponent('Transações')} selected={currentScreen === 'Transações'} />

          <button onClick={ () => setIsExiting(true) } >
            <FiLogOut color="#fff" size={ 20 } />
          </button>

        </nav>
        <main>
          {/* Render component by currentScreen */}
          {currentScreen === 'Depósitos' && <Deposit />}
          {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
          {currentScreen === 'Planos' && <Plans />}
          {currentScreen === 'Transações' && <Transactions></Transactions>}
        </main>
      </div>
    </>
  );
}

export default Dashboard;