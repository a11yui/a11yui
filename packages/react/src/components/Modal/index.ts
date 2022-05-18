/* eslint-disable @typescript-eslint/no-unused-vars */
import { default as Main, ModalProps } from './Modal';
import { default as Content, ModalContentProps } from './Content';
import { default as Heading, ModalHeadingProps } from './Heading';

const Modal = Object.assign(Main, { Content, Heading });

export { Modal };
