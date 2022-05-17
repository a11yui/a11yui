import { forwardRef } from 'react';
import { createClassString } from '@shared/utils';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  className?: string;
  expanded?: boolean;
}

type AccordionItemProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const AccordionItem = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, expanded, ...rest }: AccordionItemProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString(
          'a11y-accordion-item',
          expanded ? 'expanded' : '',
          className ? className : '',
        )}
      />
    );
  },
);

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
