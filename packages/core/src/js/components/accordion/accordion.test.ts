import accordion from './accordion';

function getContainer() {
  const div = document.createElement('div');
  div.classList.add('a11y-accordion');
  div.innerHTML = `
    <div class="a11y-accordion-item">
      <button class="a11y-accordion-toggle">Toggle</button>
      <div class="a11y-accordion-content">
        Content
      </div>
    </div>
    <div class="a11y-accordion-item">
      <button class="a11y-accordion-toggle">Toggle</button>
      <div class="a11y-accordion-content">
        Content
      </div>
    </div>
    <div class="a11y-accordion-item">
      <button class="a11y-accordion-toggle">Toggle</button>
      <div class="a11y-accordion-content">
        Content
      </div>
    </div>
  `;

  return div;
}

describe('Accordion', () => {
  const container = getContainer();

  // Init accordion
  accordion.on(container);

  const firstItem = container.querySelector('.a11y-accordion-item');
  const firstButton = firstItem?.querySelector('.a11y-accordion-toggle');
  const firstContent = firstItem?.querySelector('.a11y-accordion-content');

  const secondItem = container.querySelectorAll('.a11y-accordion-item')[1];
  const secondButton = secondItem?.querySelector('.a11y-accordion-toggle');
  // const secondContent = secondItem?.querySelector('.a11y-accordion-content');

  if (!firstItem || !firstButton || !firstContent) {
    throw Error('Elements not found');
  }

  test('items have aria attributes', async () => {
    expect(firstButton.getAttribute('aria-controls')).toEqual(
      firstContent.getAttribute('id'),
    );
    expect(firstContent.getAttribute('aria-hidden')).toEqual('true');
  });

  test('is opened', () => {
    // Toggle accordion
    (firstButton as HTMLElement).click();

    expect(firstItem.classList.contains('expanded')).toBeTruthy();
    expect(firstButton.getAttribute('aria-expanded')).toEqual('true');
    expect(firstContent.getAttribute('aria-hidden')).toEqual('false');
  });

  test('is closed', () => {
    // Toggle accordion
    (firstButton as HTMLElement).click();

    expect(firstItem.classList.contains('expanded')).toBeFalsy();
    expect(firstButton.getAttribute('aria-expanded')).toEqual('false');
    expect(firstContent.getAttribute('aria-hidden')).toEqual('true');
  });

  test('toggle closes siblings', () => {
    (firstButton as HTMLElement).click();

    expect(firstItem.classList.contains('expanded')).toBeTruthy();

    (secondButton as HTMLElement).click();

    expect(secondItem.classList.contains('expanded')).toBeTruthy();
    expect(firstItem.classList.contains('expanded')).toBeFalsy();
  });
});
