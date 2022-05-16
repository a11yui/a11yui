import { Accordion, Modal, Tabs } from './components';

function App() {
  return (
    <>
      <h2>Accordion</h2>

      <Accordion multiselect>
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

      <h2>Tabs</h2>

      <Tabs>
        <Tabs.List>
          <Tabs.Toggle>One</Tabs.Toggle>
          <Tabs.Toggle>Two</Tabs.Toggle>
          <Tabs.Toggle>Three</Tabs.Toggle>
        </Tabs.List>

        <Tabs.Panel>Content one</Tabs.Panel>
        <Tabs.Panel>Content two</Tabs.Panel>
        <Tabs.Panel>Content three</Tabs.Panel>
      </Tabs>
    </>
  );
}

export default App;
