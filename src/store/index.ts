import { createStore, Store } from 'redux';
import { DashboardData } from './dashboard/types';
import rootReducer from './rootReducer';
import { UserData } from './user/types';

export interface ApplicationStore {
    user: UserData | null;
    dashboard: DashboardData;
}

const store: Store<ApplicationStore> = createStore( rootReducer );

export default store;