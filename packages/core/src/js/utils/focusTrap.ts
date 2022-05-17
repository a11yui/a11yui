// Arrow key focus
function tabFocus(e: Event, firstEl: HTMLElement, lastEl: HTMLElement) {
  const event = <KeyboardEvent>e;

  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (document.activeElement === firstEl) {
        lastEl.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastEl) {
        firstEl.focus();
        event.preventDefault();
      }
    }
  }
}

// HTML elements that can be focused
const focusableEls = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
  .map((selector) => `${selector}:not([tabindex='-1'])`)
  .join(',');

/**
 * Initiate a focus trap
 * @param el Element to add focus trap to
 * @returns
 */
function on(el: Element) {
  const elements = el.querySelectorAll<HTMLElement>(focusableEls);

  if (elements.length === 0) {
    console.warn(
      // eslint-disable-next-line max-len
      'No focusable elements: There should be at least one focusable element in the focus trap',
    );
  }

  const firstEl = elements[0];
  const lastEl = elements[elements.length - 1];

  firstEl.focus();

  el.addEventListener('keydown', (e: Event) => tabFocus(e, firstEl, lastEl));
}

/**
 * Tear down focus trap
 * @param el Focus trap element to teardown
 * @returns
 */
function off(el: Element) {
  const elements = el.querySelectorAll<HTMLElement>(focusableEls);

  const firstEl = elements[0];
  const lastEl = elements[elements.length - 1];

  el.removeEventListener('keydown', (e: Event) => tabFocus(e, firstEl, lastEl));
}

/**
 * Trap focus inside an element
 */
const focusTrap = {
  on,
  off,
};

export default focusTrap;
