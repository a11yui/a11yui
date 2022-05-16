import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
}

type TabsToggleProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const TabsToggle = forwardRef(
  <C extends React.ElementType = 'button'>(
    { as, ...rest }: TabsToggleProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'button';

    return <Component {...rest} ref={ref} data-tabs-toggle />;
  },
);

TabsToggle.displayName = 'TabsToggle';

export default TabsToggle;
