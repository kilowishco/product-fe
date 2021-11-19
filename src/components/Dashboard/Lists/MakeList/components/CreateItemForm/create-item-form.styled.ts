import styled from 'styled-components';

export const CreateFormContainer = styled.form`
  width: 100%;
  padding: 2rem 0;
  background: var(--color-white);

  > h2,
  > p {
    margin: 0;
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-dark);
    margin-bottom: 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    > p {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      text-align: left;
    }
  }
`;

export const CreateItemFooter = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;
`;
