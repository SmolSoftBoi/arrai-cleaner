import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders with text', () => {
    const { getByRole } = render(<Button>Press</Button>);
    expect(getByRole('button')).toHaveTextContent('Press');
  });
});
