import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
}

type ModalHeadingProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const ModalHeading = forwardRef(
  <C extends React.ElementType = 'h2'>(
    { as, ...rest }: ModalHeadingProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'h2';

    return <Component {...rest} ref={ref} data-modal-heading />;
  },
);

ModalHeading.displayName = 'ModalHeading';

export default ModalHeading;
