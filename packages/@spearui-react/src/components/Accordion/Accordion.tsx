import { useEffect } from 'react';
import { accordion } from '@spearui/core';
import { useForwardedRef } from '../../hooks';

import Content from './Content';
import Item from './Item';
import Toggle from './Toggle';

import './accordion.scss';

import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../types';

interface Props {
  children?: React.ReactNode;
  multiselect?: boolean;
}

type AccordionComponentProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const AccordionComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, multiselect, ...rest }: AccordionComponentProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    const safeRef = useForwardedRef(ref);

    useEffect(() => {
      const containerEl = safeRef?.current;
      if (!containerEl || !accordion) return;

      accordion.on(containerEl);

      return () => {
        accordion.off(containerEl);
      };
    }, []);

    return (
      <Component
        {...rest}
        ref={safeRef}
        data-accordion
        aria-multiselectable={multiselect}
      />
    );
  },
);

AccordionComponent.displayName = 'Accordion';

const Accordion = Object.assign(AccordionComponent, { Content, Item, Toggle });

export default Accordion;
