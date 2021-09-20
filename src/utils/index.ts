export function getErrorMessage(error: {
  response: {
    data: {
      errorMessage: string;
    };
  };
  data: {
    errorMessage: string;
  };
}): string {
  const errorData = error?.response?.data || error?.data;
  const errorMessage = errorData?.errorMessage;
  if (errorMessage.includes('must be a valid email')) {
    return 'Please enter a valid email address';
  }
  if (errorMessage.includes('Email has already been taken')) {
    return 'Email address is already on the waitlist';
  }
  if (errorMessage.includes('Invalid verification code provided')) {
    return 'Incorrect verification code';
  }
  return '';
}
