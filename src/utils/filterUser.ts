import { FilteredUser, UserResponse } from "../types/user";

export default function filterUser(user: UserResponse): FilteredUser {
    return {
        ...user,
        usuario: {
            cpf: user.usuario.cpf,
            id: user.usuario.id,
            login: user.usuario.login,
            nome: user.usuario.nome,
            redefinirSenha: user.usuario.redefinirSenha,
        }
    }
}