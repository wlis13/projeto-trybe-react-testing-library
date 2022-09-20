import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('testa o componente <NotFound/>', () => {
  it('testa se existe o Header correto na página', () => {
    renderWithRouter(<NotFound />);
    const heading = screen.getByRole(
      'heading',
      {
        name: /Page requested not found/i,
      },
    );

    expect(heading).toBeInTheDocument();
  });

  it('testa se existe a propriedade Alt com valor correto', () => {
    renderWithRouter(<NotFound />);

    const image = screen.getByRole(
      'img',
      {
        alt: /Pikachu crying because the page requested was not found/i,
      },
    );

    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
