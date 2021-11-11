import { FC } from 'react';
import Image from 'next/image';

import Card from '../Card';
import {
  GiversCardContainer,
  GiversImageContainer,
  GiversListContainer,
} from './givers-card.styled';

import { GiversProps } from '../../../../types';

interface GiversCardProps extends GiversProps {
  title: string;
  image?: string;
}

const GiversCard: FC<GiversCardProps> = ({ title, checked, size, secret_checked, image }) => {
  return (
    <Card>
      <GiversCardContainer>
        <GiversImageContainer>
          {image ? <Image src={image} alt={`title`} /> : <div className="placeholder" />}
        </GiversImageContainer>

        <h3>{title}</h3>

        <GiversListContainer>
          <div>
            <span>{checked}</span>
            <span>Items ticked</span>
          </div>
          <div>
            <span>{size}</span>
            <span>Givers</span>
          </div>
          <div>
            <span>{secret_checked}</span>
            <span>Secret Givers</span>
          </div>
        </GiversListContainer>
      </GiversCardContainer>
    </Card>
  );
};

export default GiversCard;
