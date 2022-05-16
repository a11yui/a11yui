import { forwardRef, useEffect } from 'react';
import { tabs } from '@a11yui/core';
import { createClassString } from '@internal/utils';
import { useForwardedRef } from '../../hooks';

import List from './List';
import Panel from './Panel';
import Toggle from './Toggle';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../types';

import './tabs.scss';

interface Props {
  className?: string;
}

type TabsProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  Props
>;

export const TabsComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, ...rest }: TabsProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    const safeRef = useForwardedRef(ref);

    useEffect(() => {
      const containerEl = safeRef?.current;
      if (!containerEl || !tabs) return;

      tabs.on(containerEl);

      return () => {
        tabs.off(containerEl);
      };
    }, []);

    return (
      <Component
        {...rest}
        ref={safeRef}
        className={createClassString('a11y-tabs', className ? className : '')}
      />
    );
  },
);

TabsComponent.displayName = 'Tabs';

const Tabs = Object.assign(TabsComponent, { List, Panel, Toggle });

export default Tabs;
