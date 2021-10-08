import { ChangeEvent, FC, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { JoinWaitlistContainer } from './join-waitlist.styled';
import PrimaryButton from '../Button/PrimaryButton';

import APIClient from '../../../api/apiClient';
import { getErrorMessage } from '../../../utils';

const api = new APIClient();

const JoinWaitlist: FC = () => {
  const router = useRouter();

  const [emailInfo, setEmailInfo] = useState({
    email: '',
    error: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const newEmailSession = useRef(false);
  const submitButtonRef = useRef(null);

  const submitWaitlistForm = useRef((e) => {
    // Enter key triggers the authorization
    if (e.keyCode === 13) {
      const submitButton = submitButtonRef.current;
      if (!submitButton.classList.contains('disabled')) {
        submitButton.click();
      }
      return;
    }
  });

  const handleError = (error) => {
    setSubmitting(false);
    const errorMessage = getErrorMessage(error);
    setEmailInfo((prevEmailInfo) => ({
      ...prevEmailInfo,
      error: errorMessage || 'There was an issue completing your request. Please try again',
    }));
    setTimeout(() => {
      newEmailSession.current = true;
      const waitlistError: HTMLParagraphElement = document.querySelector('.waitlist--error');
      waitlistError?.focus();
    });
  };

  async function addToWaitlist() {
    if (emailInfo.email.trim() === '' || submitting) return;
    setSubmitting(true);
    try {
      const response = await api.addToWaitlist({
        email: emailInfo.email,
      });
      setSubmitting(false);
      if (!response.status) {
        throw new Error();
      }
      router.push(`/auth/waitlist-verify?email=${emailInfo.email}`);
    } catch (error) {
      handleError(error);
    }
  }

  useEffect(() => {
    const submitWaitlist = submitWaitlistForm.current;
    window.addEventListener('keydown', submitWaitlist);

    return () => window.removeEventListener('keydown', submitWaitlist);
  }, []);

  useEffect(() => {
    if (newEmailSession.current && emailInfo.email) {
      setEmailInfo((prevEmailInfo) => ({
        ...prevEmailInfo,
        error: '',
      }));
      newEmailSession.current = false;
    }
  }, [emailInfo.email]);

  const WaitlistInput = () => {
    return (
      <>
        <div>
          <input
            aria-label="Enter email address to join waitlist"
            value={emailInfo.email}
            type="email"
            className={emailInfo.error ? 'error' : ''}
            placeholder="Enter email address"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmailInfo((prevEmailInfo) => ({
                ...prevEmailInfo,
                email: e.target.value,
              }))
            }
            onBlur={(e: ChangeEvent<HTMLInputElement>) =>
              setEmailInfo((prevEmailInfo) => ({
                ...prevEmailInfo,
                email: e.target.value,
              }))
            }
          />
          <PrimaryButton
            size="lg"
            text="Join Waitlist"
            buttonRef={submitButtonRef}
            onClick={addToWaitlist}
            disabled={submitting}
            aria-disabled={submitting}
          />
        </div>

        {emailInfo.error && <p className="waitlist--error">{emailInfo.error}</p>}
      </>
    );
  };

  return <JoinWaitlistContainer className="join-waitlist">{WaitlistInput()}</JoinWaitlistContainer>;
};

export default JoinWaitlist;
