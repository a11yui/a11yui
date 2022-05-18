/* eslint-disable @typescript-eslint/no-unused-vars */
import { default as Main, TabsProps } from './Tabs';
import { default as List, TabsListProps } from './List';
import { default as Panel, TabsPanelProps } from './Panel';
import { default as Toggle, TabsToggleProps } from './Toggle';

const Tabs = Object.assign(Main, { List, Panel, Toggle });

export { Tabs };
