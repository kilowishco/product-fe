import styled from 'styled-components';

export const VerifyContainer = styled.div`
  text-align: center;

  svg {
    width: 3.75rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    color: var(--color-input-black);
    line-height: 1.3rem;
    font-weight: 500;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
  }

  p {
    margin: 0;
    color: var(--color-mid-grey);
    font-size: 0.875rem;
    line-height: 1.3rem;

    span {
      font-weight: 500;
    }
  }
`;
