import styled from 'styled-components';

export const ListCardPlaceholderContainer = styled.button`
  text-align: center;
  padding: 5rem 4.5rem;
  border: 2px dashed var(--color-light-blue);
  cursor: pointer;
  background: var(--color-white);

  p {
    margin-top: 2.25rem;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.3rem;
    letter-spacing: 0.01rem;
    color: var(--color-mid-grey);
  }

  svg {
    width: 2.5rem;
  }
`;
