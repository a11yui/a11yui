type Orientation = 'horizontal' | 'vertical';

const LEFT = 'ArrowLeft';
const UP = 'ArrowUp';
const RIGHT = 'ArrowRight';
const DOWN = 'ArrowDown';

function toggle(event: KeyboardEvent, activate: Element, deactivate: Element) {
  event.stopImmediatePropagation();
  event.preventDefault();

  activate.setAttribute('aria-selected', 'true');
  activate.setAttribute('tabindex', '0');

  deactivate.setAttribute('aria-selected', 'false');
  deactivate.setAttribute('tabindex', '-1');
}

function keydown(e: Event, root: Element, toggleProp: string) {
  const event = <KeyboardEvent>e;

  // Elements
  const current = root.querySelector('[tabindex="0"]');
  const orientation = root.getAttribute('aria-orientation') || 'horizontal';

  if (!current) return;

  const toggles = root.querySelectorAll(toggleProp);

  // No need if one toggle
  if (toggles.length <= 1) return;

  const currentIndex = Array.prototype.indexOf.call(toggles, current);

  if (currentIndex < 0) return;

  const firstToggle = toggles[0];
  const lastToggle = toggles[toggles.length - 1];
  const prevToggle =
    currentIndex !== 0 ? toggles[currentIndex - 1] : lastToggle;
  const nextToggle =
    currentIndex !== toggles.length - 1
      ? toggles[currentIndex + 1]
      : firstToggle;

  switch (event.key) {
    case UP:
      if (orientation === 'vertical') toggle(event, prevToggle, current);
      break;
    case DOWN:
      if (orientation === 'vertical') toggle(event, nextToggle, current);
      break;
    case LEFT:
      if (orientation === 'horizontal') toggle(event, prevToggle, current);
      break;
    case RIGHT:
      if (orientation === 'horizontal') toggle(event, nextToggle, current);
      break;
    default:
      break;
  }
}

/**
 * Initiate arrow keys functionality on an element
 * @param root Element to add arrow keys to
 * @param toggleProp Query selector prop for child toggles
 * @returns
 */
function on(root: Element, toggleProp: string) {
  const orientation = root.getAttribute(
    'aria-orientation',
  ) as Orientation | null;

  // If no orientation is specified, return
  if (!orientation || !['vertical', 'horizontal'].includes(orientation)) return;

  root.addEventListener('keydown', (e) => keydown(e, root, toggleProp));
}

/**
 * Tear down arrow keys functionality
 * @param el Arrow keys element to teardown
 * @returns
 */
function off(root: Element, toggleProp: string) {
  const orientation = root.getAttribute('aria-orientation') as
    | 'horizontal'
    | 'vertical'
    | null;

  // If no orientation is specified, return
  if (!orientation || !['vertical', 'horizontal'].includes(orientation)) return;

  root.removeEventListener('keydown', (e) => keydown(e, root, toggleProp));
}

/**
 * Arrow key functionality based on aria-orientation
 */
const arrowKeys = {
  on,
  off,
};

export default arrowKeys;
