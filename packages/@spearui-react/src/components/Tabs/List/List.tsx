import { forwardRef } from 'react';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  children?: React.ReactNode;
  vertical?: boolean;
}

type TabsListProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const TabsList = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, vertical, ...rest }: TabsListProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        {...rest}
        ref={ref}
        data-tabs-list
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
      />
    );
  },
);

TabsList.displayName = 'TabsList';

export default TabsList;
