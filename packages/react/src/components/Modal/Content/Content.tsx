import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
}

type ModalContentProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const ModalContent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, ...rest }: ModalContentProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return <Component {...rest} ref={ref} data-modal-content />;
  },
);

ModalContent.displayName = 'ModalContent';

export default ModalContent;
