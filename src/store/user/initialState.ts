import { UserData } from "./types";
import jwt from 'jsonwebtoken';

import { TokenPayload } from '../../types/user';

const getInitialState = (): UserData | null => {
    const localToken = localStorage.getItem('@token_user');
    const localUserName = localStorage.getItem('@user_name');

    // Usuário deslogado
    if ( !localToken || !localUserName ) return null;

    // Usuário Logado
    const filteredToken = localToken.split(' ')[1];
    const decodedToken = jwt.decode(filteredToken) as TokenPayload;
    
    const storeData: UserData =  {
        login: decodedToken.sub,
        token: localToken,
        name: localUserName
    }

    return storeData;
}

const INITIAL_STATE: UserData | null = getInitialState();

export default INITIAL_STATE;