import uniqueId from 'lodash.uniqueid';

// Data properties
const TABS = 'data-tabs';
const TABS_LIST = 'data-tabs-list';
const TABS_TOGGLE = 'data-tabs-toggle';
const TABS_PANEL = 'data-tabs-panel';

function isTabs(el: Element) {
  return el.getAttribute(TABS) === 'true';
}

function clickTab(e: Event) {
  const button = <HTMLElement>e.target;

  // Tab already selected
  if (button.getAttribute('aria-selected') === 'true') return;

  // Tab elements
  const tabs = button.closest(`[${TABS}]`);
  const activeToggle = tabs?.querySelector(
    `[${TABS_TOGGLE}][aria-selected="true"]`,
  );
  const activePanel = tabs?.querySelector(
    `[${TABS_PANEL}][aria-hidden="false"]`,
  );
  const panelId = button.getAttribute('aria-controls');
  const newPanel = tabs?.querySelector(`#${panelId}`);

  // Deselect active tab/panel
  activeToggle?.setAttribute('aria-selected', 'false');
  activePanel?.setAttribute('aria-hidden', 'true');

  // Select current panel
  button.setAttribute('aria-selected', 'true');
  newPanel?.setAttribute('aria-hidden', 'false');
}

function on(el: Element) {
  // If element does not have tabs attribute, return
  if (!isTabs(el)) return;

  const toggles = el.querySelectorAll(`[${TABS_TOGGLE}]`);
  const panels = el.querySelectorAll(`[${TABS_PANEL}]`);

  if (toggles.length !== panels.length) {
    throw Error('Number of tabs does not match number of tab panels');
  }

  // Add tablist attribute
  const tabList = el.querySelector(`[${TABS_LIST}]`);

  tabList?.setAttribute('role', 'tablist');

  const combined = [];

  // Match tab to content
  for (let i = 0; i < toggles.length; i++) {
    const toggle = toggles[i];

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
      element.tab.setAttribute('tab-index', '0');
      element.panel.setAttribute('aria-hidden', 'false');
    } else {
      element.tab.setAttribute('aria-selected', 'false');
      element.tab.setAttribute('tab-index', '-1');
      element.panel.setAttribute('aria-hidden', 'true');
    }

    // Add event listeners to tab buttons
    element.tab.addEventListener('click', clickTab);
  }
}

function off(el: Element) {
  // If element does not have tabs attribute, return
  if (!isTabs(el)) return;

  const toggles = el.querySelectorAll(`[${TABS_TOGGLE}]`);

  for (let i = 0; i < toggles.length; i++) {
    const element = toggles[i];

    element.removeEventListener('click', clickTab);
  }
}

const tabs = {
  on,
  off,
};

export default tabs;

/*

<div data-tabs>
  <div data-tabs-list role='tablist'>
    <button data-tabs-toggle id="tab-one" aria-controls="panel-one" role="tab" aria-selected></button>
    <button data-tabs-toggle id="tab-two" aria-controls="panel-two" role="tab" aria-selected="false" tab-index="-1"></button>
  </div>

  <div data-tabs-panel id="panel-one" aria-labelledby="tab-one" role='tabpanel' aria-hidden="false"></div>
  <div data-tabs-panel id="panel-two" aria-labelledby="tab-two" role='tabpanel' aria-hidden="true"></div>
</div>

*/
