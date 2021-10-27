import { FC, ChangeEvent, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import AuthWrapper from '../auth';
import PrimaryButton from '../../Shared/Button/PrimaryButton';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import { WaitlistVerifyContainer, ResendCodeWrapper } from './waitlist-verify.styled';

import APIClient from '../../../api/apiClient';
import { calculateCodeDeadline, getErrorMessage } from '../../../utils';
import { WaitlistVerifyProps } from '../../../types';

const api = new APIClient();

const WaitlistVerify: FC<WaitlistVerifyProps> = ({ email, verified }) => {
  const router = useRouter();

  const [emailInfo, setEmailInfo] = useState({
    error: '',
    code: '',
    verified,
  });
  const [countdownValue, setCountdownValue] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const newEmailSession = useRef(false);
  const timerInterval = useRef(null);
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

  const verifyEmail = async () => {
    if (emailInfo.code.trim() === '' || submitting) return;
    setSubmitting(true);
    try {
      const response = await api.verfifyWaitlist({
        email: email,
        code: emailInfo.code,
      });
      setSubmitting(false);
      if (!response.status) {
        throw new Error();
      }
      setEmailInfo((prevEmailInfo) => ({
        ...prevEmailInfo,
        verified: true,
      }));
      setTimeout(() => router.push('/'), 3000);
    } catch (error) {
      handleError(error);
    }
  };

  const generateCountdown = useRef(() => {
    const resendDeadline = new Date();
    resendDeadline.setMinutes(resendDeadline.getMinutes() + 1);

    timerInterval.current = setInterval(() => {
      const { text } = calculateCodeDeadline(resendDeadline);
      if (text === 'expired') {
        setCountdownValue('');
        return clearInterval(timerInterval.current);
      }
      setCountdownValue(text);
      return;
    }, 1000);
  });

  const resendWaitlistCode = async () => {
    clearInterval(timerInterval.current);
    api.resendWaitlistCode({ email });
    return generateCountdown.current();
  };

  useEffect(() => {
    let submitWaitlist;
    if (!verified) {
      generateCountdown.current();
      submitWaitlist = submitWaitlistForm.current;
      window.addEventListener('keydown', submitWaitlist);
    }

    return () => {
      if (!verified) {
        window.removeEventListener('keydown', submitWaitlist);
        clearInterval(timerInterval.current);
      }
    };
  }, [verified]);

  useEffect(() => {
    if (newEmailSession.current && emailInfo.code) {
      setEmailInfo((prevEmailInfo) => ({
        ...prevEmailInfo,
        error: '',
      }));
      newEmailSession.current = false;
    }
  }, [emailInfo.code]);

  const WaitlistConfirmationInput = () => {
    return (
      <>
        {emailInfo.verified ? (
          <p>Thank you for joining our waitlist</p>
        ) : (
          <>
            <h4 id="waitlist-code">Enter the verification code sent to your email address</h4>
            <div>
              <input
                aria-labelledby="waitlist-code"
                value={emailInfo.code}
                type="text"
                pattern="^[0-9]*$"
                className={emailInfo.error ? 'error' : ''}
                placeholder="000000"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmailInfo((prevEmailInfo) => ({
                    ...prevEmailInfo,
                    code: e.target.value,
                  }))
                }
                onBlur={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmailInfo((prevEmailInfo) => ({
                    ...prevEmailInfo,
                    code: e.target.value,
                  }))
                }
              />
              <PrimaryButton
                size="lg"
                text="Verify Email"
                buttonRef={submitButtonRef}
                onClick={verifyEmail}
                disabled={submitting}
                aria-disabled={submitting}
              />
            </div>

            {emailInfo.error && <p className="waitlist--error">{emailInfo.error}</p>}
          </>
        )}
      </>
    );
  };

  return (
    <ErrorBoundary link="/">
      <AuthWrapper isAuthSwitchHidden>
        <WaitlistVerifyContainer className="join-waitlist --center join-waitlist__confirmation-modal">
          {WaitlistConfirmationInput()}
        </WaitlistVerifyContainer>
        <ResendCodeWrapper>
          <p>
            {`Didn't receive an email? `}
            {countdownValue ? (
              <span>{countdownValue}</span>
            ) : (
              <button onClick={resendWaitlistCode}>
                <span>Click to resend</span>
              </button>
            )}
          </p>
        </ResendCodeWrapper>
      </AuthWrapper>
    </ErrorBoundary>
  );
};

export default WaitlistVerify;
