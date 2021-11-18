import styled from 'styled-components';

export const ModalContainer = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  overflow: auto;
  background: rgba(4, 4, 20, 0.9);
  cursor: pointer;
  z-index: 1005;

  > div {
    visibility: hidden;
    opacity: 0;
  }
`;

export const ModalWrapperContainer = styled.div<{ width: number; maxWidth: number }>`
  cursor: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.25rem;
  position: relative;
  transition: visibility 800ms, opacity 800ms;
  background: transparent;
  width: 100%;

  &.open {
    visibility: visible;
    opacity: 1;
  }

  @media (min-width: 475px) {
    width: ${(props) => (props.width ? `${props.width}%` : null)};

    ${(props) =>
      props.maxWidth &&
      `
      width: ${props.width ? `${props.width}%` : null};
      max-width: ${`${props.maxWidth}px`};
    `}
  }
`;

export const ScrollingContainer = styled.div<{
  background: string;
  padding: string;
  basic: boolean;
}>`
  width: 100%;
  overflow-y: auto;
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  max-height: 75vh;

  &.open {
    visibility: visible;
    opacity: 1;
  }

  ${(props) =>
    props.basic &&
    `
    background: transparent;
  `}

  @media (max-width: 768px) {
    padding: ${(props) => (props.padding ? 'calc(' + props.padding + ' / 2)' : null)};
  }
`;

export const ModalWrapperBody = styled.div<{ basic?: boolean }>`
  .close-icon {
    position: absolute;
    top: 2rem;
    right: ${(props) => (props.basic ? '4rem' : '2rem')};
    font-size: 1.25rem;
    color: var(--color-main);
    border-radius: 50%;
    width: auto;
    background: none;
    border: none;
  }

  @media (max-width: 768px) {
    .close-icon {
      top: 1rem;
      right: ${(props) => (props.basic ? '2rem' : '1rem')};
    }
  }
`;

export const FocusTrapButton = styled.button`
  position: absolute;
  opacity: 0;
  top: -9999px;
  left: -9999px;
`;
