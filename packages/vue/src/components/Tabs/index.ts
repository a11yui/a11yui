import { default as Main } from './Tabs.vue';
import { default as List } from './List';
import { default as Panel } from './Panel';
import { default as Toggle } from './Toggle';

const Tabs = Object.assign(Main, { List, Panel, Toggle });

export { Tabs };
