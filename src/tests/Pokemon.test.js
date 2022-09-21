import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testes no componente Pokemon.js', () => {
  it('testa as informações referentes ao cart (Name)', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(buttonAll);
    const namePokemon = screen.getByTestId(/pokemon-name/i);

    expect(namePokemon).toBeInTheDocument();
  });

  it('testa as informações referentes ao cart (Type)', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(buttonAll);

    const typePokemon = screen.getAllByTestId(/pokemon-type/i, { children: /Electric/i });

    expect(typePokemon[0]).toBeInTheDocument();
  });

  it('testa as informações referentes ao cart(Weight)', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(buttonAll);

    const weightPokemon = screen.getByText(/average weight: 6\.0 kg/i);
    expect(weightPokemon).toBeInTheDocument();
  });

  it('testa o atributo da imagen inicial', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(buttonAll);
    const image = screen.getByRole('img', { name: /pikachu sprite/i });
    const Url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(image.src).toBe(Url);
  });

  it('testa o link do cart se tem a referência correta', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('testa se todos os pokemons types', () => {
    renderWithRouter(<App />);
    const idTypes = screen.getAllByTestId(/pokemon-type/i);

    expect(idTypes[0]).toHaveTextContent(/Electric/i);
  });

  it('testa se o ícone existe e tem a propriedade correta', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    const checkFavorite = screen.getByRole('checkbox', { name: /Pokémon favoritado\?/i });
    userEvent.click(checkFavorite);
    const iconStars = screen.getByRole(
      'img',
      {
        name: /pikachu is marked as favorite/i,
      },
    );
    expect(iconStars).toHaveAttribute('src', '/star-icon.svg');
  });
});
