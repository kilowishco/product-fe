import { FC } from 'react';
import Image from 'next/image';

import ErrorBoundary from '../../Shared/ErrorBoundary';
import DashboardWrapper from '../Shared/DashboardWrapper';
import DonatePeople from '../../../assets/images/donate-people.svg';

import { DonateContainer, DonateImageContainer } from './donate.styled';
import SecondaryButton from '../../Shared/Button/SecondaryButton';

const Donate: FC = () => {
  return (
    <ErrorBoundary link="/">
      <DashboardWrapper active="Donate">
        <DonateContainer>
          <h2>Love Kilowish?</h2>

          <DonateImageContainer>
            <Image
              src={DonatePeople}
              alt="Donate to us"
              layout="intrinsic"
              width={561}
              height={161}
            />
          </DonateImageContainer>

          <h3>Support us to do more!</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat curabitur eu amet
            nibh malesuada dui. Tortor feugiat egestas sed arcu. Eget habitasse tellus sit eget est
            enim, ultrices aliquam. Et ultrices semper auctor eget convallis. Amet cursus pretium,
            sit vulputate ut sit. Feugiat nec viverra purus fringilla magna pulvinar in. Dignissim
            magna ornare gravida dictumst dui et, malesuada. Viverra in quisque morbi id est, fames
            quis.
          </p>

          <SecondaryButton text="Make a Donation to Kilowish" size="lg" full />
        </DonateContainer>
      </DashboardWrapper>
    </ErrorBoundary>
  );
};

export default Donate;
