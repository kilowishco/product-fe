import React, { FC } from 'react';

import ModalWrapper from '../../../Shared/Modal/modal';
import { ShareListModalContainer } from './share-list-modal.styled';
import ShareList from '../../../Shared/ShareList';
import { ListItemProps } from '../../../../types';

type ShareListModalProps = {
  closeModal: () => void;
  listItem?: ListItemProps;
};

const ShareListModal: FC<ShareListModalProps> = ({ listItem, closeModal }) => {
  return (
    <ModalWrapper background="white" closeModal={closeModal} padding="4rem" maxWidth={600}>
      <ShareListModalContainer>
        <h2>Your list is live. Share away!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat curabitur eu amet nibh
          malesuada dui. Tortor feugiat egestas sed arcu. Eget habitasse tellus sit eget est enim,
          ultrices aliquam. Et ultrices semper auctor eget convallis.
        </p>

        <ShareList listItem={listItem} />
      </ShareListModalContainer>
    </ModalWrapper>
  );
};

export default ShareListModal;
