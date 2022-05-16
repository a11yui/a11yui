type Orientation = 'horizontal' | 'vertical';

const LEFT = 'ArrowLeft';
const UP = 'ArrowUp';
const RIGHT = 'ArrowRight';
const DOWN = 'ArrowDown';

function toggle(activate: Element, deactivate: Element) {
  activate.setAttribute('aria-selected', 'true');
  activate.setAttribute('tabindex', '0');

  deactivate.setAttribute('aria-selected', 'false');
  deactivate.setAttribute('tabindex', '-1');
}

function keydown(e: Event, root: Element, toggles: NodeListOf<Element>) {
  const event = <KeyboardEvent>e;

  // Elements
  const current = root.querySelector('[tabindex="0"]');
  const orientation = root.getAttribute('aria-orientation') || 'horizontal';

  if (!current) return;

  const currentIndex = Array.prototype.indexOf.call(toggles, current);

  if (currentIndex < 0) return;

  const firstToggle = toggles[0];
  const lastToggle = toggles[toggles.length - 1];
  const prevToggle =
    currentIndex !== toggles.length - 1
      ? toggles[currentIndex + 1]
      : firstToggle;
  const nextToggle =
    currentIndex !== 0 ? toggles[currentIndex - 1] : lastToggle;

  if (orientation === 'vertical') {
    if (event.key === UP) {
      toggle(prevToggle, current);
      event.preventDefault();
    } else if (event.key === DOWN) {
      toggle(nextToggle, current);
      event.preventDefault();
    }
  } else {
    if (event.key === LEFT) {
      toggle(prevToggle, current);
      event.preventDefault();
    } else if (event.key === RIGHT) {
      toggle(nextToggle, current);
      event.preventDefault();
    }
  }
}

function on(root: Element, toggleProp: string) {
  const orientation = root.getAttribute(
    'aria-orientation',
  ) as Orientation | null;

  // If no orientation is specified, return
  if (!orientation || !['vertical', 'horizontal'].includes(orientation)) return;

  const toggles = root.querySelectorAll(toggleProp);

  // No need if one toggle
  if (toggles.length <= 1) return;

  root.addEventListener('keydown', (e) => keydown(e, root, toggles));
}

function off(root: Element, toggleProp: string) {
  const orientation = root.getAttribute('aria-orientation') as
    | 'horizontal'
    | 'vertical'
    | null;

  // If no orientation is specified, return
  if (!orientation || !['vertical', 'horizontal'].includes(orientation)) return;

  const toggles = root.querySelectorAll(toggleProp);

  // No need if one toggle
  if (toggles.length <= 1) return;

  for (let i = 0; i < toggles.length; i++) {
    const el = toggles[i];

    el.removeEventListener('keydown', (e) => keydown(e, root, toggles));
  }
}

const arrowKeys = {
  on,
  off,
};

export default arrowKeys;
