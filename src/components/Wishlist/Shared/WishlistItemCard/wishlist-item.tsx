import { FC } from 'react';
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

type WishlistItemProps = {
  listItem: ListItemProps;
};

const WishlistItem: FC<WishlistItemProps> = ({ listItem }) => {
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
            <SecondaryButton text={`${listItem.type === 'item' ? 'Buy' : 'Transfer'}`} size="sm" />
          </div>
        </SpacedList>
      </WishlistItemContainer>
    </Card>
  );
};

export default WishlistItem;
