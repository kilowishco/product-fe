/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import { FC } from 'react';

import ListCreator from './components/ListCreator';
import Loader from '../../../Shared/Loader';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';
import SpacedList from '../../../Shared/SpacedList';

import { MakeListContainer, MakeListHeader, MakeListFooter } from './make-list.styled';
import { FormError } from '../../../Shared/Form/form.styled';

const MakeList: FC = () => {
  const makeListErrorMessage = {
    errorMessages: [],
    errorFields: [],
    hasError: false,
  };
  const IsMakingList = false;

  return (
    <MakeListContainer>
      <MakeListHeader>
        <SpacedList>
          <h2>Make List</h2>
          <p>Step 2/3</p>
        </SpacedList>
      </MakeListHeader>

      <p>
        {makeListErrorMessage.hasError && (
          <FormError>{makeListErrorMessage || 'There was an error'}</FormError>
        )}
      </p>

      <ListCreator />

      <MakeListFooter>
        <SpacedList>
          <p>Only one steps left, you got this.</p>
          <SecondaryButton
            className="create-event-button"
            text={!IsMakingList ? 'Next' : <Loader light />}
            size="lg"
            type="submit"
          />
        </SpacedList>
      </MakeListFooter>
    </MakeListContainer>
  );
};

export default MakeList;
