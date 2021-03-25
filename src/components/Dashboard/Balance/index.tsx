import React, { useState, useEffect } from 'react';
import currentIcon from '../../../assets/svgs/current-icon.svg';
import creditIcon from '../../../assets/svgs/credit-card-icon.svg';
import { Conta } from '../../../types/dash-board';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { ApplicationStore } from '../../../store';
import { useSelector } from 'react-redux';


interface Total {
  banco: number,
  credito: number,
}

interface AccountProps {
  contaBanco?: Conta,
  contaCredito?: Conta,
}

const Balance: React.FC<AccountProps> = (props) => {
  const [contaBanco, setContaBanco] = useState<Conta>();
  const [contaCredito, setContaCredito] = useState<Conta>();
  const [totalTransactions, setTotalTransactions] = useState<Total>({
    banco: 0,
    credito: 0,
  });
  const [user, setUser] = useState('');
  const [hide, setHide] = useState(false);
  const store = useSelector((state: ApplicationStore) => state.user);

  useEffect(() => {
    if (store)
      setUser(store.name);
  }, [store])

  useEffect(() => {
    setContaBanco(props.contaBanco);
    setContaCredito(props.contaCredito);
    setTotalTransactions({
      banco: 0,
      credito: 0,
    });
    contaBanco?.lancamentos.forEach(lancamento => {
      setTotalTransactions((previewState) => ({
        ...previewState,
        banco: previewState.banco += lancamento.valor
      }))
    });

    contaCredito?.lancamentos.forEach(lancamento => {
      setTotalTransactions((previewState) => ({
        ...previewState,
        credito: previewState.credito += lancamento.valor
      })
      );
    })
  }, [contaBanco?.lancamentos, contaCredito?.lancamentos, props.contaBanco, props.contaCredito])

  const hideOrShowInformations = () => {
    setHide(!hide);
  }

  return (
    <>
      <div>
        <div>
          <p>Olá <strong>{user.split(' ')[0]}</strong>, seja bem-vindo(a)!</p>
          <div>
            {!hide ? <FiEye size={35} onClick={() => hideOrShowInformations()} /> : <FiEyeOff size={35} onClick={() => hideOrShowInformations()} />}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className='title'>
            <img src={currentIcon} alt="current icon" />
            <p>Conta</p>
          </div>
          <p>Saldo disponivel</p>
          <h3 className={`value acccount ${hide ? 'hide' : ''}`} title={contaBanco?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}>{contaBanco?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
          <div>
            <p>Transações</p>
            <h3 className={hide ? 'hide' : ''} title={totalTransactions.banco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}>{totalTransactions.banco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
          </div>

        </div>
        <div>
          {/*  */}
          <div className='title'>
            <img src={creditIcon} alt="current icon" />
            <p>Conta Crédito</p>
          </div>
          <p>Fatura atual</p>
          <h3 className={`value credit ${hide ? 'hide' : ''}`} title={contaCredito?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}>{contaCredito?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
          <div>
            <p>Limite Disponivel</p>
            <h3 className={hide ? 'hide' : ''} title={totalTransactions.credito.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            }>{totalTransactions.credito.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
          </div>
        </div>
      </div>
    </>

  );
}

export default Balance;