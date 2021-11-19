import styled from 'styled-components';

export const AddItemModalContainer = styled.div`
  > h2 {
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 2.25rem;
    width: 100%;
    line-height: 3rem;
    letter-spacing: -1.56316px;
    color: var(--color-form-black);
  }
`;

export const TabContainer = styled.div`
  margin-top: 3rem;
  display: flex;

  > * {
    flex-grow: 1;
  }

  > * + * {
    margin-left: 0.5rem;
  }

  button {
    color: var(--color-light-grey);
    font-weight: 400;
    justify-content: flex-start;
    border-radius: 0;
    font-size: 1rem;
    line-height: 1.125rem;
    padding-bottom: 1.75rem;
    border-bottom: 1px solid var(--color-tab-grey);

    &.active {
      font-weight: 600;
      color: var(--color-card-black);
      border-bottom: 2px solid var(--color-purple);
    }

    &:hover {
      text-decoration: none;
    }
  }
`;
