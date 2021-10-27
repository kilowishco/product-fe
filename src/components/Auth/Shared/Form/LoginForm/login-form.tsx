/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import InputField from '../../InputField';
import Loader from '../../Loader';
import SecondaryButton from '../../../../Shared/Button/SecondaryButton';

import { FormContainer, InputContainer, FormError } from '../form.styled';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm: FC = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const loginErrorMessage = {
    errorFields: [],
    hasError: false,
  };
  const isLoggingIn = false;

  const errorCheck = (key: string, value: string, error: string | undefined) => {
    if (value) {
      return loginErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        const loginDetails = {
          ...values,
        };
        console.log(loginDetails);
      }}>
      {({ errors, values, handleChange, handleSubmit }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <h2>Log In to your account.</h2>

          <p>
            {loginErrorMessage.hasError && (
              <FormError>{loginErrorMessage || 'There was an error'}</FormError>
            )}
          </p>

          <article>
            <InputContainer>
              <InputField
                label="Email address"
                placeholder="Email"
                name="email"
                type="email"
                value={values.email}
                setValue={handleChange}
                error={errorCheck('email', values.email, errors.email)}
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
              />
            </InputContainer>

            <SecondaryButton
              className="login-button"
              text={!isLoggingIn ? 'Sign In' : <Loader light />}
              size="lg"
              type="submit"
            />

            {/* <div className="auth-switch-container">
              TODO: Forgotten Password
            </div> */}
          </article>
        </FormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
