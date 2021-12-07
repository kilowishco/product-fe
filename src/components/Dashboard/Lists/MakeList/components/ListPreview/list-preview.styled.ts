import styled from 'styled-components';

export const ListPreviewContainer = styled.section`
  margin: 0;
  padding: 0;
  list-style-type: none;

  > * + * {
    margin-top: 2.625rem;
  }
`;
