import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Press</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Press');
  });
  it('applies variant class', () => {
    render(<Button variant="destructive">Boom</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('Boom');
    expect(btn.className).toMatch(/bg-destructive/);
  });
});

