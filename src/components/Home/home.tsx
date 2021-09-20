import { FC } from 'react';
import Image from 'next/image';

import ErrorBoundary from '../Shared/ErrorBoundary';
import ExternalNav from '../Shared/Nav/ExternalNav';
import WishCard from '../Shared/WishCard';
import JoinWaitlist from '../Shared/JoinWaitlist';

import Phones from '../../assets/images/phones.jpg';
import Scribble from '../../assets/images/scribble.svg';

import { HomeWrapper, HomeImageScroller, HomeContentWrapper } from './home.styled';

const Home: FC = () => {
  return (
    <ErrorBoundary link="/">
      <ExternalNav />
      <HomeWrapper>
        <HomeContentWrapper>
          <span>Make a Thousand Wishes come true</span>
          <h1>Get the gifts you desire on your special day</h1>
          <p>
            Help your friends and family make the right gifting decision for you. Create a wishlist
            for birthdays, weddings, graduation, holidays, festive periods, and so much more.
          </p>
          <JoinWaitlist />
          <Image src={Scribble} alt="scribble" aria-hidden width={161} height={59} />
        </HomeContentWrapper>
        <HomeImageScroller>
          <WishCard type="Birthdays" />
          <div className="home__phone-img-wrapper">
            <Image
              className="home__phone-img"
              src={Phones}
              aria-hidden
              alt="two iphones"
              width={482}
              height={447}
              layout="intrinsic"
            />
          </div>
          {/* <div className="home__img--control">
            <button type="button">
              <svg
                width="12"
                aria-hidden
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.7827 8.76163H6.71735V0.734214C6.71735 0.328928 6.39602 0 6.0001 0C5.60417 0 5.28284 0.328928 5.28284 0.734214V8.76163H1.21745C0.956365 8.76163 0.715368 8.90651 0.589131 9.14146C0.462894 9.37543 0.471501 9.66128 0.61017 9.88644L5.39282 17.6564C5.5248 17.8708 5.75336 18 6.0001 18C6.24683 18 6.4754 17.8708 6.60737 17.6564L9.58254 12.8213C9.79389 12.4797 9.69348 12.0255 9.35876 11.8091C9.02308 11.5937 8.5803 11.6965 8.36895 12.0401L6.0001 15.8874L2.51615 10.2301H10.7827C11.1787 10.2301 11.5 9.90113 11.5 9.49584C11.5 9.09055 11.1787 8.76163 10.7827 8.76163Z"
                  fill="#EE6F56"
                />
              </svg>
              <span>Scroll down</span>
            </button>
          </div> */}
        </HomeImageScroller>
      </HomeWrapper>
    </ErrorBoundary>
  );
};

export default Home;
