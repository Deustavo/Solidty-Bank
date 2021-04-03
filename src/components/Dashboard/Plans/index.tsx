import React from 'react';
import { Table } from 'reactstrap';
import { Container } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../../store';

const Plans: React.FC = () => {
  const user = useSelector( (state: ApplicationStore) => state.user );

  return (
    <div>
      <Container>
        <h1 className="title-dashboard">Movimentações</h1>
        <Table striped>
        <thead>
          <tr className="titulo">
            <th>Descrição</th>
            <th>Criado por:</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Despesas</td>
            <td>{user?.name.split(' ')[0]}</td>
            <td>Movimentação tipo: R</td>
          </tr>
          <tr>
            <td>Receitas</td>
            <td>{user?.name.split(' ')[0]}</td>
            <td>Movimentação tipo: R</td>
          </tr>
          <tr>
            <td>Lista com demais</td>
            <td>{user?.name.split(' ')[0]}</td>
            <td>Movimentação tipo: R</td>
          </tr>
          <tr>
            <td>Movimentações</td>
            <td>{user?.name.split(' ')[0]}</td>
            <td>Movimentação tipo: R</td>
          </tr>
    
        </tbody>
      </Table>
    </Container>
    </div>
  );
}

export default Plans;