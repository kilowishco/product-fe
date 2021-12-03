import { FC, useState } from 'react';

import ListCreator from './components/ListCreator';
import Loader from '../../../Shared/Loader';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';
import SpacedList from '../../../Shared/SpacedList';

import { MakeListContainer, MakeListHeader, MakeListFooter } from './make-list.styled';
import { FormError } from '../../../Shared/Form/form.styled';
import BareButton from '../../../Shared/Button/BareButton';

import { ListItemProps } from '../../../../types';

type MakeListProps = {
  listItems?: Array<ListItemProps>;
};

const MakeList: FC<MakeListProps> = ({ listItems }) => {
  const [isSavingList, setIsSavingList] = useState(false);
  const makeListErrorMessage = {
    errorMessages: [],
    errorFields: [],
    hasError: false,
  };
  const isMakingList = listItems?.length > 0;

  return (
    <MakeListContainer>
      <MakeListHeader>
        <SpacedList>
          <h2>Make List</h2>

          <p>Step {!isMakingList ? 2 : 3}/3</p>
        </SpacedList>
      </MakeListHeader>

      {makeListErrorMessage.hasError && (
        <FormError>{makeListErrorMessage || 'There was an error'}</FormError>
      )}

      <ListCreator listItems={listItems} />

      <MakeListFooter>
        <SpacedList>
          <p>{isMakingList ? 'Here we go!!!' : 'Only one step left, you got this.'}</p>

          {isMakingList && (
            <SpacedList compact>
              <BareButton color="var(--color-purple)" text="Preview List" size="sm" />
              <SecondaryButton
                className="create-event-button"
                text={!isSavingList ? 'Publish List' : <Loader light />}
                size="sm"
                onClick={() => setIsSavingList(true)}
              />
            </SpacedList>
          )}
        </SpacedList>
      </MakeListFooter>
    </MakeListContainer>
  );
};

export default MakeList;