import uniqueId from 'lodash.uniqueid';
import { arrowKeys } from '../../utils';

// Data properties
const TABS = 'a11y-tabs';
const TABS_LIST = 'a11y-tabs-list';
const TABS_TOGGLE = 'a11y-tabs-toggle';
const TABS_PANEL = 'a11y-tabs-panel';

// Checks if element is tabs
function isTabs(el: Element) {
  return el.classList.contains(TABS);
}

//Tab is clicked
function clickTab(e: Event) {
  const button = <HTMLElement>e.target;

  // Tab already selected
  if (button.getAttribute('aria-selected') === 'true') return;

  // Tab elements
  const tabs = button.closest(`.${TABS}`);
  const activeToggle = tabs?.querySelector(
    `.${TABS_TOGGLE}[aria-selected="true"]`,
  );

  // Deselect active tab/panel
  activeToggle?.setAttribute('aria-selected', 'false');
  activeToggle?.setAttribute('tabindex', '-1');

  // Select current panel
  button.setAttribute('aria-selected', 'true');
  button.setAttribute('tabindex', '0');
}

const toggleObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const target = mutation.target as HTMLElement;
    const id = target.getAttribute('aria-controls');
    const selected = target.getAttribute('aria-selected');
    const value = selected !== 'true';

    if (!value) target.focus();

    if (!id) return;

    document.getElementById(id)?.setAttribute('aria-hidden', value.toString());
  });
});

/**
 * Initiate a tabs element
 * @param el Element to add tabs to
 * @returns
 */
function on(el: Element) {
  // If element does not have tabs attribute, return
  if (!isTabs(el)) return;

  const toggles = el.querySelectorAll(`.${TABS_TOGGLE}`);
  const panels = el.querySelectorAll(`.${TABS_PANEL}`);

  if (toggles.length !== panels.length) {
    throw Error('Number of tabs does not match number of tab panels');
  }

  // Add tablist attribute
  const tabList = el.querySelector(`.${TABS_LIST}`);

  if (tabList) {
    if (!tabList?.getAttribute('aria-orientation')) {
      tabList.setAttribute('aria-orientation', 'horizontal');
    }

    arrowKeys.on(tabList, `.${TABS_TOGGLE}`);
  }

  tabList?.setAttribute('role', 'tablist');

  const combined = [];

  // Match tab to content
  for (let i = 0; i < toggles.length; i++) {
    const toggle = toggles[i];

    toggleObserver.observe(toggle, {
      attributes: true,
      attributeFilter: ['aria-selected'],
    });

    combined.push({ tab: toggle, panel: panels[i] });
  }

  // Add attributes to tabs/panels
  for (let i = 0; i < combined.length; i++) {
    const element = combined[i];
    const id = uniqueId();

    // Set tab attributes
    element.tab.setAttribute('id', `tab-${id}`);
    element.tab.setAttribute('aria-controls', `panel-${id}`);
    element.tab.setAttribute('role', 'tab');

    // Set panel attributes
    element.panel.setAttribute('id', `panel-${id}`);
    element.panel.setAttribute('aria-labelledby', `tab-${id}`);
    element.panel.setAttribute('role', 'tabpanel');

    // Set first item attributes
    if (i === 0) {
      element.tab.setAttribute('aria-selected', 'true');
      element.tab.setAttribute('tabindex', '0');
    } else {
      element.tab.setAttribute('aria-selected', 'false');
      element.tab.setAttribute('tabindex', '-1');
    }

    // Add event listeners to tab buttons
    element.tab.addEventListener('click', clickTab);
  }
}

/**
 * Tear down a tabs element
 * @param el Tabs element to teardown
 * @returns
 */
function off(el: Element) {
  // If element does not have tabs attribute, return
  if (!isTabs(el)) return;

  toggleObserver.disconnect();

  const toggles = el.querySelectorAll(`.${TABS_TOGGLE}`);

  const tabList = el.querySelector(`.${TABS_LIST}`);

  if (tabList) arrowKeys.off(tabList, `.${TABS_TOGGLE}`);

  for (let i = 0; i < toggles.length; i++) {
    const element = toggles[i];

    element.removeEventListener('click', clickTab);
  }
}

/**
 * Tabs element
 */
const tabs = {
  on,
  off,
};

export default tabs;
