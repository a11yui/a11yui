import tabs from './tabs';

function getContainer() {
  const div = document.createElement('div');
  div.classList.add('a11y-tabs');
  div.innerHTML = `
    <div class="a11y-tabs-list">
      <button class="a11y-tabs-toggle">One</button>
      <button class="a11y-tabs-toggle">Two</button>
      <button class="a11y-tabs-toggle">Three</button>
    </div>

    <div class="a11y-tabs-panel">Content one</div>
    <div class="a11y-tabs-panel">Content two</div>
    <div class="a11y-tabs-panel">Content three</div>
  `;

  return div;
}

describe('Tabs', () => {
  const container = getContainer();

  // Init accordion
  tabs.on(container);

  const list = container.querySelector('.a11y-tabs-list');

  const toggles = container.querySelectorAll('.a11y-tabs-toggle');
  const panels = container.querySelectorAll('.a11y-tabs-panel');

  if (!list) {
    throw Error('Elements not found');
  }

  test('items have attributes', async () => {
    expect(list.getAttribute('aria-orientation')).toEqual('horizontal');
    expect(list.getAttribute('role')).toEqual('tablist');

    expect(toggles[0].getAttribute('role')).toEqual('tab');
    expect(toggles[0].getAttribute('aria-selected')).toEqual('true');
    expect(toggles[0].getAttribute('tabindex')).toEqual('0');

    expect(panels[0].getAttribute('role')).toEqual('tabpanel');
    expect(panels[0].getAttribute('aria-hidden')).toEqual('true');

    expect(toggles[0].getAttribute('id')).toEqual(
      panels[0].getAttribute('aria-labelledby'),
    );
    expect(panels[0].getAttribute('id')).toEqual(
      toggles[0].getAttribute('aria-controls'),
    );
  });
});
