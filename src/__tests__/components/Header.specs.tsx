import { render } from '@testing-library/react';
import React from 'react';
import Header from '../../components/Header';

jest.mock('react-router-dom', () => {
    return {
        useHistory: jest.fn(),
        Link: ({ children }: { children: React.ReactNode }) => children
    }
})

describe('Header app', () => {
    it('Find components', () => {
        const { debug } = render(<Header />)
        debug();
    })
})