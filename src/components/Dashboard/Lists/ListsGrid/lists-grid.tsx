import React, { FC } from 'react';
import BareButton from '../../../Shared/Button/BareButton';
import SpacedList from '../../../Shared/SpacedList';
import ListCard, { ListCardPlaceholder } from '../components/ListCard';

import { ListProps } from '../../../../types';
import { ListsGridContainer, ListsGridHeader, ListsGridWrapper } from './lists-grid.styled';
import { defaultLists } from '../../../../constants/lists';

type ListsGridProps = {
  lists?: Array<ListProps>;
};

const ListsGrid: FC<ListsGridProps> = ({ lists }) => {
  const listCards = lists || defaultLists;

  return (
    <ListsGridContainer>
      <ListsGridHeader className="--desktop-only">
        <SpacedList>
          <h2>My Lists</h2>
          {listCards && (
            <BareButton
              text={
                <>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0003 6.93945V13.0447"
                      stroke="#4B4BBA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.0564 9.99209H6.94531"
                      stroke="#4B4BBA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9051 1.66669H6.09556C3.37334 1.66669 1.66699 3.59342 1.66699 6.32098V13.6791C1.66699 16.4066 3.36541 18.3334 6.09556 18.3334H13.9051C16.6352 18.3334 18.3337 16.4066 18.3337 13.6791V6.32098C18.3337 3.59342 16.6352 1.66669 13.9051 1.66669Z"
                      stroke="#4B4BBA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Add New List</span>
                </>
              }
              color="var(--color-purple)"
            />
          )}
        </SpacedList>
      </ListsGridHeader>

      {listCards.length > 0 ? (
        <ListsGridWrapper>
          {listCards.map((list) => (
            <React.Fragment key={list.title}>
              <ListCard
                title={list.title}
                description={list.description}
                link={list.link}
                image={list.image}
              />
            </React.Fragment>
          ))}
        </ListsGridWrapper>
      ) : (
        <ListCardPlaceholder onClick={() => null} />
      )}
    </ListsGridContainer>
  );
};

export default ListsGrid;
