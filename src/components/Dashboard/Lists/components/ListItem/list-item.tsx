import { FC } from 'react';
import Image from 'next/image';

import Card from '../../../Shared/Card';
import { ListItemContainer, ListContentContainer, ListImageContainer } from './list-item.styled';

import { ListItemProps } from '../../../../../types';

const ListItem: FC<ListItemProps> = ({ type, title, description, image }) => {
  return (
    <Card full>
      <ListItemContainer>
        {type === 'item' && (
          <>
            <ListImageContainer>
              {image ? <Image src={image} alt={`${title}`} /> : <div className="placeholder" />}
            </ListImageContainer>

            <ListContentContainer>
              <h3>{title}</h3>
              {description && <p>{description}</p>}
            </ListContentContainer>
          </>
        )}

        {type === 'cash' && (
          <ListContentContainer>
            <h3>{title}</h3>
          </ListContentContainer>
        )}
      </ListItemContainer>
    </Card>
  );
};

export default ListItem;
