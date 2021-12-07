import { FC } from 'react';

import ErrorBoundary from '../Shared/ErrorBoundary';
import WishlistWrapper from './Shared/WishlistWrapper';
import WishlistComponent from './Shared/WishlistComponent';
import { ListProps } from '../../types';

type WishlistProps = {
  list: ListProps;
  previewState?: boolean;
  published?: boolean;
  returnToList?: () => void;
  togglePublishState?: () => void;
};

const Wishlist: FC<WishlistProps> = ({
  list,
  previewState,
  published,
  returnToList,
  togglePublishState,
}) => {
  return (
    <ErrorBoundary link="/">
      <WishlistWrapper
        previewState={previewState}
        published={published}
        returnToList={returnToList}
        togglePublishState={togglePublishState}>
        <WishlistComponent list={list} />
      </WishlistWrapper>
    </ErrorBoundary>
  );
};

export default Wishlist;
