import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
}

type TabsListProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const TabsList = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, ...rest }: TabsListProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return <Component {...rest} ref={ref} data-tabs-list />;
  },
);

TabsList.displayName = 'TabsList';

export default TabsList;
