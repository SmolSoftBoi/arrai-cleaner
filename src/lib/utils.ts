/**
 * Join valid class names.
 * @param classes - Candidate class values.
 * @returns Combined class string.
 */
export function cn(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ');
}

