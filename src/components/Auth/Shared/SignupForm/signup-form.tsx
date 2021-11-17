/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import InputField from '../../../Shared/FormFields/InputField';
import PasswordField from '../../../Shared/FormFields/InputField/Password';
import CheckboxField from '../../../Shared/FormFields/Checkbox';
import Loader from '../../../Shared/Loader';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';
import DefaultButton from '../../../Shared/Button/DefaultButton';
import SpacedList from '../../../Shared/SpacedList';
import Divider from '../../../Shared/Divider';

import {
  FormContainer,
  InputContainer,
  FormError,
  CheckboxContainer,
} from '../../../Shared/Form/form.styled';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  terms: Yup.boolean().required('Required'),
});

const SignupForm: FC = () => {
  const initialValues = {
    email: '',
    password: '',
    terms: false,
  };
  const signupErrorMessage = {
    errorMessages: [],
    errorFields: [],
    hasError: false,
  };
  const IsCreatingAccount = false;

  const errorCheck = (key: string, value: string | boolean, error: string | undefined) => {
    if (value) {
      return signupErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  const errorMessage = (key: string, value: string | boolean, error: string | undefined) => {
    if (value) {
      return signupErrorMessage.errorMessages[key] || (error !== undefined ? error : '');
    }
    return '';
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        const userDetails = {
          email: values.email,
          password: values.password,
        };
        console.log(userDetails);
      }}>
      {({ errors, values, handleSubmit }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="signup-form">
          <h2>
            <span className="--desktop-only">To complete your list, please sign up</span>
            <span className="--mobile-only">Create account!</span>
          </h2>

          <p>
            {signupErrorMessage.hasError && (
              <FormError>{signupErrorMessage || 'There was an error'}</FormError>
            )}
          </p>

          <div className="social_login--buttons">
            <SpacedList>
              <DefaultButton
                text={
                  <SpacedList>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.8962 20.0001C19.5057 20.0001 20 19.5059 20 18.8962V1.10383C20 0.494141 19.5057 0 18.8962 0H1.10383C0.494062 0 0 0.494141 0 1.10383V18.8962C0 19.5059 0.494062 20.0001 1.10383 20.0001H18.8962Z"
                        fill="#2F5DC1"
                      />
                      <path
                        d="M13.7995 19.9999V12.2548H16.3993L16.7885 9.23645H13.7995V7.30926C13.7995 6.43535 14.0423 5.8398 15.2955 5.8398L16.8938 5.8391V3.13949C16.6173 3.1027 15.6685 3.02051 14.5648 3.02051C12.2602 3.02051 10.6826 4.42715 10.6826 7.01043V9.23645H8.07617V12.2548H10.6826V19.9999H13.7995Z"
                        fill="white"
                      />
                    </svg>
                    <span>Sign Up with Facebook</span>
                  </SpacedList>
                }
                size="lg"
              />

              <DefaultButton
                text={
                  <SpacedList>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M1.15283 5.3455L4.43833 7.755C5.32733 5.554 7.48033 4 9.99983 4C11.5293 4 12.9208 4.577 13.9803 5.5195L16.8088 2.691C15.0228 1.0265 12.6338 0 9.99983 0C6.15883 0 2.82783 2.1685 1.15283 5.3455Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M10.0002 19.9999C12.5832 19.9999 14.9302 19.0114 16.7047 17.4039L13.6097 14.7849C12.5719 15.574 11.3039 16.0009 10.0002 15.9999C7.39916 15.9999 5.19066 14.3414 4.35866 12.0269L1.09766 14.5394C2.75266 17.7779 6.11366 19.9999 10.0002 19.9999Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
                        fill="#1976D2"
                      />
                    </svg>
                    <span>Sign Up with Google</span>
                  </SpacedList>
                }
                size="lg"
              />
            </SpacedList>
          </div>

          <Divider text="or" />

          <InputContainer>
            <InputField
              label="Email address"
              placeholder="Enter email address"
              name="email"
              type="email"
              value={values.email}
              error={errorCheck('email', values.email, errors.email)}
              errorMessage={errorMessage('email', values.email, errors.email)}
            />
          </InputContainer>

          <InputContainer>
            <PasswordField
              label="Create password"
              placeholder="Enter 8 characters or more"
              name="password"
              value={values.password}
              error={errorCheck('password', values.password, errors.password)}
              errorMessage={errorMessage('password', values.password, errors.password)}
            />
          </InputContainer>

          <CheckboxContainer>
            <CheckboxField
              label="By clicking this, you agree to our terms and conditions"
              name="terms"
              value={values.terms}
              error={errorCheck('terms', values.terms, errors.terms)}
              errorMessage={errorMessage('terms', values.terms, errors.terms)}
            />
          </CheckboxContainer>

          <SecondaryButton
            className="signup-button"
            text={!IsCreatingAccount ? 'Create Account' : <Loader light />}
            size="lg"
            type="submit"
          />
        </FormContainer>
      )}
    </Formik>
  );
};

export default SignupForm;
