import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container } from './style';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';

import Logo from '../../assets/Vector.png';
import Visao from '../../assets/ImgMenu/visao.png';
import Conta from '../../assets/ImgMenu/conta.png';
import Adicionar from '../../assets/ImgMenu/adicionar.png';
import Tranf from '../../assets/ImgMenu/transferencias.png';
import Perfil from '../../assets/ImgMenu/Perfils.png';
import Sair from '../../assets/ImgMenu/sair.png';




const Example = () => {
  return (
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
          <NavLink href="#">Visão Geral</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Conta}/>
          <NavLink href="#">Conta Corrente</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Adicionar}/>
          <NavLink href="#" >Adicionar Fundos</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Conta}/>  
          <NavLink  href="#">Cartão de Crédito</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Conta}/>
          <NavLink  href="#">Pagar Fatura</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Tranf}/>
          <NavLink  href="#">Transferências</NavLink>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Conta}/>
          <NavLink  href="#">Movimentações</NavLink>
        </NavItem>
        <NavItem>
          <div className="perfil">
            <img className="imgbtn"src={Perfil}/>
            <NavLink  href="#">Perfil</NavLink>
          </div>
        </NavItem>
        <NavItem>
          <img className="imgbtn"src={Sair}/>
          <Button className="sair" color="" size="sm" active><img className="btnimg" src={Sair}/>Sair</Button>
        </NavItem>
      </Nav>
      </Container>
    </div>
  );
}

export default Example;