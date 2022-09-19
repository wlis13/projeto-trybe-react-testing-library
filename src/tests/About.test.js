import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('testes no componente <About/>', () => {
  it('testa o texto de um h2 " About Pokédex"', () => {
    renderWithRouter(<About />);
    const titleAbout = screen.getByRole('heading', { name: /about pokédex/i });
    expect(titleAbout).toBeInTheDocument();
  });

  it('testa as duas informações sobre a "Pokédex"', () => {
    renderWithRouter(<About />);
    const firstInformation = screen.getByText(/this application simulates/i);
    const secondInformation = screen.getByText(/one can filter pokémons /i);

    expect(firstInformation).toBeInTheDocument();
    expect(secondInformation).toBeInTheDocument();
  });

  it('testa o src da imagen"', () => {
    renderWithRouter(<About />);
    const image = screen.getByRole('img', { name: /pokédex/i });
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
