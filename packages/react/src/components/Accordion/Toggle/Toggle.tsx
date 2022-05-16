import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
}

type AccordionToggleProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const AccordionToggle = forwardRef(
  <C extends React.ElementType = 'button'>(
    { as, ...rest }: AccordionToggleProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'button';

    return <Component {...rest} ref={ref} data-accordion-toggle />;
  },
);

AccordionToggle.displayName = 'AccordionToggle';

export default AccordionToggle;
