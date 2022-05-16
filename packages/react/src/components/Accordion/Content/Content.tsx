import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
}

type AccordionContentProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const AccordionContent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, ...rest }: AccordionContentProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return <Component {...rest} ref={ref} data-accordion-content />;
  },
);

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
