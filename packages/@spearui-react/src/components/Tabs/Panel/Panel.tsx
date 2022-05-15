import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
}

type TabsPanelProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const TabsPanel = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, ...rest }: TabsPanelProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return <Component {...rest} ref={ref} data-tabs-panel />;
  },
);

TabsPanel.displayName = 'TabsPanel';

export default TabsPanel;
