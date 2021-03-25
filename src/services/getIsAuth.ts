import jwt from 'jsonwebtoken';

import { TokenPayload } from '../types/user';
// Estratégia para ver se o token ainda é valido
export const checkIsAuth = () => {
    const localToken = localStorage.getItem('@token_user');
    if ( !localToken ) return false;

    const onlyToken = localToken.split(' ')[1];
    const tokenPayload = jwt.decode( onlyToken ) as TokenPayload;
    
    const expSeconds = tokenPayload.exp;
    const nowSeconds = Date.now() / 1000;

    if ( expSeconds < nowSeconds ) {
        localStorage.removeItem('@token_user');
        localStorage.removeItem('@user_name');
        
        window.location.reload();

        return false;
    }

    return true;
}


// Verificação
const getIsAuth = () => {
    const localToken = localStorage.getItem('@token_user');
    
    if ( localToken && checkIsAuth() ) return true;
    
    return false;
}

export default getIsAuth;