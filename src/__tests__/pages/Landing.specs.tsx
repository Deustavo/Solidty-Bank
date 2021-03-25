import React from 'react';
import { fireEvent, render } from '@testing-library/react'
import Landing from '../../Pages/Landing'

const mockedHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useHistory: () =>{
            push: mockedHistoryPush
        },
        Link: ({ children }: { children: React.ReactNode }) => children
    }
}) 

describe('SignUp Page', () => {
    it('shold be able to signup', () => {
        const { debug, getByPlaceholderText, getByText, ge } = render(<Landing />);
        console.log(debug);
        debug()

        const cpfField = getByPlaceholderText('Digite seu CPF');
        const nameField = getByPlaceholderText('Nome completo');
        const usernameField = getByPlaceholderText('Escolha um nome de usuário');
        const passwordField = getByPlaceholderText('Digite sua senha');
        const rePasswordField = getByPlaceholderText('Confirme sua senha');
        const buttonSubmit = getByText('Continuar');

        fireEvent.change(cpfField, { target: { value: '12312312311'}})
        fireEvent.change(nameField, { target: { value: 'Jhon Wick da Silva'}})
        fireEvent.change(usernameField, { target: { value: 'jhonwick'}})
        fireEvent.change(passwordField, { target: { value: '654321'}})
        fireEvent.change(rePasswordField, { target: { value: '654321'}})

        fireEvent.click(buttonSubmit)

        // expect(mockedHistoryPush).toHaveBeenCalledWith('/login')
    })
})