---
sidebar_position: 2
---

# Installation

A11y UI is available in a range of frameworks and packages, which can be used in almost any website or application.

## Javascript


## React

Install the package:

```bash
# NPM
npm i @a11yui/react

# Yarn
yarn add @a11yui/react
```

Use the components:

```jsx
import { Accordion } from '@a11yui/react';

export default function App() {
  return (
    <Accordion>
      ...
    </Accordion>
  )
}
```

## Svelte

Install the package:

```bash
# NPM
npm i -D @a11yui/svelte

# Yarn
yarn add -D @a11yui/svelte
```

Use the components:

```jsx
<script lang="ts">
  import { Accordion } from '@a11yui/svelte';
</script>

<main>
  <Accordion>
    ...
  </Accordion>
</main>
```

## Vue

Install the package:

```bash
# NPM
npm i @a11yui/vue

# Yarn
yarn add @a11yui/vue
```

Use the components:

```jsx
<script setup lang="ts">
import { Accordion } from '@a11yui/vue';
</script>

<template>
  <Accordion>
    ...
  </Accordion>
</template>
```
