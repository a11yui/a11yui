import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
  expanded?: boolean;
}

type AccordionItemProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const AccordionItem = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, expanded, ...rest }: AccordionItemProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        {...rest}
        ref={ref}
        data-accordion-item
        data-accordion-expanded={expanded}
      />
    );
  },
);

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
