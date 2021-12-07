import React, { FC } from 'react';
import BareButton from '../../../Shared/Button/BareButton';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';
import WishlistNav from '../../../Shared/Nav/WishlistNav';
import SpacedList from '../../../Shared/SpacedList';
import { WishlistWrapperContainer, MainSection } from './wishlist-wrapper.styled';

type WishlistWrapperProps = {
  previewState?: boolean;
  published?: boolean;
  returnToList?: () => void;
  togglePublishState?: () => void;
};

const WishlistWrapper: FC<WishlistWrapperProps> = ({
  previewState,
  published,
  returnToList,
  togglePublishState,
  children,
}) => {
  return (
    <WishlistWrapperContainer>
      <WishlistNav>
        {previewState && (
          <>
            <SpacedList>
              <BareButton text="Back to Lists" color="var(--color-white)" onClick={returnToList} />
              <SecondaryButton
                text={`${published ? 'Unpublish' : 'Publish'}`}
                size="sm"
                onClick={togglePublishState}
              />
            </SpacedList>
          </>
        )}
      </WishlistNav>
      <MainSection>{children}</MainSection>
    </WishlistWrapperContainer>
  );
};

export default WishlistWrapper;
