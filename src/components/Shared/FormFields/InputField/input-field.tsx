import { FC } from 'react';
import { useFormikContext } from 'formik';

import { InputLabel, InputWrapper, InputFieldError } from './input-field.styled';

type InputFieldProps = {
  label: string;
  placeholder: string;
  name: string;
  type: 'email' | 'number' | 'text' | 'numeric';
  value: string | number;
  error: boolean;
  errorMessage?: string;
  full?: boolean;
};

const InputField: FC<InputFieldProps> = ({
  label,
  placeholder,
  name,
  type,
  value,
  error,
  errorMessage,
  full,
}) => {
  const { setFieldValue } = useFormikContext();

  return (
    <>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}

      <InputWrapper className={full ? 'full' : ''}>
        <input
          className={error ? 'error' : ''}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(val) => setFieldValue(name, val)}
          onBlur={(val) => setFieldValue(name, val)}
          id={name}
          name={name}
        />
      </InputWrapper>

      {errorMessage && (
        <InputFieldError className={full ? 'full' : ''}>{errorMessage}</InputFieldError>
      )}
    </>
  );
};

export default InputField;
