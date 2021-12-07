import React, { FC } from 'react';

import { ListPreviewContainer } from './list-preview.styled';

import { ListProps } from '../../../../../../types';
import Wishlist from '../../../../../Wishlist';

type ListPreviewProps = {
  list: ListProps;
};

const ListPreview: FC<ListPreviewProps> = ({ list }) => {
  return (
    <ListPreviewContainer>
      <Wishlist list={list} previewState published={list.published} />
    </ListPreviewContainer>
  );
};

export default ListPreview;
