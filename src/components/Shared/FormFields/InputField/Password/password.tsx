import { FC, useState } from 'react';
import { useFormikContext } from 'formik';

import { InputLabel, InputWrapper, InputFieldError } from '../input-field.styled';

type PasswordFieldProps = {
  label: string;
  placeholder: string;
  name: string;
  value: string | number;
  error: boolean;
  errorMessage?: string;
  full?: boolean;
};

const PasswordField: FC<PasswordFieldProps> = ({
  label,
  placeholder,
  name,
  value,
  error,
  errorMessage,
  full,
}) => {
  const { setFieldValue } = useFormikContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}

      <InputWrapper className={full ? 'full' : ''}>
        <input
          className={error ? 'error' : ''}
          type="password"
          value={value}
          placeholder={placeholder}
          onChange={(val) => setFieldValue(name, val)}
          onBlur={(val) => setFieldValue(name, val)}
          id={name}
          name={name}
        />
        {showPassword && (
          <button
            className="placeholder"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(false);
            }}>
            {value}
          </button>
        )}
        <button
          className="placeholder-button"
          onClick={(e) => {
            e.preventDefault();
            setShowPassword(true);
          }}>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
              fill="#E1E4E6"
            />
          </svg>
        </button>
      </InputWrapper>

      {errorMessage && <InputFieldError>{errorMessage}</InputFieldError>}
    </>
  );
};

export default PasswordField;