import { default as Main } from './Modal.vue';
import { default as Content } from './Content';
import { default as Heading } from './Heading';

const Modal = Object.assign(Main, { Content, Heading });

export { Modal };
