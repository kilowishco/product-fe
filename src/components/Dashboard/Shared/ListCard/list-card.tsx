import { FC } from 'react';
import Image from 'next/image';

import Card from '../Card';
import {
  ListCardContainer,
  ListCardControls,
  ListImageContainer,
  SocialButtonsContainer,
} from './list-card.styled';
import BareButton from '../../../Shared/Button/BareButton';

import { ListProps } from '../../../../types/list';

const ListCard: FC<ListProps> = ({ title, description, link, image }) => {
  return (
    <Card>
      <ListCardContainer>
        <ListCardControls>
          <BareButton
            text={
              <>
                <span className="sr-only">Open list controls</span>
                <svg
                  aria-hidden
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                    stroke="#9CA0AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                    stroke="#9CA0AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                    stroke="#9CA0AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            }
            onClick={() => console.log({ link })}
          />
        </ListCardControls>

        <ListImageContainer>
          {image ? <Image src={image} alt={`title`} /> : <div className="placeholder" />}
        </ListImageContainer>

        <h3>{title}</h3>
        <p>{description}</p>

        <SocialButtonsContainer>
          <BareButton
            text={
              <>
                <span className="sr-only">Share on Twitter</span>
                <svg
                  aria-hidden
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.1663 1.50002C18.3683 2.06292 17.4848 2.49344 16.5497 2.77502C16.0478 2.19794 15.3808 1.78893 14.6389 1.60329C13.897 1.41765 13.1159 1.46435 12.4014 1.73706C11.6869 2.00978 11.0734 2.49535 10.6438 3.12812C10.2143 3.76088 9.98942 4.5103 9.99967 5.27502V6.10835C8.5352 6.14632 7.08407 5.82153 5.77551 5.16289C4.46696 4.50425 3.34161 3.53221 2.49967 2.33335C2.49967 2.33335 -0.833659 9.83335 6.66634 13.1667C4.95011 14.3317 2.90564 14.9158 0.833008 14.8334C8.33301 19 17.4997 14.8334 17.4997 5.25002C17.4989 5.0179 17.4766 4.78635 17.433 4.55835C18.2835 3.7196 18.8837 2.66061 19.1663 1.50002V1.50002Z"
                    stroke="#C6CBD2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            }
          />
          <BareButton
            text={
              <>
                <span className="sr-only">Share on LinkedIn</span>
                <svg
                  aria-hidden
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.333 6.66669C14.6591 6.66669 15.9309 7.19347 16.8685 8.13115C17.8062 9.06884 18.333 10.3406 18.333 11.6667V17.5H14.9997V11.6667C14.9997 11.2247 14.8241 10.8007 14.5115 10.4882C14.199 10.1756 13.775 10 13.333 10C12.891 10 12.4671 10.1756 12.1545 10.4882C11.8419 10.8007 11.6663 11.2247 11.6663 11.6667V17.5H8.33301V11.6667C8.33301 10.3406 8.85979 9.06884 9.79747 8.13115C10.7352 7.19347 12.0069 6.66669 13.333 6.66669V6.66669Z"
                    stroke="#C6CBD2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.00033 7.5H1.66699V17.5H5.00033V7.5Z"
                    stroke="#C6CBD2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.33366 5.00002C4.25413 5.00002 5.00033 4.25383 5.00033 3.33335C5.00033 2.41288 4.25413 1.66669 3.33366 1.66669C2.41318 1.66669 1.66699 2.41288 1.66699 3.33335C1.66699 4.25383 2.41318 5.00002 3.33366 5.00002Z"
                    stroke="#C6CBD2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            }
          />
          <BareButton
            text={
              <>
                <span className="sr-only">Share on Facebook</span>
                <svg
                  aria-hidden
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.9997 1.66669H12.4997C11.3946 1.66669 10.3348 2.10567 9.5534 2.88708C8.77199 3.66848 8.33301 4.72829 8.33301 5.83335V8.33335H5.83301V11.6667H8.33301V18.3334H11.6663V11.6667H14.1663L14.9997 8.33335H11.6663V5.83335C11.6663 5.61234 11.7541 5.40038 11.9104 5.2441C12.0667 5.08782 12.2787 5.00002 12.4997 5.00002H14.9997V1.66669Z"
                    stroke="#C6CBD2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            }
          />
          <BareButton
            text={
              <>
                <span className="sr-only">Copy waitlist link</span>
                <svg
                  aria-hidden
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.7779 4.44446H7.77789C6.55059 4.44446 5.55566 5.43938 5.55566 6.66668V16.6667C5.55566 17.894 6.55059 18.8889 7.77789 18.8889H17.7779C19.0052 18.8889 20.0001 17.894 20.0001 16.6667V6.66668C20.0001 5.43938 19.0052 4.44446 17.7779 4.44446Z"
                    stroke="#C6CBD2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.44466 15.5556H3.33355C2.74418 15.5556 2.17895 15.3215 1.7622 14.9047C1.34545 14.488 1.11133 13.9227 1.11133 13.3334V3.33337C1.11133 2.744 1.34545 2.17877 1.7622 1.76202C2.17895 1.34527 2.74418 1.11115 3.33355 1.11115H13.3335C13.9229 1.11115 14.4881 1.34527 14.9049 1.76202C15.3216 2.17877 15.5558 2.744 15.5558 3.33337V4.44448"
                    stroke="#C6CBD2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            }
            onClick={() => console.log({ link })}
          />
        </SocialButtonsContainer>
      </ListCardContainer>
    </Card>
  );
};

export default ListCard;
