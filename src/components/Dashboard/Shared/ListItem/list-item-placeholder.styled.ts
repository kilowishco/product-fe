import styled from 'styled-components';

export const ListItemPlaceholderContainer = styled.button`
  text-align: center;
  padding: 1.75rem 2.25rem;
  border: 2px dashed var(--color-light-blue);
  cursor: pointer;
  background: var(--color-white);
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.625rem;

  p {
    margin: 0;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    margin-left: 2.25rem;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.3rem;
    letter-spacing: 0.01rem;
    color: var(--color-purple);
  }

  svg {
    width: 2.5rem;
  }
`;
