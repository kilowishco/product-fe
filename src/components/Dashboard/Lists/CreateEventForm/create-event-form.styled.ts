import styled from 'styled-components';

export const CreateFormContainer = styled.form`
  width: 100%;
  padding: 4.5rem 4rem;
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

export const CreateEventHeader = styled.div`
  margin-bottom: 3.75rem;

  h2 {
    color: var(--color-form-black);
    font-size: 1.5rem;
    line-height: 1.6rem;
    letter-spacing: -0.56316px;
    font-weight: 600;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.125rem;
    letter-spacing: -0.02rem;
    color: var(--color-mid-grey);
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.75rem;
      line-height: 1.8rem;
    }
  }
`;

export const CreateEventFooter = styled.div`
  > div {
    margin-top: 4rem;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.125rem;
    letter-spacing: -0.02rem;
    color: var(--color-mid-grey);
  }
`;
