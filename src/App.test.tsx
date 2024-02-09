import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('deve renderizar sem erros', () => {
    render(<App />);
    const element = screen.getByText('Meus Investimentos');
    console.log(screen.debug());
    expect(element).toBeInTheDocument();
  });
});
