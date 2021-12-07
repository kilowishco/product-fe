import { FC, ReactNode } from 'react';
import Logo from '../../Logo';

import { WishlistNavContainer } from './wishlist-nav.styled';

type WishlistNavProps = {
  children?: ReactNode;
};

const WishlistNav: FC<WishlistNavProps> = ({ children }) => {
  return (
    <WishlistNavContainer>
      <Logo />
      {children}
    </WishlistNavContainer>
  );
};

export default WishlistNav;
