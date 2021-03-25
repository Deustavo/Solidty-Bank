import { action } from 'typesafe-actions';
import { UserActions, UserData } from './types';

export const set_user = (user: UserData) => action(UserActions.SET_USER, user);

export const remove_user = () => action(UserActions.REMOVE_USER);