import styled from 'styled-components';

export const AuthContainer = styled.main`
  min-height: 100vh;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const AuthFormContainer = styled.section`
  background: white;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

export const AuthLeft = styled.div`
  height: 100%;
  background-color: var(--color-purple-main);
  width: 100%;
  position: relative;
  display: none;

  p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
    color: white;
    margin: auto;
    letter-spacing: -1.5px;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
  }

  .orange {
    color: var(--color-orange);
  }

  .yellow {
    color: var(--color-yellow);
  }

  @media (min-width: 768px) {
    display: flex;
    padding: 2.5rem 3.5rem;
  }
`;
