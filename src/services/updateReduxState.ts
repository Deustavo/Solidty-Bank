import store from '../store';
import jwt from 'jsonwebtoken';
import { remove_user, set_user } from '../store/user/actions';

import { TokenPayload } from '../types/user';

const updateReduxState = () => {
    const localToken = localStorage.getItem('@token_user');
    const localName = localStorage.getItem('@user_name');

    if ( !localName || !localToken ) {
        store.dispatch( remove_user() );
        return;
    }

    const onlyToken = localToken.split(' ')[1];
    const tokenPayload = jwt.decode(onlyToken) as TokenPayload;

    store.dispatch( set_user({
        login: tokenPayload.sub,
        name: localName,
        token: localToken
    }));
}

export default updateReduxState;