import React from 'react';
import { fireEvent, render } from '@testing-library/react'
import Login from '../../Pages/Login'

const mockedHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useHistory: () =>{
            push: mockedHistoryPush
        },
        Link: ({ children }: { children: React.ReactNode }) => children
    }
}) 
describe('Login page', () => {
    it('should be able to login', () => {
        const { debug, getByPlaceholderText, getByText, ge } = render(<Login />);
        console.log(debug);
        debug()

        const usernameField = getByPlaceholderText('Digite seu usuário');
        const passwordField = getByPlaceholderText('Digite sua senha');
        const buttonSubmit = getByText('Continuar');

        fireEvent.change(usernameField, { target: { value: 'jhonwick'}})
        fireEvent.change(passwordField, { target: { value: '654321'}})

        fireEvent.click(buttonSubmit)

        // expect(mockedHistoryPush).toHaveBeenCalledWith('/login')
    })
})