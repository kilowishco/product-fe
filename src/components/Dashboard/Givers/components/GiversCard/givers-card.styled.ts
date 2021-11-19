import styled from 'styled-components';

export const GiversCardContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 2.5rem 2.5rem 3.125rem;

  h3 {
    color: var(--color-card-black);
    font-family: 500;
    font-size: 1.125rem;
    line-height: 1.25rem;
    margin-bottom: 0.625rem;
  }

  @media (min-width: 476px) {
    width: 22.5rem;
  }
`;

export const GiversImageContainer = styled.div`
  margin-bottom: 1.5rem;

  .placeholder {
    height: 3.5rem;
    width: 3.5rem;
    background-color: var(--color-light-blue);
    border-radius: 5px;
  }
`;

export const GiversListContainer = styled.div`
  div {
    span {
      display: inline-block;
      line-height: 1.5rem;
      font-size: 0.875rem;
      letter-spacing: 0.001rem;
      font-style: italic;
      color: var(--color-card-light);
    }

    span + span {
      margin-left: 0.25rem;
    }

    span:first-child {
      width: 2rem;
    }
  }
`;
