import { describe, expect, it } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('returns custom greeting', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
