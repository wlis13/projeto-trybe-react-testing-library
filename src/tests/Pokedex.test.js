import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa o arquivo Pokedex.js', () => {
  it('testa se existe o elemento <h2> com valor correto', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole(
      'heading',
      {
        level: 2,
      },
      {
        name: /Encountered pokémons/i,
      },
    );

    expect(heading).toBeInTheDocument();
  });

  it('testa se o pokemon é exibido após um click no botão de elementos', () => {
    renderWithRouter(<App />);
    const buttonPysic = screen.getByRole('button', { name: /psychic/i });
    userEvent.click(buttonPysic);
    const firstText = screen.getByText(/alakazam/i);
    expect(firstText).toBeInTheDocument();
  });

  it('testa se o próximo pokemon é exibido', () => {
    renderWithRouter(<App />);
    const buttonPysic = screen.getByRole('button', { name: /psychic/i });
    userEvent.click(buttonPysic);

    const secondButton = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(secondButton);
    const nextText = screen.getByText(/mew/i);
    expect(nextText).toBeInTheDocument();
  });

  it('testa se todos os botões de filtro estão na tela', () => {
    renderWithRouter(<App />);
    const buttonPysic = screen.getAllByRole('button');
    buttonPysic.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it('testa se existe cada botão para seu respectivo filtro', () => {
    renderWithRouter(<App />);
    const arrayNamesButton = [
      /electric/i, /fire/i, /bug/i, /poison/i, /psychic/i, /normal/i, /dragon/i, /all/i,
    ];
    arrayNamesButton.forEach((Name) => {
      const compareNames = screen.getByRole('button', { name: Name });
      expect(compareNames).toBeInTheDocument();
    });
  });

  it('testa se é mostrado apenas um pokemon por vez', () => {
    renderWithRouter(<App />);
    const buttonFiler = screen.getByRole('button', { name: /fire/i });
    userEvent.click(buttonFiler);
    const namePokemon = screen.getAllByRole('img', { name: /charmander sprite/i });
    expect(namePokemon).toHaveLength(1);
  });

  it('testa se existe todos os botões de filtro usando testId', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId(/pokemon-type-button/i);
    const numberLength = 7;
    expect(buttons).toHaveLength(numberLength);
  });

  it('teste do botão "All"', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: /all/i });
    expect(allButton).toBeInTheDocument();
    userEvent.click(allButton);
    const buttonNext = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(buttonNext);
    const namePokemon = screen.getByText(/charmander/i);
    expect(namePokemon).toBeInTheDocument();
  });
});
