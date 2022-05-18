/* eslint-disable @typescript-eslint/no-unused-vars */
import { default as Main, AccordionProps } from './Accordion';
import { default as Content, AccordionContentProps } from './Content';
import { default as Item, AccordionItemProps } from './Item';
import { default as Toggle, AccordionToggleProps } from './Toggle';

const Accordion = Object.assign(Main, { Content, Item, Toggle });

export { Accordion };
