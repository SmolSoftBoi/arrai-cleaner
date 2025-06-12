import { render, screen } from '@testing-library/react';
import Home from './page';
import { describe, it, expect } from 'vitest';

describe('Home page', () => {
  it('renders greeting', () => {
    render(<Home />);
    expect(screen.getByText('Hello, developer! 🎉')).toBeInTheDocument();
  });
});
