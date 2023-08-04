import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('ScreenArea', () => {
  it('renders', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
