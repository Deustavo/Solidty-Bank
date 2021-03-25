// Tipos de ação

export enum UserActions {
    SET_USER = "SET_USER",
    REMOVE_USER = "REMOVE_USER"
}

export interface UserData {
    token: string;
    login: string;
    name: string;
}