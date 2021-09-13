import { FC } from 'react';
import PrimaryButton from '../../Button/PrimaryButton';
import Logo from '../../Logo';

import { ExternalNavContainer } from './external-nav.styled';

type ExternalNavProps = {
  loginState?: boolean;
};

const ExternalNav: FC<ExternalNavProps> = () => {
  return (
    <ExternalNavContainer>
      <Logo />
      <PrimaryButton size="sm" text="Get Early Access" />
    </ExternalNavContainer>
  );
};

export default ExternalNav;
