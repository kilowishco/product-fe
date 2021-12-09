import React, { FC, useState } from 'react';

import ModalWrapper from '../../../Shared/Modal/modal';
import { GiversModalContainer } from './givers-modal.styled';
import { ListItemProps } from '../../../../types';
import SpacedList from '../../../Shared/SpacedList';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';
import { InputWrapper } from '../../../Shared/FormFields/InputField/input-field.styled';
import InvertedButton from '../../../Shared/Button/InvertedButton';

type GiversModalProps = {
  closeModal: () => void;
  listItem?: ListItemProps;
};

const GiversModal: FC<GiversModalProps> = ({ listItem, closeModal }) => {
  const [giver, setGiver] = useState('');

  return (
    <ModalWrapper background="white" closeModal={closeModal} padding="4rem" maxWidth={600}>
      <GiversModalContainer>
        <div className="top-section">
          <h2>Hi Giver!</h2>
          <h4>Confirm gift selection.</h4>
          <p>
            {`By clicking on '${
              listItem.type === 'item' ? 'Buy' : 'Send Money'
            }', you have chosen to purchase this item as a gift to the Receiver,
            and you're also letting everyone know it's taken. Once you confirm selection you will
            arrive at the store. Do make sure to complete this gift journey.`}
          </p>
        </div>

        <div className="bottom-section">
          <h4>{listItem.type === 'item' ? listItem.title : `Send Money for ${listItem.title}`}</h4>

          <InputWrapper>
            <label htmlFor="giver-input">
              We love to know our Givers, please tell us who you are:
            </label>
            <input
              name="giver"
              id="giver-input"
              placeholder="Ex. Your twitter crush, Mum, Big Sis, Johnny"
              value={giver}
              onChange={(e) => setGiver(e.target.value)}
            />
            <p>Your name is visible only to list owner, upon closure of list.</p>
          </InputWrapper>
        </div>

        <SpacedList>
          <SecondaryButton text="Confirm Selection" size="sm" />
          <InvertedButton text="Cancel" size="sm" onClick={closeModal} />
        </SpacedList>
      </GiversModalContainer>
    </ModalWrapper>
  );
};

export default GiversModal;
