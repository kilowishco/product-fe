import { ChangeEvent, FC, useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';
import { JoinWaitlistContainer } from './join-waitlist.styled';
import PrimaryButton from '../Button/PrimaryButton';
import Modal from '../Modal';

import APIClient from '../../../api/apiClient';
import { getErrorMessage } from '../../../utils';

const api = new APIClient();

const JoinWaitlist: FC = () => {
  const [emailInfo, setEmailInfo] = useState({
    email: '',
    error: '',
    code: '',
    verified: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const newEmailSession = useRef(false);

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
      setIsModalOpen(true);
    } catch (error) {
      handleError(error);
    }
  }

  async function verifyEmail() {
    if (emailInfo.code.trim() === '' || submitting) return;
    setSubmitting(true);
    try {
      const response = await api.verfifyWaitlist({
        email: emailInfo.email,
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
    } catch (error) {
      handleError(error);
    }
  }

  useEffect(() => {
    if (newEmailSession.current && (emailInfo.email || emailInfo.code)) {
      setEmailInfo((prevEmailInfo) => ({
        ...prevEmailInfo,
        error: '',
      }));
      newEmailSession.current = false;
    }
  }, [emailInfo.email, emailInfo.code]);

  const WaitlistInput = () => {
    return (
      <>
        <div>
          <input
            aria-label="Enter email address to join waitlist"
            value={emailInfo.email}
            type="email"
            className={!isModalOpen && emailInfo.error ? 'error' : ''}
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
            onClick={addToWaitlist}
            disabled={submitting}
            aria-disabled={submitting}
          />
        </div>

        {!isModalOpen && emailInfo.error && <p className="waitlist--error">{emailInfo.error}</p>}
      </>
    );
  };

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
                className={isModalOpen && emailInfo.error ? 'error' : ''}
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
                onClick={verifyEmail}
                disabled={submitting}
                aria-disabled={submitting}
              />
            </div>

            {isModalOpen && emailInfo.error && <p className="waitlist--error">{emailInfo.error}</p>}
          </>
        )}
      </>
    );
  };

  return (
    <>
      <JoinWaitlistContainer className="join-waitlist">{WaitlistInput()}</JoinWaitlistContainer>

      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          background="#ffffff"
          padding="7rem"
          maxWidth={500}>
          <JoinWaitlistContainer className="join-waitlist --center join-waitlist__confirmation-modal">
            {WaitlistConfirmationInput()}
          </JoinWaitlistContainer>
        </Modal>
      )}
    </>
  );
};

export default JoinWaitlist;
