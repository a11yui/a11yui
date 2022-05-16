export default function createClassString(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
