import { forwardRef } from 'react';
import { createClassString } from '@shared/utils';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  className?: string;
}

export type ModalHeadingProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const ModalHeading = forwardRef(
  <C extends React.ElementType = 'h2'>(
    { as, className, ...rest }: ModalHeadingProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'h2';

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString(
          'a11y-modal-heading',
          className ? className : '',
        )}
      />
    );
  },
);

ModalHeading.displayName = 'ModalHeading';

export default ModalHeading;
