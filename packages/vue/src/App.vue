<script setup lang="ts">
import { Accordion, Modal, Tabs } from './components';
</script>

<template>
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
  </Accordion>

  <button aria-controls="modal">Modal</button>
  <Modal id="modal">
    <Modal.Heading>Title</Modal.Heading>
    <Modal.Content><button data-modal-close>Cancel</button></Modal.Content>
  </Modal>

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
</template>
