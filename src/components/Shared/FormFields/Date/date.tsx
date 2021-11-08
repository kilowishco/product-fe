import { FC } from 'react';
import { useFormikContext } from 'formik';
import DatePicker from 'react-date-picker';

import { DateLabel, DatePickerWrapper, DateFieldError } from './date.styled';

type DateFieldProps = {
  label: string;
  name: string;
  value: Date | string;
  error: boolean;
  errorMessage?: string;
  full?: boolean;
};

const DateField: FC<DateFieldProps> = ({ label, name, value, error, errorMessage, full }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <>
      {label && <DateLabel htmlFor={name}>{label}</DateLabel>}

      <DatePickerWrapper className={`${error ? 'error' : ''} ${full ? 'full' : ''}`}>
        <DatePicker
          onChange={(val) => setFieldValue(name, val)}
          value={typeof value === 'string' ? null : value}
          minDate={new Date()}
          format="y-MMM-dd"
        />
      </DatePickerWrapper>

      {errorMessage && (
        <DateFieldError className={full ? 'full' : ''}>{errorMessage}</DateFieldError>
      )}
    </>
  );
};

export default DateField;
