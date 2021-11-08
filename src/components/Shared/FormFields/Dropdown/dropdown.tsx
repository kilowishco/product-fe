import { FC, ChangeEvent } from 'react';
import { useFormikContext } from 'formik';
import Select, { OptionsOrGroups, GroupBase } from 'react-select';

import { DropdownWrapper, DropdownLabel, DropdownFieldError } from './dropdown.styled';

type DropdownFieldProps = {
  label: string;
  placeholder: string;
  name: string;
  options: OptionsOrGroups<
    { value: string | number; label: string | number },
    GroupBase<{ value: string | number; label: string | number }>
  >;
  value: string | number;
  setValue: (event: ChangeEvent<HTMLSelectElement>) => void;
  error: boolean;
  errorMessage?: string;
  full?: boolean;
};

const DropdownField: FC<DropdownFieldProps> = ({
  label,
  name,
  value,
  placeholder,
  options,
  error,
  errorMessage,
  full,
}) => {
  const { setFieldValue } = useFormikContext();
  const defaultValue = {
    value,
    label: typeof value === 'string' ? `${value[0].toUpperCase()}${value.substring(1)}` : value,
  };

  return (
    <>
      {label && <DropdownLabel>{label}</DropdownLabel>}

      <DropdownWrapper className={`${error ? 'error' : ''} ${full ? 'full' : ''}`}>
        <Select
          options={options}
          defaultValue={defaultValue}
          onChange={(val) => setFieldValue(name, val)}
          placeholder={placeholder}
        />
      </DropdownWrapper>

      {errorMessage && (
        <DropdownFieldError className={full ? 'full' : ''}>{errorMessage}</DropdownFieldError>
      )}
    </>
  );
};

export default DropdownField;
