import React, { FC, useState } from 'react';

import ModalWrapper from '../../../../../Shared/Modal/modal';
import BareButton from '../../../../../Shared/Button/BareButton';
import CreateItemForm from '../CreateItemForm';
import { AddItemModalContainer, TabContainer } from './add-item-modal.styled';
import { ListItemProps } from '../../../../../../types';

type AddItemModalProps = {
  listItem?: ListItemProps;
  setListItem: () => void;
  closeModal: () => void;
};

const AddItemModal: FC<AddItemModalProps> = ({ listItem, setListItem, closeModal }) => {
  const [tab, setTab] = useState<'item' | 'money'>('item');

  return (
    <ModalWrapper background="white" closeModal={closeModal} padding="4rem" maxWidth={660}>
      <AddItemModalContainer>
        <h2 className="--center">Add an item</h2>

        <TabContainer>
          <BareButton
            className={`left-tab-button ${tab === 'item' ? 'active' : ''}`}
            onClick={() => {
              setTab('item');
            }}
            text="Request Product"
          />
          <BareButton
            className={`left-tab-button ${tab === 'money' ? 'active' : ''}`}
            onClick={() => {
              setTab('money');
            }}
            text="Request Money"
          />
        </TabContainer>

        <CreateItemForm listItem={listItem} setListItem={setListItem} type={tab} />
      </AddItemModalContainer>
    </ModalWrapper>
  );
};

export default AddItemModal;
