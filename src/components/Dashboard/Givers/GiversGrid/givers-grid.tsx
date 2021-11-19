import React, { FC } from 'react';
import GiversCard from '../components/GiversCard';

import { ListProps } from '../../../../types';
import { GiversGridContainer, GiversGridHeader, GiversGridWrapper } from './givers-grid.styled';
import { defaultLists } from '../../../../constants/lists';

type GiversGridProps = {
  lists?: Array<ListProps>;
};

const GiversGrid: FC<GiversGridProps> = ({ lists }) => {
  const listCards = lists || defaultLists;

  return (
    <GiversGridContainer>
      <GiversGridHeader className="--desktop-only">
        <h2>Gifts &amp; Givers</h2>
      </GiversGridHeader>

      {listCards.length > 0 ? (
        <GiversGridWrapper>
          {listCards.map((list) => (
            <React.Fragment key={list.title}>
              <GiversCard
                title={list.title}
                checked={list.givers.checked}
                size={list.givers.size}
                secret_checked={list.givers.secret_checked}
                image={list.image}
              />
            </React.Fragment>
          ))}
        </GiversGridWrapper>
      ) : (
        <p>Share your wish lists to get responses</p>
      )}
    </GiversGridContainer>
  );
};

export default GiversGrid;
