<script lang="ts">
  import {
    Accordion,
    Modal,
    Tabs,
  } from './lib'
</script>

<main>
  <Accordion>
    <Accordion.Item>
      <Accordion.Toggle>Title</Accordion.Toggle>
      <Accordion.Content>Content</Accordion.Content>
    </Accordion.Item>
  </Accordion>

  <button aria-controls="modal">
    Modal
  </button>

  <Modal id="modal">
    <Modal.Heading>Title</Modal.Heading>
    <Modal.Content>Content</Modal.Content>
    <button data-modal-close>Cancel</button>
  </Modal>

  <Tabs>
    <Tabs.List>
      <Tabs.Toggle>One</Tabs.Toggle>
      <Tabs.Toggle>Two</Tabs.Toggle>
      <Tabs.Toggle>Three</Tabs.Toggle>
    </Tabs.List>
    <Tabs.Panel>One content</Tabs.Panel>
    <Tabs.Panel>Two content</Tabs.Panel>
    <Tabs.Panel>Three content</Tabs.Panel>
  </Tabs>
</main>

