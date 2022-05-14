import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
}

type ContentProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const Content = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, ...rest }: ContentProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return <Component {...rest} ref={ref} data-modal-content />;
  },
);

Content.displayName = 'ModalContent';

export default Content;
