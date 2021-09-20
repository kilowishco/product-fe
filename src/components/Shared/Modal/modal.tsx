import React, { useState, useEffect, useRef, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import PrimaryButton from '../Button/PrimaryButton';

import {
  ModalContainer,
  ScrollingContainer,
  ModalWrapperBody,
  ModalWrapperContainer,
  FocusTrapButton,
} from './modal.styled';

type ModalWrapperProps = {
  closeModal: () => void;
  children: ReactNode;
  basic?: boolean;
  background?: string;
  padding?: string;
  width?: number;
  maxWidth?: number;
  hide?: boolean;
};

function Modal({ children }): ReactElement {
  const modalWrapper = useRef(null);

  if (!modalWrapper.current) {
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal');
    modalWrapper.current = modalBody;
  }

  useEffect(() => {
    document.body.appendChild(modalWrapper.current);

    return () => document.body.removeChild(modalWrapper.current);
  }, []);

  return createPortal(<>{children}</>, modalWrapper.current);
}

function ModalWrapper({
  closeModal,
  basic,
  children,
  background,
  padding,
  width,
  maxWidth,
  hide,
}: ModalWrapperProps): ReactElement {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const lastActiveELement = useRef(null);
  const firstTrapRef = useRef(null);
  const lastTrapRef = useRef(null);

  const closeOuter = useRef((e: Event) => {
    if (e.target === modalRef.current?.parentNode) {
      closeModal();
      lastActiveELement.current?.focus();
    }
  });

  // Keyboard users
  const trapFocus = useRef((e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      closeModal();
      lastActiveELement.current?.focus();
    }
    if (e.keyCode === 9 && document.activeElement === lastTrapRef.current) {
      firstTrapRef.current?.focus();
    }
    if (e.shiftKey && e.keyCode === 9 && document.activeElement === firstTrapRef.current) {
      lastTrapRef.current?.focus();
    }
  });

  useEffect(() => {
    const closeOuterFunc = closeOuter.current;
    const trapFocusFunc = trapFocus.current;
    window.addEventListener('click', closeOuterFunc);
    window.addEventListener('keydown', trapFocusFunc);

    setTimeout(() => setOpen(true), 500);
    lastActiveELement.current = document.activeElement;

    firstTrapRef.current?.focus();

    return () => {
      window.removeEventListener('click', closeOuterFunc);
      window.removeEventListener('keydown', trapFocusFunc);
    };
  }, []);

  return (
    <Modal>
      <ModalContainer>
        <FocusTrapButton ref={firstTrapRef} tabIndex={0} aria-hidden="true" />
        <ModalWrapperContainer
          className={open ? 'open' : null}
          ref={modalRef}
          width={width}
          maxWidth={maxWidth}>
          <ScrollingContainer background={background} padding={padding} basic={basic}>
            <ModalWrapperBody>
              {!hide && (
                <PrimaryButton
                  text={
                    <>
                      × <span className="sr-only">Close Modal</span>
                    </>
                  }
                  className="close-icon"
                  onClick={closeModal}
                  size="icon"
                />
              )}
              {children}
            </ModalWrapperBody>
          </ScrollingContainer>
        </ModalWrapperContainer>
        <FocusTrapButton ref={lastTrapRef} tabIndex={0} aria-hidden="true" />
      </ModalContainer>
    </Modal>
  );
}

export default ModalWrapper;
