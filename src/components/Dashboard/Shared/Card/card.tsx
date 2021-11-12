import { FC } from 'react';
import { CardContainer } from './card.styled';

type CardProps = {
  full?: boolean;
};

const Card: FC<CardProps> = ({ children, full }) => {
  return <CardContainer className={full ? 'full' : ''}>{children}</CardContainer>;
};

export default Card;
