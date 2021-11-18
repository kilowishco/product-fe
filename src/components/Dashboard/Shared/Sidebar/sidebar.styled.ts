import styled from 'styled-components';

export const SidebarContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  transition: transform 400ms ease-in;
  transform: translateX(-15.625rem);
  background-color: var(--color-purple-main);
  width: 15.625rem;
  padding: 2.25rem 0 5rem;
  height: 100vh;
  overflow-y: auto;

  .logo {
    margin: 0 2.125rem;
    width: 4.5rem;

    path {
      fill: var(--color-white);
    }
  }

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    transform: translateX(0);
    position: sticky;
    top: 0;
  }
`;

export const MobileSidebarControl = styled.div`
  background-color: var(--color-white);
  border-bottom: 0.2px solid var(--color-light-grey);
  padding: 1.125rem;

  .mobile-sidebar--control {
    align-items: center;

    svg {
      width: 1.5rem;
    }

    h2 {
      font-weight: 500;
      color: var(--color-form-black);
      font-size: 1rem;
      line-height: 1.25rem;
      margin: 0;
      margin-left: 1.25rem;
      font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    }
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  opacity: 0.6;
`;
