import modal from './modal';

function getContainer() {
  const div = document.createElement('div');
  div.innerHTML = `
    <button aria-controls="modal">Toggle</button>
    <div class="a11y-modal" id="modal">
      <div class="a11y-modal-heading">
        Title
      </div>
      <div class="a11y-modal-content">
        Content
        <button data-close-modal>Close</button>
      </div>
    </div>
  `;

  return div;
}

describe('Modal', () => {
  const container = getContainer();

  const modalEl = container.querySelector('#modal');

  if (!modalEl) throw Error('No modal found');

  // Init modal
  modal.on(modalEl);

  // Elements
  const toggle = container.querySelector('[aria-controls="modal"]');
  const heading = container.querySelector('.a11y-modal-heading');
  const content = container.querySelector('.a11y-modal-content');
  const button = container.querySelector('[aria-controls="modal"]');

  if (!toggle || !heading || !content || !button) {
    throw Error('Elements not found');
  }

  test('items have attributes', async () => {
    expect(modalEl.getAttribute('role')).toEqual('dialog');
    expect(modalEl.getAttribute('aria-hidden')).toEqual('true');
    expect(modalEl.getAttribute('aria-labelledby')).toEqual(
      heading.getAttribute('id'),
    );
    expect(modalEl.getAttribute('aria-describedby')).toEqual(
      content.getAttribute('id'),
    );
  });

  test('is opened', async () => {
    // Toggle modal
    (button as HTMLElement).click();

    expect(document.body.classList.contains('a11y-modal-open')).toBeTruthy();
    expect(modalEl.getAttribute('aria-hidden')).toEqual('false');
  });
});
