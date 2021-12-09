import styled from 'styled-components';

export const ShareListModalContainer = styled.div`
  h2 {
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    width: 100%;
    line-height: 2.5rem;
    color: var(--color-form-black);
    margin: 0;
    margin-bottom: 0.75rem;
    letter-spacing: -1.2px;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-mid-grey);
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.625rem;
      line-height: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.625rem;
    }
  }
`;
