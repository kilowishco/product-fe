import { FC } from 'react';
import { CardContainer } from './card.styled';

const Card: FC = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
