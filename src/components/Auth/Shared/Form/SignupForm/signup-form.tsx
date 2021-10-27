/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import InputField from '../../InputField';
import Loader from '../../Loader';
import SecondaryButton from '../../../../Shared/Button/SecondaryButton';

import { FormContainer, InputContainer, FormError } from '../form.styled';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const SignupForm: FC = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const signupErrorMessage = {
    errorMessages: [],
    errorFields: [],
    hasError: false,
  };
  const IsCreatingAccount = false;

  const errorCheck = (key: string, value: string, error: string | undefined) => {
    if (value) {
      return signupErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  const errorMessage = (key: string, value: string, error: string | undefined) => {
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
      {({ errors, values, handleChange, handleSubmit }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <h2>Get started absolutely free.</h2>

          <p>
            {signupErrorMessage.hasError && (
              <FormError>{signupErrorMessage || 'There was an error'}</FormError>
            )}
          </p>

          <InputContainer>
            <InputField
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              setValue={handleChange}
              error={errorCheck('email', values.email, errors.email)}
              errorMessage={errorMessage('email', values.email, errors.email)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              value={values.password}
              setValue={handleChange}
              error={errorCheck('password', values.password, errors.password)}
              errorMessage={errorMessage('password', values.password, errors.password)}
            />
          </InputContainer>

          <SecondaryButton
            className="signup-button"
            text={!IsCreatingAccount ? 'Sign Up' : <Loader light />}
            size="lg"
            type="submit"
          />

          {/* <div className="auth-switch-container">
              TODO: Forgotten Password
            </div> */}
        </FormContainer>
      )}
    </Formik>
  );
};

export default SignupForm;
