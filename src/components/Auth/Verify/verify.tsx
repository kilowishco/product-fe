import { FC } from 'react';

import AuthWrapper from '../auth';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import { VerifyContainer } from './verify.styled';

type VerifyProps = {
  email: string;
};

const Verify: FC<VerifyProps> = ({ email }) => {
  return (
    <ErrorBoundary link="/">
      <AuthWrapper>
        <VerifyContainer>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_923:1203)">
              <path
                d="M28.2243 0.346235C23.6884 2.18447 13.1802 6.62412 8.0076 7.68788C6.86466 7.92294 6.04901 8.93612 6.04901 10.1029V25.0655C6.04901 36.7988 11.3324 47.9084 20.4341 55.3132L23.2432 57.5986C27.1787 60.8004 32.821 60.8004 36.7565 57.5986L39.5657 55.3132C48.6674 47.9084 53.9508 36.7984 53.9508 25.0651V10.1029C53.9508 8.93612 53.1351 7.92294 51.9922 7.68788C46.8196 6.62412 36.3114 2.18447 31.7756 0.346235C30.6364 -0.115412 29.3635 -0.115412 28.2243 0.346235Z"
                fill="url(#paint0_linear_923:1203)"
              />
              <path
                d="M30 49.9201C41.0015 49.9201 49.9201 41.0016 49.9201 30C49.9201 18.9984 41.0015 10.0799 30 10.0799C18.9984 10.0799 10.0798 18.9984 10.0798 30C10.0798 41.0016 18.9984 49.9201 30 49.9201Z"
                fill="url(#paint1_linear_923:1203)"
              />
              <path
                d="M47.675 30C47.675 35.3319 45.3142 40.1122 41.5808 43.353C38.479 46.0454 34.4298 46.028 30 46.028C25.6147 46.028 21.6024 46.0781 18.513 43.4339C14.7254 40.1921 12.3249 35.3764 12.3249 30C12.3249 20.2384 20.2383 12.325 30 12.325C39.7616 12.325 47.675 20.2384 47.675 30Z"
                fill="url(#paint2_linear_923:1203)"
              />
              <path
                d="M30.0389 15.0515C25.4614 15.0515 21.9594 18.5535 21.9594 23.131C21.9594 25.5766 22.8102 27.7742 24.4949 29.2913L38.7529 43.5494C39.3505 43.1464 41.038 43.8238 41.5806 43.3529C45.314 40.1122 47.6749 35.3319 47.6749 30.0001C47.6749 29.6766 47.6656 29.3553 47.6485 29.0362L36.1993 17.587C34.6821 15.9023 32.4846 15.0515 30.0389 15.0515Z"
                fill="url(#paint3_linear_923:1203)"
              />
              <path
                d="M30 31.3804C34.5776 31.3804 38.2884 27.6695 38.2884 23.0919C38.2884 18.5143 34.5776 14.8035 30 14.8035C25.4224 14.8035 21.7115 18.5143 21.7115 23.0919C21.7115 27.6695 25.4224 31.3804 30 31.3804Z"
                fill="url(#paint4_linear_923:1203)"
              />
              <path
                d="M40.9972 37.1059C43.2414 38.5458 43.4642 41.7558 41.4308 43.4806C41.4074 43.5005 41.384 43.5203 41.3605 43.54C38.2883 46.1216 34.3258 47.6748 30 47.6748C25.6314 47.6748 21.6345 46.0902 18.5498 43.4638C18.5378 43.4536 18.5258 43.4433 18.5138 43.4331C16.492 41.7044 16.7312 38.4989 18.9746 37.0698C22.1478 35.0485 25.9159 33.8779 29.957 33.8779C34.0245 33.8779 37.8123 35.0625 40.9972 37.1059Z"
                fill="url(#paint5_linear_923:1203)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_923:1203"
                x1="8.47254"
                y1="3.62012"
                x2="52.7834"
                y2="47.9308"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#7575FE" />
                <stop offset="1" stopColor="#4343FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_923:1203"
                x1="46.2734"
                y1="46.2734"
                x2="13.9774"
                y2="13.9774"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#7575FE" />
                <stop offset="1" stopColor="#7575FE" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_923:1203"
                x1="25.9121"
                y1="25.9121"
                x2="40.3029"
                y2="40.303"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4343FF" />
                <stop offset="1" stopColor="#5757FF" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_923:1203"
                x1="43.3354"
                y1="36.4276"
                x2="26.7317"
                y2="19.8238"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4256AC" stopOpacity="0" />
                <stop offset="1" stopColor="#1B1464" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_923:1203"
                x1="6.059"
                y1="-0.849016"
                x2="46.947"
                y2="40.039"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#EBEFF0" />
                <stop offset="1" stopColor="#E3E5E4" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_923:1203"
                x1="27.369"
                y1="35.7512"
                x2="32.484"
                y2="44.9373"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#EBEFF0" />
                <stop offset="1" stopColor="#E3E5E4" />
              </linearGradient>
              <clipPath id="clip0_923:1203">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h3>Your account has been succesfully created!</h3>
          <p>
            We’ve sent you a verification link to your email address <span>{email}</span>
          </p>
        </VerifyContainer>
      </AuthWrapper>
    </ErrorBoundary>
  );
};

export default Verify;
