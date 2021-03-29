import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiLogOut, FiAlignRight } from 'react-icons/fi';

import gamaIcon from '../../assets/svgs/gama-icon.svg';
import CardMenu from '../../components/Dashboard/CardMenu';
import CardMenuMobile from '../../components/Dashboard/CardMenuMobile';
import { remove_user } from '../../store/user/actions';
import { ApplicationStore } from '../../store';
import { change_screen } from '../../store/dashboard/actions';
import { Screen } from '../../store/dashboard/types';
import ExitModal from '../../components/Dashboard/ExitModal';

// paginas
import VisaoGeral from '../../components/Dashboard/VisaoGeral';
import ContaCorrente from '../../components/Dashboard/ContaCorrente';
import AdicionarFundos from '../../components/Dashboard/AdicionarFundos';
import CartaoCredito from '../../components/Dashboard/CartaoCredito';
import PagarFatura from '../../components/Dashboard/PagarFatura';
import Tranferencia from '../../components/Dashboard/Tranferencia';
import Plans from '../../components/Dashboard/Plans';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const currentScreen = useSelector((store: ApplicationStore) => store.dashboard.current_screen);

  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ isExiting, setIsExiting ] = useState(false);

  //Setting data accounts;
  const changeComponent = useCallback((title: Screen) => {
    setModalIsOpen(false);
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
      setModalIsOpen(false);
    else
      setModalIsOpen(true);
  }

  return (
    <>
      { isExiting && <ExitModal setResponse={ handleLogOut } /> }

      {modalIsOpen && (
        <div onClick={setModal}>

          <CardMenuMobile title = 'AdicionarFundos' func={changeComponent} />
          <CardMenuMobile title = 'Plans' func={changeComponent} />
          <CardMenuMobile title = 'Tranferencia' func={changeComponent}  />
          <CardMenuMobile title = 'VisaoGeral' func={changeComponent} />
          <div onClick={ () => {
            setIsExiting(true);
            setModalIsOpen(false);
          }}>
            <FiLogOut size={16} color="#fff" style={{ marginRight: 8 }} />
            Sair
          </div>
        </div>
      )}

      <div className="show-mobile">
        <img className="logo" src={gamaIcon} alt="Gama icon"/>
        <div>
        <FiAlignRight color="#000" size={ 60 } onClick={() => setModal()} ></FiAlignRight>
        </div>
      </div> 
    
      <div className="hidden-mobile">
        <nav>
          <img className="logo" src={gamaIcon} alt="Gama icon" />
          {/* visão geral */}
          <CardMenu title='VisaoGeral' onClick={() => changeComponent('VisaoGeral')} selected={currentScreen === 'VisaoGeral'} />

          {/* conta corrente (apenas a parte do 'conta' que tem dentro do componente VisaoGeral)*/}
          {/* <CardMenu title='VisaoGeral' onClick={() => changeComponent('VisaoGeral')} selected={currentScreen === 'VisaoGeral'} /> */}
          <CardMenu title='ContaCorrente' onClick={() => changeComponent('ContaCorrente')} selected={currentScreen === 'ContaCorrente'} />

          {/* Adicionar fundos (apenas a parte do 'realize seu deposito' dentro com componente "depositos")*/}
          <CardMenu title='AdicionarFundos' onClick={() => changeComponent('AdicionarFundos')} selected={currentScreen === 'AdicionarFundos'} />

          {/* catão de credito (apenas a parte do 'cartão de credito' que tem dentro do componente VisaoGeral)*/}
          {/* <CardMenu title='VisaoGeral' onClick={() => changeComponent('VisaoGeral')} selected={currentScreen === 'VisaoGeral'} /> */}
          <CardMenu title='CartaoCredito' onClick={() => changeComponent('CartaoCredito')} selected={currentScreen === 'CartaoCredito'} />
          
          {/* Pagar fatura (apenas a parte do 'pagamento de fatura' dentro com componente "depositos") */}
          {/* <CardMenu title='AdicionarFundos' onClick={() => changeComponent('AdicionarFundos')} selected={currentScreen === 'AdicionarFundos'} /> */}
          <CardMenu title='PagarFatura' onClick={() => changeComponent('PagarFatura')} selected={currentScreen === 'PagarFatura'} />

          {/* tranferencia */}
          <CardMenu title='Tranferencia' onClick={() => changeComponent('Tranferencia')} selected={currentScreen === 'Tranferencia'} />

            
          {/* movimentações */}
           <CardMenu title='Plans' onClick={() => changeComponent('Plans')} selected={currentScreen === 'Plans'} />

          <button onClick={ () => setIsExiting(true) } >
            <FiLogOut color="#fff" size={ 20 } />
          </button>

        </nav>
        <main style={{ width: '80%', margin: 'auto'}}>
          {/* Render component by currentScreen */}
          {/* visão geral */}
          {currentScreen === 'VisaoGeral' && <VisaoGeral />}
          
          {/* conta corrente */}
          {currentScreen === 'ContaCorrente' && <ContaCorrente />}

          {/* Adicionar fundos */}
          {currentScreen === 'AdicionarFundos' && <AdicionarFundos />}

          {/* cartão de credito */}
          {currentScreen === 'CartaoCredito' && <CartaoCredito />}

          {/* pagar fatura */}
          {currentScreen === 'PagarFatura' && <PagarFatura />}

          {/* tranferencia */}
          {currentScreen === 'Tranferencia' && <Tranferencia func={changeComponent}></Tranferencia>}

           {/* Plans*/}
          {currentScreen === 'Plans' && <Plans />}
        </main>
      </div>
    </>
  );
}

export default Dashboard;