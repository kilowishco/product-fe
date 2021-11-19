import { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import InputField from '../../../../Shared/FormFields/InputField';
import CheckboxField from '../../../../Shared/FormFields/Checkbox';
import UploadField from '../../../../Shared/FormFields/Upload';
import Loader from '../../../../Shared/Loader';
import SecondaryButton from '../../../../Shared/Button/SecondaryButton';
import SpacedList from '../../../../Shared/SpacedList';

import { ProfileFormContainer, ProfileFooter } from './profile-form.styled';
import { InputContainer, FormError, CheckboxContainer } from '../../../../Shared/Form/form.styled';
import { ProfileProps } from '../../../../../types';

type ProfileFormProps = {
  profile?: ProfileProps;
};

const ProfileSchema = Yup.object().shape({
  name: Yup.string().min(1, 'The name is too short').required('Required'),
});

const ProfileForm: FC<ProfileFormProps> = ({ profile }) => {
  const initialValues = {
    name: profile?.name || '',
    nick_name: profile?.nick_name || '',
    email: profile?.email,
    public_email_and_nick_name: profile?.public_email_and_nick_name,
    image: profile?.image || '',
    bank_account_number: profile?.bank_account_number || '',
    bank_name: profile?.bank_name || '',
  };
  const profileErrorMessage = {
    errorMessages: [],
    errorFields: [],
    hasError: false,
  };
  const isUpdatingProfile = false;

  const errorCheck = (key: string, value: string | number | boolean, error: string | undefined) => {
    if (value) {
      return profileErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  const errorMessage = (
    key: string,
    value: string | number | boolean,
    error: string | undefined
  ) => {
    if (value) {
      return profileErrorMessage.errorMessages[key] || (error !== undefined ? error : '');
    }
    return '';
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProfileSchema}
      onSubmit={(values) => {
        const itemDetails = {
          name: values.name,
          nick_name: values.nick_name,
          email: values.email,
          public_email_and_nick_name: values.public_email_and_nick_name,
          image: values.image,
          bank_account_number: values.bank_account_number,
          bank_name: values.bank_name,
        };
        console.log(itemDetails);
      }}>
      {({ errors, values, handleSubmit }) => (
        <ProfileFormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <h2>Setup your Profile</h2>

          {profileErrorMessage.hasError && (
            <FormError>{profileErrorMessage || 'There was an error'}</FormError>
          )}

          <InputContainer>
            <UploadField
              label="Upload profile picture"
              name="image"
              value={values.image}
              error={errorCheck('image', values.image, errors.image)}
              errorMessage={errorMessage('image', values.image, errors.image)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Full name"
              placeholder="Ex: Kilo Wish"
              name="name"
              type="text"
              value={values.name}
              error={errorCheck('name', values.name, errors.name)}
              errorMessage={errorMessage('name', values.name, errors.name)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Nick name"
              placeholder="Ex: Kilo"
              name="nick_name"
              type="text"
              value={values.nick_name}
              error={errorCheck('nick_name', values.nick_name, errors.nick_name)}
              errorMessage={errorMessage('nick_name', values.nick_name, errors.nick_name)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Email address"
              placeholder="Enter email address"
              name="email"
              disabled
              type="email"
              value={values.email}
              error={errorCheck('email', values.email, errors.email)}
              errorMessage={errorMessage('email', values.email, errors.email)}
            />
          </InputContainer>

          <CheckboxContainer className="mt-6">
            <CheckboxField
              label="Make nick name and email address public when sharing list?"
              name="public"
              value={values.public_email_and_nick_name}
              error={errorCheck(
                'public_email_and_nick_name',
                values.public_email_and_nick_name,
                errors.public_email_and_nick_name
              )}
              errorMessage={errorMessage(
                'public_email_and_nick_name',
                values.public_email_and_nick_name,
                errors.public_email_and_nick_name
              )}
            />
          </CheckboxContainer>

          <div className="divider-lg" />

          <h3>Account Details</h3>

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

          <p className="account-info">
            Your account details are safe and only shared with your permission.
          </p>

          <ProfileFooter>
            <SecondaryButton
              className="profile-item-button"
              text={!isUpdatingProfile ? 'Save Settings' : <Loader light />}
              size="sm"
              type="submit"
            />
          </ProfileFooter>
        </ProfileFormContainer>
      )}
    </Formik>
  );
};

export default ProfileForm;
