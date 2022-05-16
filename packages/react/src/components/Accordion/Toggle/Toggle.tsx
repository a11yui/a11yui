import { forwardRef } from 'react';
import { createClassString } from '@internal/utils';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  className?: string;
}

type AccordionToggleProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const AccordionToggle = forwardRef(
  <C extends React.ElementType = 'button'>(
    { as, className, ...rest }: AccordionToggleProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'button';

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString(
          'a11y-accordion-toggle',
          className ? className : '',
        )}
      />
    );
  },
);

AccordionToggle.displayName = 'AccordionToggle';

export default AccordionToggle;
