import { Accordion, Modal } from './components';

function App() {
  return (
    <>
      <h2>Accordion</h2>

      <Accordion>
        <Accordion.Item>
          <Accordion.Toggle>Title</Accordion.Toggle>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Toggle>Title</Accordion.Toggle>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Toggle>Title</Accordion.Toggle>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Toggle>Title</Accordion.Toggle>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <h2>Modal</h2>

      <button aria-controls="modal-example">Open modal</button>

      <Modal id="modal-example">
        <div>
          <Modal.Heading>Title</Modal.Heading>
          <Modal.Content>
            <button data-modal-close>Cancel</button>
          </Modal.Content>
        </div>
      </Modal>
    </>
  );
}

export default App;
