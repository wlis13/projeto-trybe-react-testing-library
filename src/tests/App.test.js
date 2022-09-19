import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('testando componente <App /> ', () => {
  it('testa se existe três links no componente', () => {
    // renderwithRouter
    renderWithRouter(<App />);

    const firsLink = screen.getByRole('link', { name: /Home/i });
    const secondLink = screen.getByRole('link', { name: /About/i });
    const threeLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(firsLink).toBeInTheDocument();
    expect(secondLink).toBeInTheDocument();
    expect(threeLink).toBeInTheDocument();
  });

  it('testa o caminho do link (/)', () => {
    // renderwithRouter
    const { history } = renderWithRouter(<App />);

    const firsLink = screen.getByRole('link', { name: /Home/i });
    userEvent.click(firsLink);
    expect(history.location.pathname).toBe('/');
  });

  it('testa o caminho do link (/about)', () => {
    // renderwithRouter
    const { history } = renderWithRouter(<App />);

    const secondLink = screen.getByRole('link', { name: /About/i });
    userEvent.click(secondLink);
    expect(history.location.pathname).toBe('/about');
  });

  it('testa o caminho do link (/favorites)', () => {
    // renderwithRouter
    const { history } = renderWithRouter(<App />);

    const threeLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(threeLink);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('testa o caminho para notFound', () => {
    // renderwithRouter
    const { history } = renderWithRouter(<NotFound />);

    history.push('/not');
    const header = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(header).toBeInTheDocument();
  });
});
