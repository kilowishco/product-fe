import React, { FC } from 'react';

import ListItem, { ListItemPlaceholder } from '../../../../Shared/ListItem';
import { ListCreatorContainer } from './list-creator.styled';

import { ListItemProps } from '../../../../../../types';

type ListCreatorProps = {
  listItems?: Array<ListItemProps>;
};

const ListCreator: FC<ListCreatorProps> = ({ listItems }) => {
  return (
    <ListCreatorContainer>
      {listItems?.map((listItem, index) => (
        <React.Fragment key={index}>
          <ListItem
            type={listItem.type}
            title={listItem.title}
            image={listItem.image}
            description={listItem.description}
          />
        </React.Fragment>
      ))}

      <ListItemPlaceholder onClick={() => null} />
    </ListCreatorContainer>
  );
};

export default ListCreator;
