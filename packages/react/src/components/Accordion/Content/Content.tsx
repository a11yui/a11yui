import { forwardRef } from 'react';
import { createClassString } from '@shared/utils';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  className?: string;
}

export type AccordionContentProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const AccordionContent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, ...rest }: AccordionContentProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString(
          'a11y-accordion-content',
          className ? className : '',
        )}
      />
    );
  },
);

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
