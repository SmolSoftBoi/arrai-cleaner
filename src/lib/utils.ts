/**
 * Join valid class names.
 * @param classes - Candidate class values.
 * @returns Combined class string.
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
