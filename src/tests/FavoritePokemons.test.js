import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testes no componente <favoritePokemon/>', () => {
  it('testa se existe o texto "No favorite pokemon found"', () => {
    renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(linkFavorite);
    const msg = screen.getByText(/No favorite pokemon found/i);
    expect(msg).toBeInTheDocument();
  });

  it('testa se existe o texto "No favorite pokemon found"', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);
    const Favoritado = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(Favoritado);
    const seeFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(seeFavorite);
    const containerImage = screen.getAllByRole('img');
    containerImage.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
  });
});
