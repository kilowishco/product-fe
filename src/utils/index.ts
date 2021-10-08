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
  if (errorMessage.includes('Email does not exist / not verified in waitlist')) {
    return 'Email does not exist / not verified in waitlist';
  }
  return '';
}

export function calculateCodeDeadline(time: Date): { text: string } {
  let text = '';

  const now = new Date().getTime();
  const endTime = new Date(time).getTime();
  const diff = endTime - now;

  const seconds = Math.floor((((diff % 86400000) % 3600000) % 60000) / 1000);

  if (seconds > 0) {
    text += `${seconds}s`;
    return { text };
  }

  return { text: 'expired' };
}
