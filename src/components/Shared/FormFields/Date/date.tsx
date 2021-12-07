import { FC } from 'react';
import dayjs from 'dayjs';
import { useFormikContext } from 'formik';
import DatePicker from 'react-date-picker';

import { DateLabel, DatePickerWrapper, DateFieldError } from './date.styled';

type DateFieldProps = {
  label: string;
  name: string;
  value: Date;
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
        {dayjs(value).format('D MMMM YYYY')}
        <DatePicker
          onChange={(val) => setFieldValue(name, val)}
          value={typeof value === 'string' ? null : value}
          minDate={value}
          clearIcon={null}
          format="y-MMM-dd"
          calendarIcon={
            <span className="date-icon">
              <span className="sr-only">Click to set Data</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 16.87V9.25699H21V16.931C21 20.07 19.0241 22 15.8628 22H8.12733C4.99561 22 3 20.03 3 16.87ZM7.95938 14.41C7.50494 14.431 7.12953 14.07 7.10977 13.611C7.10977 13.151 7.46542 12.771 7.91987 12.75C8.36443 12.75 8.72997 13.101 8.73985 13.55C8.7596 14.011 8.40395 14.391 7.95938 14.41ZM12.0198 14.41C11.5653 14.431 11.1899 14.07 11.1701 13.611C11.1701 13.151 11.5258 12.771 11.9802 12.75C12.4248 12.75 12.7903 13.101 12.8002 13.55C12.82 14.011 12.4643 14.391 12.0198 14.41ZM16.0505 18.09C15.596 18.08 15.2305 17.7 15.2305 17.24C15.2206 16.78 15.5862 16.401 16.0406 16.391H16.0505C16.5148 16.391 16.8902 16.771 16.8902 17.24C16.8902 17.71 16.5148 18.09 16.0505 18.09ZM11.1701 17.24C11.1899 17.7 11.5653 18.061 12.0198 18.04C12.4643 18.021 12.82 17.641 12.8002 17.181C12.7903 16.731 12.4248 16.38 11.9802 16.38C11.5258 16.401 11.1701 16.78 11.1701 17.24ZM7.09989 17.24C7.11965 17.7 7.49506 18.061 7.94951 18.04C8.39407 18.021 8.74973 17.641 8.72997 17.181C8.72009 16.731 8.35456 16.38 7.90999 16.38C7.45554 16.401 7.09989 16.78 7.09989 17.24ZM15.2404 13.601C15.2404 13.141 15.596 12.771 16.0505 12.761C16.4951 12.761 16.8507 13.12 16.8705 13.561C16.8804 14.021 16.5247 14.401 16.0801 14.41C15.6257 14.42 15.2503 14.07 15.2404 13.611V13.601Z"
                  fill="#7575FE"
                />
                <path
                  opacity="0.4"
                  d="M3.00342 9.2569C3.01626 8.6699 3.06566 7.5049 3.15852 7.1299C3.63273 5.0209 5.24304 3.6809 7.54491 3.4899H16.456C18.7381 3.6909 20.3682 5.0399 20.8424 7.1299C20.9343 7.4949 20.9837 8.6689 20.9965 9.2569H3.00342Z"
                  fill="#7575FE"
                />
                <path
                  d="M8.30489 6.59C8.73958 6.59 9.06559 6.261 9.06559 5.82V2.771C9.06559 2.33 8.73958 2 8.30489 2C7.8702 2 7.54419 2.33 7.54419 2.771V5.82C7.54419 6.261 7.8702 6.59 8.30489 6.59Z"
                  fill="#7575FE"
                />
                <path
                  d="M15.695 6.59C16.1198 6.59 16.4557 6.261 16.4557 5.82V2.771C16.4557 2.33 16.1198 2 15.695 2C15.2603 2 14.9343 2.33 14.9343 2.771V5.82C14.9343 6.261 15.2603 6.59 15.695 6.59Z"
                  fill="#7575FE"
                />
              </svg>
            </span>
          }
        />
      </DatePickerWrapper>

      {errorMessage && (
        <DateFieldError className={full ? 'full' : ''}>{errorMessage}</DateFieldError>
      )}
    </>
  );
};

export default DateField;
