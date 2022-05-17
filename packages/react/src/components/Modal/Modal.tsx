import { forwardRef, useEffect } from 'react';
import { modal } from '@a11yui/core';
import { createClassString } from '@shared/utils';
import { useForwardedRef } from '../../hooks';

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../types';

import './modal.scss';

interface Props {
  className?: string;
  forceAction?: boolean;
}

type ModalProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  Props
>;

export const Modal = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, forceAction, ...rest }: ModalProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    const safeRef = useForwardedRef(ref);

    useEffect(() => {
      const containerEl = safeRef?.current;
      if (!containerEl || !modal) return;

      modal.on(containerEl);

      return () => {
        modal.off(containerEl);
      };
    }, []);

    return (
      <Component
        {...rest}
        ref={safeRef}
        className={createClassString(
          'a11y-modal',
          forceAction ? 'a11y-modal-force-action' : '',
          className ? className : '',
        )}
      />
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
