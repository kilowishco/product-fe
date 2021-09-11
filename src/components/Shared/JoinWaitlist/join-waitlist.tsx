import { ChangeEvent, FC, useState } from 'react';
import { JoinWaitlistContainer } from './join-waitlist.styled';
import PrimaryButton from '../Button/PrimaryButton';

const JoinWaitlist: FC = () => {
  const [email, setEmail] = useState('');

  return (
    <JoinWaitlistContainer>
      <input
        aria-label="Enter email address to join waitlist"
        value={email}
        type="email"
        placeholder="Enter email address"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        onBlur={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <PrimaryButton size="lg" text="Join Waitlist" />
    </JoinWaitlistContainer>
  );
};

export default JoinWaitlist;
