import { action } from 'typesafe-actions';
import { Plano } from '../../types/dash-board';
import { DashboardActions, Screen, Transactions } from './types';

export const change_screen = (screen: Screen) => action( DashboardActions.CHANGE_SCREEN, screen );

export const set_transaction_data = (data: Transactions | undefined) => action( DashboardActions.INSERT_TRANSACTION_DATA, data );

export const set_plans_data = (data: Plano[]) => action( DashboardActions.INSERT_PLANS_DATA, data );