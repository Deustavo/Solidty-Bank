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
import './index.css';

// paginas
import VisaoGeral from '../../components/Dashboard/VisaoGeral';
import ContaCorrente from '../../components/Dashboard/ContaCorrente';
import AdicionarFundos from '../../components/Dashboard/AdicionarFundos';
import CartaoCredito from '../../components/Dashboard/CartaoCredito';
import PagarFatura from '../../components/Dashboard/PagarFatura';
import Tranferencia from '../../components/Dashboard/Tranferencia';
import Plans from '../../components/Dashboard/Plans';

//import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container } from './style';
import { Button } from 'reactstrap';

import Logo from '../../assets/Vector.png';
import Visao from '../../assets/ImgMenu/visao.png';
import Conta from '../../assets/ImgMenu/conta.png';
import Adicionar from '../../assets/ImgMenu/adicionar.png';
import Tranf from '../../assets/ImgMenu/transferencias.png';
import Perfil from '../../assets/ImgMenu/Perfils.png';
import Sair from '../../assets/ImgMenu/sair.png';

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

      <div className="container-dashboard">
        <div className="show-mobile">
          <img className="logo" src={gamaIcon} alt="Gama icon"/>
          <div>
          <FiAlignRight color="#000" size={ 60 } onClick={() => setModal()} ></FiAlignRight>
          </div>
        </div> 


        <div>
      <Container>
      <Nav className="sidenav" >
        <NavItem>
          <img src={Logo}></img>
          <p>Solidty</p>
          <p className="bank">Bank</p>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Visao}/>
          <NavLink onClick={() => changeComponent('VisaoGeral')} selected={currentScreen === 'VisaoGeral'}>Visão Geral</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Conta}/>
          <NavLink onClick={() => changeComponent('ContaCorrente')} selected={currentScreen === 'ContaCorrente'}>Conta Corrente</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Adicionar}/>
          <NavLink onClick={() => changeComponent('AdicionarFundos')} selected={currentScreen === 'AdicionarFundos'} >Adicionar Fundos</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Conta}/>  
          <NavLink  onClick={() => changeComponent('CartaoCredito')} selected={currentScreen === 'CartaoCredito'}>Cartão de Crédito</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Conta}/>
          <NavLink  onClick={() => changeComponent('PagarFatura')} selected={currentScreen === 'PagarFatura'}>Pagar Fatura</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Tranf}/>
          <NavLink  onClick={() => changeComponent('Tranferencia')} selected={currentScreen === 'Tranferencia'}>Transferências</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Conta}/>
          <NavLink  href="#" onClick={() => changeComponent('Plans')} selected={currentScreen === 'Plans'}>Movimentações</NavLink>
        </NavItem>
        <NavItem>
          <div className="perfil">
            <img className="imgbtn"src={Perfil}/>
            <NavLink  href="#">Perfil</NavLink>
          </div>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Sair}/>
          <Button className="sair" color="" size="sm" active><img className="btnimg" src={Sair} onClick={ () => setIsExiting(true) }/>Sair</Button>
        </NavItem>
      </Nav>
      </Container>
    </div>

        <div className="hidden-mobile">
          <nav>
            <img className="logo" src={gamaIcon} alt="Gama icon" />
            {/* visão geral */}
            <CardMenu  title='VisaoGeral' onClick={() => changeComponent('VisaoGeral')} selected={currentScreen === 'VisaoGeral'} />

            {/* conta corrente (apenas a parte do 'conta' que tem dentro do componente VisaoGeral)*/}
            {/* <CardMenu title='VisaoGeral' onClick={() => changeComponent('VisaoGeral')} selected={currentScreen === 'VisaoGeral'} /> */}
            <CardMenu title='ContaCorrente' onClick={() => changeComponent('ContaCorrente')} selected={currentScreen === 'ContaCorrente'} />

            {/* Adicionar fundos (apenas a parte do 'realize seu deposito' dentro com componente "depositos")*/}
            <CardMenu className="teste" title='AdicionarFundos' onClick={() => changeComponent('AdicionarFundos')} selected={currentScreen === 'AdicionarFundos'} />

            {/* catão de credito (apenas a parte do 'cartão de credito' que tem dentro do componente VisaoGeral)*/}
            {/* <CardMenu title='VisaoGeral' onClick={() => changeComponent('VisaoGeral')} selected={currentScreen === 'VisaoGeral'} /> */}
            <CardMenu title='CartaoCredito' onClick={() => changeComponent('CartaoCredito')} selected={currentScreen === 'CartaoCredito'} />
            
            {/* Pagar fatura (apenas a parte do 'pagamento de fatura' dentro com componente "depositos") */}
            {/* <CardMenu title='AdicionarFundos' onClick={() => changeComponent('AdicionarFundos')} selected={currentScreen === 'AdicionarFundos'} /> */}
            <CardMenu title='PagarFatura' onClick={() => changeComponent('PagarFatura')} selected={currentScreen === 'PagarFatura'} />

            {/* tranferencia */}
            <CardMenu title='Tranferencia' onClick={() => changeComponent('Tranferencia')} selected={currentScreen === 'Tranferencia'} />

            {/* movimentações */}
            <CardMenu title='Movimentações' onClick={() => changeComponent('Plans')} selected={currentScreen === 'Plans'} />

            <button onClick={ () => setIsExiting(true) } >
              <FiLogOut color="#fff" size={ 20 } />
            </button>
          </nav>
        </div> 

        <main className="main-dashboard">
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