import { FC } from 'react';
import { useFormikContext } from 'formik';

import { TextareaLabel, TextareaWrapper, TextareaError } from './textarea.styled';

type TextareaProps = {
  label: string;
  placeholder: string;
  name: string;
  value: string | number;
  error: boolean;
  errorMessage?: string;
  full?: boolean;
};

const Textarea: FC<TextareaProps> = ({
  label,
  placeholder,
  name,
  value,
  error,
  errorMessage,
  full,
}) => {
  const { setFieldValue } = useFormikContext();

  return (
    <>
      {label && <TextareaLabel htmlFor={name}>{label}</TextareaLabel>}

      <TextareaWrapper className={full ? 'full' : ''}>
        <textarea
          className={error ? 'error' : ''}
          value={value}
          placeholder={placeholder}
          onChange={(val) => setFieldValue(name, val)}
          onBlur={(val) => setFieldValue(name, val)}
          id={name}
          name={name}
        />
      </TextareaWrapper>

      {errorMessage && <TextareaError className={full ? 'full' : ''}>{errorMessage}</TextareaError>}
    </>
  );
};

export default Textarea;
