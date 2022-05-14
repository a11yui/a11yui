import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
}

type HeadingProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const Heading = forwardRef(
  <C extends React.ElementType = 'h2'>(
    { as, ...rest }: HeadingProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'h2';

    return <Component {...rest} ref={ref} data-modal-heading />;
  },
);

Heading.displayName = 'ModalHeading';

export default Heading;
