import { FC } from 'react';
import { Formik, FormikErrors } from 'formik';
import * as Yup from 'yup';

import InputField from '../../../Shared/FormFields/InputField';
import DropdownField from '../../../Shared/FormFields/Dropdown';
import DateField from '../../../Shared/FormFields/Date';
import TextareaField from '../../../Shared/FormFields/Textarea';
import Loader from '../../../Shared/Loader';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';
import SpacedList from '../../../Shared/SpacedList';

import {
  CreateFormContainer,
  CreateEventHeader,
  CreateEventFooter,
} from './create-event-form.styled';
import { InputContainer, FormError } from '../../../Shared/Form/form.styled';

const CreateEventSchema = Yup.object().shape({
  title: Yup.string().min(1, 'The title is too short').required('Required'),
  event_type: Yup.string(),
  date: Yup.date().required('Required'),
  description: Yup.string().min(1, 'The description is too short'),
});

const CreateEventForm: FC = () => {
  const initialValues = {
    title: '',
    event_type: '',
    date: new Date(),
    description: '',
  };
  const createEventErrorMessage = {
    errorMessages: [],
    errorFields: [],
    hasError: false,
  };
  const IsCreatingEvent = false;

  const errorCheck = (
    key: string,
    value: string | Date,
    error: string | undefined | FormikErrors<Date>
  ) => {
    if (value) {
      return createEventErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  const errorMessage = (
    key: string,
    value: string | Date,
    error: string | undefined | FormikErrors<Date>
  ) => {
    if (value) {
      return createEventErrorMessage.errorMessages[key] || (error !== undefined ? error : '');
    }
    return '';
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateEventSchema}
      onSubmit={(values) => {
        const eventDetails = {
          title: values.title,
          event_type: values.event_type,
          date: values.date,
          description: values.description,
        };
        console.log(eventDetails);
      }}>
      {({ errors, values, handleSubmit }) => (
        <CreateFormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <CreateEventHeader>
            <SpacedList>
              <h2>Create Event</h2>
              <p>Step 1/3</p>
            </SpacedList>
          </CreateEventHeader>

          <p>
            {createEventErrorMessage.hasError && (
              <FormError>{createEventErrorMessage || 'There was an error'}</FormError>
            )}
          </p>

          <InputContainer>
            <InputField
              label="Event Title"
              placeholder="Enter event title"
              name="title"
              type="text"
              value={values.title}
              error={errorCheck('title', values.title, errors.title)}
              errorMessage={errorMessage('title', values.title, errors.title)}
            />
          </InputContainer>

          <InputContainer>
            <DropdownField
              label="Select Special Day"
              placeholder="Birthday"
              name="event_type"
              options={[
                { label: 'Birthday', value: 'birthday' },
                { label: 'Wedding', value: 'wedding' },
              ]}
              value={values.event_type}
              error={errorCheck('event_type', values.event_type, errors.event_type)}
              errorMessage={errorMessage('event_type', values.event_type, errors.event_type)}
            />
          </InputContainer>

          <InputContainer>
            <DateField
              label="Set Date"
              name="date"
              value={values.date}
              error={errorCheck('date', values.date, errors.date)}
              errorMessage={errorMessage('date', values.date, errors.date)}
            />
          </InputContainer>

          <InputContainer>
            <TextareaField
              label="Description"
              placeholder="Enter the description of event"
              name="description"
              value={values.description}
              error={errorCheck('description', values.description, errors.description)}
              errorMessage={errorMessage('description', values.description, errors.description)}
            />
          </InputContainer>

          <CreateEventFooter>
            <SpacedList>
              <p>Only two steps left, you got this.</p>
              <SecondaryButton
                className="create-event-button"
                text={
                  <>
                    {IsCreatingEvent && <Loader light />}
                    Next
                  </>
                }
                size="lg"
                type="submit"
              />
            </SpacedList>
          </CreateEventFooter>
        </CreateFormContainer>
      )}
    </Formik>
  );
};

export default CreateEventForm;
