import styled from 'styled-components';
import { SpacedListContainer } from '../../../../Shared/SpacedList/spaced-list.styled';

export const GiversDetailsCardContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0.75rem;
  border-radius: 0.625rem;
  background: var(--color-white);
  border: 1px solid var(--color-placeholder-grey);

  @media (min-width: 400px) {
    padding: 1.5rem 2rem;
    align-items: flex-start;
    flex-direction: column;
    background: var(--color-card-divider);
    border: none;

    > * + * {
      margin-top: 1rem;
    }

    ${SpacedListContainer} {
      align-items: flex-start;
      flex-direction: column;

      > * + * {
        margin-top: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;

    > * + * {
      margin-top: 0;
    }

    ${SpacedListContainer} {
      flex-direction: row;
      align-items: center;

      > * + * {
        margin-top: 0;
      }
    }
  }
`;

export const GiversDetailsImageContainer = styled.div`
  margin-right: 0.875rem;

  .placeholder {
    height: 2rem;
    width: 2rem;
    background-color: var(--color-light-blue);
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    margin-right: 3rem;

    .placeholder {
      height: 3.75rem;
      width: 3.75rem;
    }
  }
`;

export const GiversDetailsListContainer = styled.div`
  margin-right: 0.5rem;

  h3 {
    font-weight: 500;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    color: var(--color-input-black);
    font-size: 0.875rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.625rem;
    font-style: italic;
    line-height: 0.75rem;
    color: var(--color-mid-grey);
    margin-top: 0.25rem;
  }

  @media (max-width: 768px) {
    p {
      max-width: 100%;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
    }
  }

  @media (min-width: 400px) {
    margin-right: 0.875rem;

    h3 {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 1rem;
      font-style: normal;
      margin-top: 0.325rem;
    }
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    p {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
`;
