import { FC, useState } from 'react';
import AddItemModal from '../../MakeList/components/AddItemModal';
import Card from '../../../Shared/Card';
import { ListItemPlaceholderContainer } from './list-item-placeholder.styled';

const ListItemPlaceholder: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card full>
        <ListItemPlaceholderContainer onClick={() => setIsModalOpen(true)}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.0001 14.3486V29.6118"
              stroke="#4B4BBA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.639 21.9802H14.3613"
              stroke="#4B4BBA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.7619 1.16663H12.2381C5.4325 1.16663 1.16663 5.98347 1.16663 12.8024V31.1976C1.16663 38.0165 5.41266 42.8333 12.2381 42.8333H31.7619C38.5873 42.8333 42.8333 38.0165 42.8333 31.1976V12.8024C42.8333 5.98347 38.5873 1.16663 31.7619 1.16663Z"
              stroke="#4B4BBA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>Add Item</p>
        </ListItemPlaceholderContainer>
      </Card>

      {isModalOpen && (
        <AddItemModal closeModal={() => setIsModalOpen(false)} setListItem={() => null} />
      )}
    </>
  );
};

export default ListItemPlaceholder;