import React from 'react';
import { fireEvent, render } from '@testing-library/react'
import Recover from '../../Pages/RecoverPassword'

const mockedHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useHistory: () =>{
            push: mockedHistoryPush
        },
        Link: ({ children }: { children: React.ReactNode }) => children
    }
}) 

describe('Recover Password', () => {
    it('should be able to recover password', () => {
        const { debug, getByPlaceholderText, getByText, ge } = render(<Recover />);
        console.log(debug);
        debug()

        const usernameField = getByPlaceholderText('Confirme seu nome de usuário');
        const buttonSubmit = getByText('Prosseguir');
 

        fireEvent.change(usernameField, { target: { value: 'jhonwick'}})
        fireEvent.click(buttonSubmit)

        setTimeout(() => { 
            const passwordField = getByPlaceholderText('Digite sua senha nova senha');
            const rePasswordField = getByPlaceholderText('Confirme sua nova senha');
            fireEvent.change(passwordField, { target: { value: '654321'}})
            fireEvent.change(rePasswordField, { target: { value: '654321'}})
         }, 2000 );
        // expect(mockedHistoryPush).toHaveBeenCalledWith('/login')
    })
})