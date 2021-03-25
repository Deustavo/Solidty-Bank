import { combineReducers } from 'redux';

import dashboardReducer from './dashboard';
import userReducer from './user';

export default combineReducers({
    user: userReducer,
    dashboard: dashboardReducer
});