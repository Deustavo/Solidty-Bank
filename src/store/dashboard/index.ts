import { Reducer } from "redux";
import { Plano } from "../../types/dash-board";
import { DashboardActions, DashboardData, Screen, Transactions } from "./types";

const INITIAL_STATE: DashboardData = {
    current_screen: 'Transações'
}

const reducer: Reducer<DashboardData> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DashboardActions.CHANGE_SCREEN:
            const screenToChange = action.payload as Screen;

            return { ...state, current_screen: screenToChange };

        case DashboardActions.INSERT_TRANSACTION_DATA:
            const dataToChange = action.payload as Transactions;

            return { ...state, transactions_data: dataToChange };

        case DashboardActions.INSERT_PLANS_DATA:
            const plasnToChange = action.payload as Plano[];

            return { ...state, plans_data: plasnToChange };

        default:
            return state;
    }
}

export default reducer;