import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('joins classes', () => {
    expect(cn('a', false, 'b')).toBe('a b');
  });
});
