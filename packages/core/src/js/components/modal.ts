import uniqueId from 'lodash.uniqueid';
import { focusTrap } from '../utils';

// Data properties
const BODY_MODAL_OPEN = 'a11y-modal-open';
const MODAL = 'a11y-modal';
const MODAL_FORCE_ACTION = 'a11y-modal-force-action';
const MODAL_HEADING = 'a11y-modal-heading';
const MODAL_CONTENT = 'a11y-modal-content';
const CLOSE_MODAL = 'data-modal-close';

// Checks if element is modal
function isModal(el: Element) {
  return el.classList.contains(MODAL);
}

/**
 * Toggles provided modal element
 * @param el Modal element to toggle
 * @param state Open or close modal, if none provided it toggles
 * @returns
 */
function toggle(el: Element, state?: 'open' | 'close') {
  // If element does not have modal attribute, return
  if (!isModal(el)) return;

  const isOpen = el.getAttribute('aria-hidden') === 'false';

  switch (state) {
    case 'open':
      if (isOpen) return;
      el.setAttribute('aria-hidden', 'false');

      break;

    case 'close':
      if (!isOpen) return;
      el.setAttribute('aria-hidden', 'true');

      break;

    default:
      el.setAttribute('aria-hidden', (!isOpen).toString());

      break;
  }

  if (el.getAttribute('aria-hidden') === 'false') {
    document.body.classList.add(BODY_MODAL_OPEN);
    focusTrap.on(el);
    document.body.addEventListener('keydown', (e: Event) => escClose(e, el));
  } else {
    document.body.classList.remove(BODY_MODAL_OPEN);
    focusTrap.off(el);
    document.body.removeEventListener('keydown', (e: Event) => escClose(e, el));
  }
}

// Modal background click
function modalClick(e: Event) {
  const modal = <HTMLElement>e.target;

  if (
    modal !== e.currentTarget ||
    modal.classList.contains(MODAL_FORCE_ACTION)
  ) {
    return;
  }

  toggle(modal, 'close');
}

// Close modal with escape key
function escClose(e: Event, modal: Element) {
  if (
    modal.getAttribute('aria-hidden') === 'true' ||
    modal.classList.contains(MODAL_FORCE_ACTION)
  ) {
    return;
  }

  const event = <KeyboardEvent>e;

  if (event.key === 'Escape') {
    toggle(modal, 'close');
  }
}

/**
 * Initiate a modal element
 * @param el Element to add modal to
 * @returns
 */
function on(el: Element) {
  // If element does not have modal attribute, return
  if (!isModal(el)) return;

  const modalId = el.getAttribute('id');
  const hiddenAttr = el.getAttribute('aria-hidden');

  el.setAttribute('role', 'dialog');
  if (!hiddenAttr) el.setAttribute('aria-hidden', 'true');

  // Modal elements
  const heading = el.querySelector(`.${MODAL_HEADING}`);
  const content = el.querySelector(`.${MODAL_CONTENT}`);

  const elementsId = uniqueId();

  // Add aria attributes for heading
  if (heading) {
    const headingId =
      heading.getAttribute('id') || `modal-heading-${elementsId}`;

    heading.setAttribute('id', headingId);
    el.setAttribute('aria-labelledby', headingId);
  }

  // Add aria attributes for content
  if (content) {
    const contentId =
      content.getAttribute('id') || `modal-content-${elementsId}`;

    content.setAttribute('id', contentId);
    el.setAttribute('aria-describedby', contentId);
  }

  // Modal event listeners
  el.addEventListener('click', modalClick);

  // Event listeners for open elements outside modal
  if (modalId) {
    const outerToggles = document.querySelectorAll(
      `*:not(#${modalId}) [aria-controls="${modalId}"]`,
    );

    for (let i = 0; i < outerToggles.length; i++) {
      const element = outerToggles[i];

      element.addEventListener('click', () => toggle(el, 'open'));
    }
  }

  // Inner elements that close the modal
  const closeToggles = el.querySelectorAll(`[${CLOSE_MODAL}="true"]`);

  // Event listeners for close elements in the modal
  for (let i = 0; i < closeToggles.length; i++) {
    const element = closeToggles[i];

    element.addEventListener('click', () => toggle(el, 'close'));
  }
}

/**
 * Tear down a modal element
 * @param el Modal element to teardown
 * @returns
 */
function off(el: Element) {
  // If element does not have modal attribute, return
  if (!isModal(el)) return;

  const modalId = el.getAttribute('id');

  // Remove modal event listeners
  el.removeEventListener('click', modalClick);
  document.body.removeEventListener('keydown', (e: Event) => escClose(e, el));

  // Event listeners for open elements outside modal
  if (modalId) {
    const outerToggles = document.querySelectorAll(
      `*:not(#${modalId}) [aria-controls="${modalId}"]`,
    );

    for (let i = 0; i < outerToggles.length; i++) {
      const element = outerToggles[i];

      element.removeEventListener('click', () => toggle(el, 'open'));
    }
  }

  // Inner elements that close the modal
  const closeToggles = el.querySelectorAll(`[${CLOSE_MODAL}="true"]`);

  // Event listeners for close elements in the modal
  for (let i = 0; i < closeToggles.length; i++) {
    const element = closeToggles[i];

    element.removeEventListener('click', () => toggle(el, 'close'));
  }
}

const modal = {
  on,
  off,
  toggle,
};

export default modal;
