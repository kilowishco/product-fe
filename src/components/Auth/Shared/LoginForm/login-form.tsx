/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import InputField from '../../../Shared/FormFields/InputField';
import PasswordField from '../../../Shared/FormFields/InputField/Password';
import Loader from '../../../Shared/Loader';
import SecondaryButton from '../../../Shared/Button/SecondaryButton';
import BareButton from '../../../Shared/Button/BareButton';

import { FormContainer, InputContainer, FormError } from '../../../Shared/Form/form.styled';

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
      {({ errors, values, handleSubmit }) => (
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

          <InputContainer>
            <InputField
              label="Email address"
              placeholder="Enter email address"
              name="email"
              type="email"
              value={values.email}
              error={errorCheck('email', values.email, errors.email)}
            />
          </InputContainer>

          <InputContainer>
            <PasswordField
              label="Password"
              placeholder="Enter 8 characters or more"
              name="password"
              value={values.password}
              error={errorCheck('password', values.password, errors.password)}
            />
          </InputContainer>

          <SecondaryButton
            className="login-button"
            text={!isLoggingIn ? 'Sign In' : <Loader light />}
            size="lg"
            type="submit"
          />

          <BareButton text="Forgotten Password?" size="lg" className="fp-button" />
        </FormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
