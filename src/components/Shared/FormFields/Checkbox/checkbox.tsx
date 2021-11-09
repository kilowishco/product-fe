import { FC, ReactNode } from 'react';
import { useFormikContext } from 'formik';

import { CheckboxLabel, CheckboxWrapper, CheckboxError } from './checkbox.styled';

type CheckboxFieldProps = {
  label: ReactNode | string;
  name: string;
  value: boolean;
  error: boolean;
  errorMessage?: string;
  full?: boolean;
};

const CheckboxField: FC<CheckboxFieldProps> = ({
  label,
  name,
  value,
  error,
  errorMessage,
  full,
}) => {
  const { setFieldValue } = useFormikContext();

  return (
    <>
      <CheckboxWrapper className={full ? 'full' : ''}>
        <input
          className={error ? 'error' : ''}
          type="checkbox"
          checked={value}
          onChange={(val) => setFieldValue(name, val)}
          onBlur={(val) => setFieldValue(name, val)}
          id={name}
          name={name}
        />
        {label && <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>}
      </CheckboxWrapper>

      {errorMessage && <CheckboxError className={full ? 'full' : ''}>{errorMessage}</CheckboxError>}
    </>
  );
};

export default CheckboxField;
