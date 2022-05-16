import { useEffect } from 'react';
import { accordion } from '@a11yui/core';
import { createClassString } from '@internal/utils';
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
  className?: string;
  multiselect?: boolean;
}

type AccordionComponentProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const AccordionComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, multiselect, ...rest }: AccordionComponentProps<C>,
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
        className={createClassString(
          'a11y-accordion',
          className ? className : '',
        )}
        aria-multiselectable={multiselect}
      />
    );
  },
);

AccordionComponent.displayName = 'Accordion';

const Accordion = Object.assign(AccordionComponent, { Content, Item, Toggle });

export default Accordion;
