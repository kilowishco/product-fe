import React, { FC } from 'react';
import Image from 'next/image';

import { GiversAvatarsContainer, GiversAvatarItem } from './givers-avatars.styled';

import { ListItemGiverProps } from '../../../../../types';

type GiversAvatarsProps = {
  givers: ListItemGiverProps[];
};

const GiversAvatars: FC<GiversAvatarsProps> = ({ givers }) => {
  return (
    <GiversAvatarsContainer>
      {givers.slice(0, 3).map((giver, index) => (
        <React.Fragment key={index}>
          <GiversAvatarItem className={giver.image ? 'image' : ''}>
            <span className="sr-only">{giver.name}</span>
            {giver.image ? <Image src={giver.image} alt={`${giver.name}`} /> : giver.name[0]}
          </GiversAvatarItem>
        </React.Fragment>
      ))}
      {givers.length > 3 && <span className="overflow-number">{`+${givers.length - 3}`}</span>}
    </GiversAvatarsContainer>
  );
};

export default GiversAvatars;
