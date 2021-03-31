import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiLogOut, FiAlignRight, FiGrid, FiCreditCard, FiInbox } from 'react-icons/fi';
import { MdImportExport, MdCompareArrows, MdPerson } from "react-icons/md";

import CardMenuMobile from '../../components/Dashboard/CardMenuMobile';
import { remove_user } from '../../store/user/actions';
import { ApplicationStore } from '../../store';
import { change_screen } from '../../store/dashboard/actions';
import { Screen } from '../../store/dashboard/types';
import ExitModal from '../../components/Dashboard/ExitModal';
import './index.css';
import '../../components/Dashboard/CardMenuMobile';

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
        <div className="main-modal" onClick={setModal}>
          <CardMenuMobile title='VisaoGeral' name="Visão Geral" func={changeComponent} />
          <CardMenuMobile title='ContaCorrente' name="Conta Corrente" func={changeComponent} />
          <CardMenuMobile title='AdicionarFundos' name="Adicionar Fundos" func={changeComponent} />
          <CardMenuMobile title='CartaoCredito' name="Cartão de Crédito" func={changeComponent} />
          <CardMenuMobile title='PagarFatura' name="Pagar Fatura" func={changeComponent} />
          <CardMenuMobile title='Tranferencia' name="Transferência" func={changeComponent} />
          <CardMenuMobile title='Plans' name="Movimentações" func={changeComponent} />
          <div className="background-card" onClick={ () => {
              setIsExiting(true);
              setModalIsOpen(false);
            }}>
              {/* <FiLogOut size={16} color="#000" style={{ marginRight: 8 }} /> */}
              <p>Sair</p>
          </div>
        </div>
      )}

      <div className="container-dashboard">
        <Container>
          <div className="show-mobile mobilenav">
            <div className="logo">
              <img src={Logo} />
              <div className="name">
                <p style={{ fontWeight: 'bold', marginTop: 8 }}>Solidty</p>
                <p>Bank</p>
              </div>
            </div>
            <div>
              <FiAlignRight color="#fff" size={ 60 } onClick={() => setModal()} ></FiAlignRight>
            </div>
          </div>
        </Container>

        <div className="hidden-mobile">
          <Container>
            <Nav className="sidenav">
              <NavItem>
                <div className="logo">
                  <img src={Logo}></img>
                  <p style={{ fontWeight: 'bold', marginTop: 8 }}>Solidty</p>
                  <p>Bank</p>
                </div>
              </NavItem>
              <NavItem>
                <FiGrid size={16} className="imgbtn" color={currentScreen === 'VisaoGeral' ? 'var(--primary-color)' : '#fff'}/>
                <NavLink className={currentScreen === 'VisaoGeral' ? 'selected' : ''} onClick={() => changeComponent('VisaoGeral')} selected={currentScreen === 'VisaoGeral'}>Visão Geral</NavLink>
              </NavItem>
              <NavItem>
                <FiCreditCard size={16} className="imgbtn" color={currentScreen === 'ContaCorrente' ? 'var(--primary-color)' : '#fff'}/>
                <NavLink className={currentScreen === 'ContaCorrente' ? 'selected' : ''} onClick={() => changeComponent('ContaCorrente')} selected={currentScreen === 'ContaCorrente'}>Conta Corrente</NavLink>
              </NavItem>
              <NavItem>
                <FiInbox size={16} className="imgbtn" color={currentScreen === 'AdicionarFundos' ? 'var(--primary-color)' : '#fff'}/>
                <NavLink className={currentScreen === 'AdicionarFundos' ? 'selected' : ''} onClick={() => changeComponent('AdicionarFundos')} selected={currentScreen === 'AdicionarFundos'} >Adicionar Fundos</NavLink>
              </NavItem>
              <NavItem>
                <FiCreditCard size={16} className="imgbtn" color={currentScreen === 'CartaoCredito' ? 'var(--primary-color)' : '#fff'}/>
                <NavLink className={currentScreen === 'CartaoCredito' ? 'selected' : ''} onClick={() => changeComponent('CartaoCredito')} selected={currentScreen === 'CartaoCredito'}>Cartão de Crédito</NavLink>
              </NavItem>
              <NavItem>
                <FiCreditCard size={16} className="imgbtn" color={currentScreen === 'PagarFatura' ? 'var(--primary-color)' : '#fff'}/>
                <NavLink className={currentScreen === 'PagarFatura' ? 'selected' : ''} onClick={() => changeComponent('PagarFatura')} selected={currentScreen === 'PagarFatura'}>Pagar Fatura</NavLink>
              </NavItem>
              <NavItem>
                <MdCompareArrows size={16} className="imgbtn" color={currentScreen === 'Tranferencia' ? 'var(--primary-color)' : '#fff'}/>
                <NavLink className={currentScreen === 'Tranferencia' ? 'selected' : ''} onClick={() => changeComponent('Tranferencia')} selected={currentScreen === 'Tranferencia'}>Transferências</NavLink>
              </NavItem>
              <NavItem>
                <MdImportExport size={16} className="imgbtn" color={currentScreen === 'Plans' ? 'var(--primary-color)' : '#fff'}/>
                <NavLink className={currentScreen === 'Plans' ? 'selected' : ''} onClick={() => changeComponent('Plans')} selected={currentScreen === 'Plans'}>Movimentações</NavLink>
              </NavItem>
              <NavItem>
                <div className="perfil">
                  <MdPerson size={16} className="imgbtn" color={currentScreen === 'Plans' ? 'var(--primary-color)' : '#fff'}/>
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

        <main className="main-dashboard">
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