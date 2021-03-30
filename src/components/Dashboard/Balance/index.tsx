import React, { useState, useEffect } from 'react';
import currentIcon from '../../../assets/svgs/current-icon.svg';
import creditIcon from '../../../assets/svgs/credit-card-icon.svg';
import { Conta } from '../../../types/dash-board';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { ApplicationStore } from '../../../store';
import { useSelector } from 'react-redux';
import '../Dashboard.css';


interface Total {
  banco: number,
  credito: number,
}

interface AccountProps {
  contaBanco?: Conta,
  contaCredito?: Conta,
  title?: string
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
        <div className="title-dashboard" style={{ display: 'flex', justifyContent: 'space-between'}}>
          <p>{props.title}</p>
          <div style={{color: 'var(--secunday-color)'}}>
            {!hide ? <FiEye size={35} onClick={() => hideOrShowInformations()} /> : <FiEyeOff size={35} onClick={() => hideOrShowInformations()} />}
          </div>
        </div>
      </div>
      <div className="containers-cards">
        <div className="main-card card-dashboard"  style={{ display: props.contaBanco ? 'flex' : 'none'}}>
          <img src={currentIcon} style={{ width: 28 }} alt="current icon" />
          <div style={{ marginLeft: 24, display: 'flex', flexDirection: 'column'}}>
            <p style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>Conta</p>
            <p style={{ color: '#808080'}}>Saldo disponivel</p>
            <h3 className={`value acccount ${hide ? 'hide' : ''}`} title={contaBanco?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} style={{ color: 'var(--primary-color)', fontSize: 48}}>{contaBanco?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
          </div>
        </div>

        <div className="main-card card-dashboard" style={{ display: props.contaCredito ? 'flex' : 'none'}}>
          <img src={creditIcon} style={{ width: 28, marginTop: 4 }} alt="current icon" />
          <div style={{ marginLeft: 24, display: 'flex', flexDirection: 'column'}}>
            <p style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12  }}>Cartão de Crédito</p>
            <p style={{ color: '#808080'}}>Fatura em aberto</p>
            <h3 className={`value credit ${hide ? 'hide' : ''}`} title={contaCredito?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} style={{ color: '#ff4949' }}>{contaCredito?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
            <div style={{ marginTop: 12 }}>
              <p style={{ color: '#808080'}}>Limite disponivel</p>
              <h3 className={hide ? 'hide' : ''} title={totalTransactions.credito.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} style={{ color: '#13ce66' }}>{totalTransactions.credito.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Balance;