/**
 * Creates a class string from an array of strings
 * @param classes Array of strings
 * @returns String
 */
export default function createClassString(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
