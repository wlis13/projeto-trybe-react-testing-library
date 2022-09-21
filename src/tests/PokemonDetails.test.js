import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testes da página pokemon Details', () => {
  it('testa se existe o nome do pokemon na página de detalhes', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    const nameDetails = screen.getByRole('heading', { name: /pikachu details/i });
    expect(nameDetails).toBeInTheDocument();
  });

  it('testa se não existe o link de navegação dos detalhes do pokemon', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    expect(linkDetails).not.toBeInTheDocument();
  });

  it('testa se página contem um headin level: 2 com o texto "sumary"', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    const text = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(text).toBeInTheDocument();
  });

  it('testa se existe o parágrafo com o resumo do pokemon', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    const text = screen.getByText(/this intelligent pokémon roasts/i);
    expect(text).toBeInTheDocument();
  });

  it('testa se existe o título level 2 "Game Locations of Pikachu"', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    const title = screen.getByRole(
      'heading',
      {
        name: /Game Locations of Pikachu/i,
        level: 2,
      },
    );
    expect(title).toBeInTheDocument();
  });

  it('testa se são exibidas as localizações', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    const localOne = screen.getByText(/Kanto Viridian Forest/i);
    const localTwo = screen.getByText(/Kanto Power Plant/i);
    expect(localOne).toBeInTheDocument();
    expect(localTwo).toBeInTheDocument();
  });

  it('testa se é exibido as imagens com os mapas da localização', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    const imagesLocation = screen.getAllByAltText(/Pikachu location/i);
    const attributeOne = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const attributeTwo = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(imagesLocation[0]).toHaveAttribute('src', attributeOne);
    expect(imagesLocation[1]).toHaveAttribute('src', attributeTwo);
  });

  it('testa o checkbox "Favorite Input"', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);
    const favoriteCheckbox = screen.getByText(/pokémon favoritado\?/i);
    expect(favoriteCheckbox).toBeInTheDocument();
  });
});
