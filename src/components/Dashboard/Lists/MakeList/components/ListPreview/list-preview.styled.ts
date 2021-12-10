import styled from 'styled-components';
import { ShareListContainer } from '../../../../../Shared/ShareList/share-list.styled';

export const ListPreviewContainer = styled.section`
  overflow-y: scroll;
  z-index: 9999;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-card-divider);

  ${ShareListContainer} {
    padding: 1rem 1.25rem 3rem;
  }

  .divider {
    height: 2px;
    background-color: var(--color-light-blue);
    width: calc(100% + 8rem);
    margin: 0 -2.5rem;
  }

  @media (min-width: 768px) {
    ${ShareListContainer} {
      padding: 1.5rem 4rem 5rem;
      max-width: 700px;
    }

    .divider {
      width: calc(100% + 8rem);
      margin: 0 -4rem;
    }
  }
`;
