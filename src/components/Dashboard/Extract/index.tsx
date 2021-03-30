import React, { useMemo } from 'react';
import currentIcon from '../../../assets/svgs/current-icon.svg';
import creditCardsIcon from '../../../assets/svgs/credit-cards-icon.svg';
import { Conta } from '../../../types/dash-board';

interface ExtractData {
    contaBanco?: Conta,
    contaCredito?: Conta,
}

enum PlanosConta {
    R = 'Receitas',
    D = 'Despesas',
    TC = 'Transferência entre contas',
    TU = 'Transferência entre usuários'
}

const Extract: React.FC<ExtractData> = (props) => {
    const allLaunchs = useMemo(() => {
        if (props.contaBanco?.lancamentos && props.contaCredito?.lancamentos) {
            const initLaunchs = [...props.contaBanco.lancamentos, ...props.contaCredito.lancamentos];

            const orderedLauchs = initLaunchs.slice().sort((a, b) => {
                return Number(new Date(a.data)) - Number(new Date(b.data));
            }).reverse();

            return orderedLauchs;
        } else {
            return [];
        }
    }, [props.contaBanco?.lancamentos, props.contaCredito?.lancamentos]);

    function typePlans(typePlan: string) {
        if (typePlan === 'R') {
            return PlanosConta.R;
        } else if (typePlan === 'D') {
            return PlanosConta.D;
        } else if (typePlan === 'TC') {
            return PlanosConta.TC;
        } else {
            return PlanosConta.TU;
        }
    }

    return (
        <>
            <div className="main-card" style={{ padding: 0}}>
                <div>
                    {allLaunchs.length === 0 ?
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={creditCardsIcon} alt="credit cards icon" style={{ width: 120, paddingTop: 40 }} />
                            <p className="title-dashboard" style={{ width: '100%', textAlign: 'center' }}>Nenhuma Movimentação</p>
                        </div>
                        :
                        <table className="table-dashboard">
                            <thead>
                                <tr>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allLaunchs && allLaunchs.map((launch, index) =>
                                    <tr key={index}>
                                        <th>{typePlans(launch.planoConta.tipoMovimento)}</th>
                                        <td>{launch.descricao}</td>
                                        <td>{launch.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                        <td>{launch.data}</td>
                                    </tr>
                                )}
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Extract;
