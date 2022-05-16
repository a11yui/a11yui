import { default as Main } from './Accordion.svelte';
import { default as Content } from './Content';
import { default as Item } from './Item';
import { default as Toggle } from './Toggle';

const Accordion = Object.assign(Main, { Content, Item, Toggle });

export { Accordion };
