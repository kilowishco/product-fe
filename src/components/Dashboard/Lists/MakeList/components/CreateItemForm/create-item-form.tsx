import { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import InputField from '../../../../../Shared/FormFields/InputField';
import CheckboxField from '../../../../../Shared/FormFields/Checkbox';
import TextareaField from '../../../../../Shared/FormFields/Textarea';
import UploadField from '../../../../../Shared/FormFields/Upload';
import Loader from '../../../../../Shared/Loader';
import SecondaryButton from '../../../../../Shared/Button/SecondaryButton';
import SpacedList from '../../../../../Shared/SpacedList';

import { CreateFormContainer, CreateItemFooter } from './create-item-form.styled';
import {
  InputContainer,
  FormError,
  CheckboxContainer,
} from '../../../../../Shared/Form/form.styled';
import { ListItemProps } from '../../../../../../types';

type CreateItemFormProps = {
  type: 'item' | 'money';
  listItem?: ListItemProps;
  setListItem: () => void;
};

const CreateItemSchema = Yup.object().shape({
  title: Yup.string().min(1, 'The title is too short').required('Required'),
  link: Yup.string().required('Required'),
  description: Yup.string().min(1, 'The description is too short'),
});

const CreateItemForm: FC<CreateItemFormProps> = ({ listItem, setListItem, type }) => {
  const initialValues = {
    title: listItem?.title || '',
    description: listItem?.description || '',
    link: listItem?.link || '',
    image: listItem?.image || '',
    bank_account_number: listItem?.bank_account_number || undefined,
    bank_name: listItem?.bank_name || '',
    profile_bank: listItem?.profile_bank || false,
  };
  const createItemErrorMessage = {
    errorMessages: [],
    errorFields: [],
    hasError: false,
  };
  const IsCreatingItem = false;

  const errorCheck = (key: string, value: string | number | boolean, error: string | undefined) => {
    if (value) {
      return createItemErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  const errorMessage = (
    key: string,
    value: string | number | boolean,
    error: string | undefined
  ) => {
    if (value) {
      return createItemErrorMessage.errorMessages[key] || (error !== undefined ? error : '');
    }
    return '';
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateItemSchema}
      onSubmit={(values) => {
        const itemDetails = {
          title: values.title,
          type,
          description: values.description,
          link: values.link,
          image: values.image,
          bank_account_number: values.bank_account_number,
          bank_name: values.bank_name,
          profile_bank: values.profile_bank,
        };
        setListItem();
        console.log(itemDetails);
      }}>
      {({ errors, values, handleSubmit }) => (
        <CreateFormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <p>
            {createItemErrorMessage.hasError && (
              <FormError>{createItemErrorMessage || 'There was an error'}</FormError>
            )}
          </p>

          <InputContainer>
            <InputField
              label="What will you like?"
              placeholder="Ex: Send funds"
              name="title"
              type="text"
              value={values.title}
              error={errorCheck('title', values.title, errors.title)}
              errorMessage={errorMessage('title', values.title, errors.title)}
            />
          </InputContainer>

          <InputContainer>
            <TextareaField
              label="Note (Optional)"
              placeholder="Ex: I want a red one"
              name="description"
              value={values.description}
              error={errorCheck('description', values.description, errors.description)}
              errorMessage={errorMessage('description', values.description, errors.description)}
            />
          </InputContainer>

          {type === 'item' && (
            <>
              <InputContainer>
                <InputField
                  label="Shopping link"
                  placeholder="https://"
                  name="link"
                  type="text"
                  value={values.link}
                  error={errorCheck('link', values.link, errors.link)}
                  errorMessage={errorMessage('link', values.link, errors.link)}
                />
              </InputContainer>
            </>
          )}

          {type === 'money' && (
            <>
              <SpacedList compact>
                <InputContainer>
                  <InputField
                    label="Account number"
                    placeholder="0000000000"
                    name="bank_account_number"
                    type="text"
                    value={values.bank_account_number}
                    error={errorCheck(
                      'bank_account_number',
                      values.bank_account_number,
                      errors.bank_account_number
                    )}
                    errorMessage={errorMessage(
                      'bank_account_number',
                      values.bank_account_number,
                      errors.bank_account_number
                    )}
                  />
                </InputContainer>

                <InputContainer className="mt-0">
                  <InputField
                    label="Bank name"
                    placeholder="Ex: UBA"
                    name="bank_name"
                    type="text"
                    value={values.bank_name}
                    error={errorCheck('bank_name', values.bank_name, errors.bank_name)}
                    errorMessage={errorMessage('bank_name', values.bank_name, errors.bank_name)}
                  />
                </InputContainer>
              </SpacedList>

              <CheckboxContainer className="mt-6">
                <CheckboxField
                  label="Use profile account instead"
                  name="profile_bank"
                  value={values.profile_bank}
                  error={errorCheck('profile_bank', values.profile_bank, errors.profile_bank)}
                  errorMessage={errorMessage(
                    'profile_bank',
                    values.profile_bank,
                    errors.profile_bank
                  )}
                />
              </CheckboxContainer>
            </>
          )}

          <InputContainer className="mt-6">
            <UploadField
              label="Upload Image (optional)"
              name="image"
              value={values.image}
              error={errorCheck('image', values.image, errors.image)}
              errorMessage={errorMessage('image', values.image, errors.image)}
            />
          </InputContainer>

          <CreateItemFooter>
            <SecondaryButton
              className="create-item-button"
              text={
                <>
                  {IsCreatingItem && <Loader light />}
                  Proceed
                </>
              }
              size="sm"
              type="submit"
            />
          </CreateItemFooter>
        </CreateFormContainer>
      )}
    </Formik>
  );
};

export default CreateItemForm;
