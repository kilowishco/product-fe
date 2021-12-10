import React, { FC, useState } from 'react';

import { ListPreviewContainer } from './list-preview.styled';

import { ListProps } from '../../../../../../types';
import Wishlist from '../../../../../Wishlist';
import ShareList from '../../../../../Shared/ShareList';
import ShareListModal from '../../../../../Wishlist/Shared/ShareListModal';

type ListPreviewProps = {
  list: ListProps;
  returnToList: () => void;
};

const ListPreview: FC<ListPreviewProps> = ({ list, returnToList }) => {
  const [openShareModal, setOpenShareModal] = useState(false);

  return (
    <ListPreviewContainer>
      <Wishlist
        list={list}
        previewState
        published={list.published}
        togglePublishState={() => setOpenShareModal(true)}
        returnToList={returnToList}
      />
      <div className="divider" />
      <ShareList list={list} />
      {openShareModal && <ShareListModal list={list} closeModal={() => setOpenShareModal(false)} />}
    </ListPreviewContainer>
  );
};

export default ListPreview;
