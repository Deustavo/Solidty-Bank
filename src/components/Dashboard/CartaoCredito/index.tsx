import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';

import { Contas } from '../../../types/dash-board';
import Balance from '../Balance';
import Extract from '../Extract';
import api from '../../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../../store';
import Loader from '../../Loader';
import { set_transaction_data } from '../../../store/dashboard/actions';

const Transactions: React.FC = () => {

  const [ contas, setContas ] = useState<Contas>();
  const [ loaded, setLoaded ] = useState(true);
  const [ referenceDate, setReferenceDate ] = useState(1);

  const user = useSelector( (state: ApplicationStore) => state.user );
  const dashboard = useSelector(( state: ApplicationStore ) => state.dashboard);

  const dispatch = useDispatch();

  const formatDate = useCallback((date:string) => {
    setLoaded(false);
    
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }, []);

  useEffect(() => {
    if ( contas )
      dispatch( set_transaction_data({ accounts: contas }) );
  }, [dispatch, contas]);

  useEffect( ()=> {
    if ( dashboard.transactions_data ) {
      setContas(dashboard.transactions_data.accounts);

      return;
    }

    const getDashboardValues = async() => {
      try {
        setLoaded(false);

        const date = new Date();
        const newD = new Date();
        const newDate = new Date(date.setMonth(date.getMonth()-referenceDate));      
        const dateFormated = (newD.getFullYear() + "-" + ((newD.getMonth() + 1)) + "-" + (newD.getDate() ));
        const newDateFormated = (newDate.getFullYear() + "-" + ((newDate.getMonth() + 1)) + "-" + (newDate.getDate() ));
        const result = await api.get(`/dashboard?fim=${formatDate(dateFormated)}&inicio=${formatDate(newDateFormated)}&login=${user?.login}`, {
          headers: {
            Authorization: user?.token,
          }
        });
        setContas(result.data);
        setLoaded(true);
       
      }catch (err) {
        console.log(err);
      }
    };

    getDashboardValues();
  }, [ referenceDate, user?.login, user?.token, formatDate, dashboard ]);

  const updateReference = (event:ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value > 0 && value <= 12) 
      setReferenceDate(value);
  } 

  if ( loaded )return (
    <div>
      {/* Componente para página principal */}      

      <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>

      <div>
        <p>Escolhe a quantidade de <strong>meses</strong> para o filtro: </p>
        <input  type="number" min={1} max={12} value={referenceDate} onChange={updateReference}/>
      </div>

      <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>
      {/* <FiArrowLeft onClick={() => {props.func('')}}/> */}

    </div>
  );
  else return <Loader style={{ border: '4px solid #f0f0f0' }} />
  
}

export default Transactions;