/**
 * Join valid class names.
 * @param classes - Candidate class values.
 * @returns Combined class string.
 */
function isTruthy<T>(value: T | undefined | false | null): value is T {
  return Boolean(value);
}

export function cn(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(isTruthy).join(' ');
}

