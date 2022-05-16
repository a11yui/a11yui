import { forwardRef } from 'react';
import { createClassString } from '@internal/utils';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types';

interface Props {
  className?: string;
  vertical?: boolean;
}

type TabsListProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>;

export const TabsList = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, vertical, ...rest }: TabsListProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString(
          'a11y-tabs-list',
          className ? className : '',
        )}
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
      />
    );
  },
);

TabsList.displayName = 'TabsList';

export default TabsList;
