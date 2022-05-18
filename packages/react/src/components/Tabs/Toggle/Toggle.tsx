import { forwardRef } from 'react';
import { createClassString } from '@shared/utils';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  className?: string;
}

export type TabsToggleProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const TabsToggle = forwardRef(
  <C extends React.ElementType = 'button'>(
    { as, className, ...rest }: TabsToggleProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'button';

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString(
          'a11y-tabs-toggle',
          className ? className : '',
        )}
      />
    );
  },
);

TabsToggle.displayName = 'TabsToggle';

export default TabsToggle;
