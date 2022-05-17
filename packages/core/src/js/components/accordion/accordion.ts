import uniqueId from 'lodash.uniqueid';

// Data properties
const ACCORDION = 'a11y-accordion';
const ACCORDION_ITEM = 'a11y-accordion-item';
const ACCORDION_EXPANDED = 'expanded';
const ACCORDION_TOGGLE = 'a11y-accordion-toggle';
const ACCORDION_CONTENT = 'a11y-accordion-content';

// Checks if element is accordion
function isAccordion(el: Element) {
  return el.classList.contains(ACCORDION);
}

// Toggle the accordion
function toggle(e: Event) {
  // Accordion elements
  const button = <HTMLElement>e.target;
  const accordion = button.closest(`.${ACCORDION}`);
  const item = button.closest(`.${ACCORDION_ITEM}`);
  const content = item?.querySelector(`.${ACCORDION_CONTENT}`);

  // Is it currently expanded?
  const expanded = button?.getAttribute('aria-expanded') === 'true';

  // Auto-collapse siblings if not multiselectable
  if (accordion && accordion?.getAttribute('aria-multiselectable') !== 'true') {
    // All accordion items
    const items = accordion?.querySelectorAll(
      `.${ACCORDION_ITEM}.${ACCORDION_EXPANDED}`,
    );

    if (items) {
      for (let i = 0; i < items.length; i++) {
        const element = items[i];
        // Remove class from siblings
        element.classList.remove(ACCORDION_EXPANDED);

        element
          .querySelector(`.${ACCORDION_TOGGLE}`)
          ?.setAttribute('aria-expanded', 'false');
        element
          .querySelector(`.${ACCORDION_CONTENT}`)
          ?.setAttribute('aria-hidden', 'true');
      }
    }
  }

  // Toggle expanded attribute on item
  if (expanded) {
    item?.classList.remove(ACCORDION_EXPANDED);
  } else {
    item?.classList.add(ACCORDION_EXPANDED);
  }

  // Toggle expanded attribute on button
  button?.setAttribute('aria-expanded', (!expanded).toString());

  // Toggle hidden attribute on content
  content?.setAttribute('aria-hidden', expanded.toString());
}

/**
 * Initiate an accordion element
 * @param el Element to add accordion to
 * @returns
 */
function on(el: Element) {
  // If element does not have accordion attribute, return
  if (!isAccordion(el)) return;

  // All accordion items
  const items = el.querySelectorAll(`.${ACCORDION_ITEM}`);

  // Loop through items
  for (let i = 0; i < items.length; i++) {
    // Accordion item
    const item = items[i];

    // Variables
    const id = item.getAttribute('id') || uniqueId('accordion-content-');
    const expanded = item.classList.contains(ACCORDION_EXPANDED);

    // Accordion item elements
    const button = item.querySelector(`.${ACCORDION_TOGGLE}`);
    const content = item.querySelector(`.${ACCORDION_CONTENT}`);

    // Set accessibility attributes
    if (expanded) button?.setAttribute('aria-expanded', 'true');
    button?.setAttribute('aria-controls', id);
    content?.setAttribute('id', id);
    content?.setAttribute('aria-hidden', (!expanded).toString());

    // Listen for button click
    button?.addEventListener('click', toggle);
  }
}

/**
 * Tear down an accordion element
 * @param el Accordion element to teardown
 * @returns
 */
function off(el: Element) {
  // If element does not have accordion attribute, return
  if (!isAccordion(el)) return;

  // All accordion items
  const items = el.querySelectorAll(`.${ACCORDION_ITEM}`);

  // Loop through items
  for (let i = 0; i < items.length; i++) {
    // Accordion item
    const item = items[i];

    // Accordion item toggle button
    const button = item.querySelector(`.${ACCORDION_TOGGLE}`);

    // Remove button click listener
    button?.removeEventListener('click', toggle);
  }
}

/**
 * Accordion element
 */
const accordion = {
  on,
  off,
};

export default accordion;
