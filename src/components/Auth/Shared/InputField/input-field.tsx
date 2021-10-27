import { FC, ChangeEvent, useState } from 'react';

import { InputLabel, InputWrapper, InputFieldError } from './input-field.styled';

type InputFieldProps = {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  value: string | number;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  errorMessage?: string;
};

const InputField: FC<InputFieldProps> = ({
  label,
  placeholder,
  name,
  type,
  value,
  setValue,
  error,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <InputLabel htmlFor={name}>{(value || typeof value === 'number') && label}</InputLabel>

      <InputWrapper>
        <input
          className={error ? 'error' : ''}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={setValue}
          onBlur={setValue}
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
        {type === 'password' && (
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
        )}
      </InputWrapper>

      {errorMessage && <InputFieldError>{errorMessage}</InputFieldError>}
    </>
  );
};

export default InputField;