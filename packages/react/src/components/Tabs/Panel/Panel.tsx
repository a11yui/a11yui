import { forwardRef } from 'react';
import { createClassString } from '@internal/utils';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  className?: string;
}

type TabsPanelProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const TabsPanel = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, ...rest }: TabsPanelProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString(
          'a11y-tabs-panel',
          className ? className : '',
        )}
      />
    );
  },
);

TabsPanel.displayName = 'TabsPanel';

export default TabsPanel;
