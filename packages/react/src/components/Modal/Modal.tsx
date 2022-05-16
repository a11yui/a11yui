import { forwardRef, useEffect } from 'react';
import { modal } from '@a11yui/core';
import { createClassString } from '@internal/utils';
import { useForwardedRef } from '../../hooks';

import Content from './Content';
import Heading from './Heading';

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

export const ModalComponent = forwardRef(
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

ModalComponent.displayName = 'Modal';

const Modal = Object.assign(ModalComponent, { Content, Heading });

export default Modal;
