import { FC } from 'react';
import Image from 'next/image';

import Card from '../../../Shared/Card';
import {
  GiversDetailsCardContainer,
  GiversDetailsImageContainer,
  GiversDetailsListContainer,
} from './givers-details-card.styled';

import { ListItemGiverProps, ListItemProps } from '../../../../../types';
import GiversAvatars from '../GiversAvatars';
import SpacedList from '../../../../Shared/SpacedList';

type GiversDetailsCardProps = {
  givers: ListItemGiverProps[];
  listItem: ListItemProps;
};

const GiversDetailsCard: FC<GiversDetailsCardProps> = ({ givers, listItem }) => {
  return (
    <Card full>
      <GiversDetailsCardContainer>
        <SpacedList>
          <GiversDetailsImageContainer>
            {listItem.image ? (
              <Image src={listItem.image} alt={`title`} />
            ) : (
              <div className="placeholder" />
            )}
          </GiversDetailsImageContainer>

          <GiversDetailsListContainer>
            <h3>{listItem.title}</h3>
            {listItem.description && <p>{listItem.description}</p>}
          </GiversDetailsListContainer>
        </SpacedList>

        <SpacedList>
          <GiversAvatars givers={givers} />
        </SpacedList>
      </GiversDetailsCardContainer>
    </Card>
  );
};

export default GiversDetailsCard;
