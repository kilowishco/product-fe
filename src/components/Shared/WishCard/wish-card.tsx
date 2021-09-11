import { FC } from 'react';
import Image from 'next/image';
import { WishCardContainer } from './wish-card.styled';

import Birthday from '../../../assets/images/dessert.svg';

type WishCardProps = {
  className?: string;
  type: 'Birthdays';
};

type WishCardImageType = {
  [key: string]: string;
};

const WishCardImage: WishCardImageType = {
  Birthdays: Birthday,
};

const WishCard: FC<WishCardProps> = ({ type, className }) => {
  return (
    <WishCardContainer className={className}>
      <Image src={WishCardImage[type]} alt={`${type}`} />
      <span>{type}</span>
    </WishCardContainer>
  );
};

export default WishCard;
