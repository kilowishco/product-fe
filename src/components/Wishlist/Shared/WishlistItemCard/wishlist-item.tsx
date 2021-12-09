import { FC, useState } from 'react';
import Image from 'next/image';

import Card from '../../../Dashboard/Shared/Card';
import {
  WishlistItemContainer,
  WishlistContentContainer,
  WishlistImageContainer,
} from './wishlist-item.styled';

import { ListItemProps } from '../../../../types';
import SpacedList from '../../../Shared/SpacedList';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';
import GiversModal from '../GiversModal';

type WishlistItemProps = {
  listItem: ListItemProps;
};

const WishlistItem: FC<WishlistItemProps> = ({ listItem }) => {
  const [openGiversModal, setOpenGiversModal] = useState(false);

  return (
    <Card full>
      <WishlistItemContainer>
        <SpacedList>
          <SpacedList>
            {listItem.type === 'item' && (
              <>
                <WishlistImageContainer>
                  {listItem.image ? (
                    <Image src={listItem.image} alt={`${listItem.title}`} />
                  ) : (
                    <div className="placeholder" />
                  )}
                </WishlistImageContainer>

                <WishlistContentContainer>
                  <h3>{listItem.title}</h3>
                  {listItem.description && <p>{listItem.description}</p>}
                </WishlistContentContainer>
              </>
            )}

            {listItem.type === 'cash' && (
              <WishlistContentContainer>
                <h3>{listItem.title}</h3>
              </WishlistContentContainer>
            )}
          </SpacedList>
          <div>
            <SecondaryButton
              text={`${listItem.type === 'item' ? 'Buy' : 'Send Money'}`}
              size="sm"
              onClick={() => setOpenGiversModal(true)}
            />
          </div>
        </SpacedList>
      </WishlistItemContainer>

      {openGiversModal && (
        <GiversModal listItem={listItem} closeModal={() => setOpenGiversModal(false)} />
      )}
    </Card>
  );
};

export default WishlistItem;
