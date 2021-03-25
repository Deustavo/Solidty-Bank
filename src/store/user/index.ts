import { Reducer } from "redux";
import INITIAL_STATE from "./initialState";
import { UserActions, UserData } from "./types";

const reducer: Reducer<UserData | null> = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case UserActions.SET_USER:
            const userPayload = action.payload as UserData;
            
            return userPayload;

        case UserActions.REMOVE_USER:
            const localToken = localStorage.getItem('@token_user');

            if ( localToken ) {
                localStorage.removeItem('@token_user');
                localStorage.removeItem('@user_name');
            }

            return null;

        default: 
            return state;
    }
}

export default reducer;