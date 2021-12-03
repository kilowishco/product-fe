import React, { FC } from 'react';

import GiversDetailsCard from '../components/GiversDetailsCard';

import { ListProps } from '../../../../types';
import {
  ListGiversDetailsContainer,
  ListGiversListItemsContainer,
} from './list-givers-details.styled';

type ListGiversDetailsProps = {
  list: ListProps;
};

const ListGiversDetails: FC<ListGiversDetailsProps> = ({ list }) => {
  return (
    <ListGiversDetailsContainer>
      <h2>{list.title}</h2>

      {list.description && <p>{list.description}</p>}

      <ListGiversListItemsContainer>
        {list.listItems.map((listItem, index) => (
          <React.Fragment key={index}>
            <GiversDetailsCard givers={listItem.list_item_givers} listItem={listItem} />
          </React.Fragment>
        ))}
      </ListGiversListItemsContainer>
    </ListGiversDetailsContainer>
  );
};

export default ListGiversDetails;
