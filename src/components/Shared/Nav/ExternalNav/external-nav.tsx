import { FC } from 'react';
import PrimaryButton from '../../Button/PrimaryButton';
import Logo from '../../Logo';

import { ExternalNavContainer } from './external-nav.styled';

type ExternalNavProps = {
  loginState?: boolean;
};

const ExternalNav: FC<ExternalNavProps> = () => {
  const focusOnWaitlist = () => {
    const joinWaitlistInput: HTMLInputElement = document.querySelector('.join-waitlist input');
    joinWaitlistInput?.focus();
  };

  return (
    <ExternalNavContainer>
      <Logo />
      <PrimaryButton size="sm" text="Get Early Access" onClick={focusOnWaitlist} />
    </ExternalNavContainer>
  );
};

export default ExternalNav;
