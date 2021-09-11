import { FC } from 'react';
import Link from 'next/link';

const Logo: FC = () => {
  return (
    <Link href="/">
      <a>
        <svg
          width="85"
          height="21"
          viewBox="0 0 85 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.755 20V0.559999H4.211V12.035L8.963 6.608H13.067L7.586 12.71L13.958 20H9.638L4.211 13.277V20H0.755ZM15.4627 4.529C14.8327 4.529 14.3107 4.34 13.8967 3.962C13.5007 3.584 13.3027 3.107 13.3027 2.531C13.3027 1.955 13.5007 1.487 13.8967 1.127C14.3107 0.748999 14.8327 0.559999 15.4627 0.559999C16.0927 0.559999 16.6057 0.748999 17.0017 1.127C17.4157 1.487 17.6227 1.955 17.6227 2.531C17.6227 3.107 17.4157 3.584 17.0017 3.962C16.6057 4.34 16.0927 4.529 15.4627 4.529ZM13.7347 20V6.608H17.1907V20H13.7347ZM18.2968 20V0.559999H21.7528V20H18.2968ZM29.2091 20.324C27.9131 20.324 26.7431 20.027 25.6991 19.433C24.6731 18.839 23.8541 18.02 23.2421 16.976C22.6481 15.914 22.3511 14.69 22.3511 13.304C22.3511 11.918 22.6571 10.703 23.2691 9.659C23.8811 8.597 24.7001 7.769 25.7261 7.175C26.7701 6.581 27.9401 6.284 29.2361 6.284C30.5141 6.284 31.6661 6.581 32.6921 7.175C33.7361 7.769 34.5551 8.597 35.1491 9.659C35.7611 10.703 36.0671 11.918 36.0671 13.304C36.0671 14.69 35.7611 15.914 35.1491 16.976C34.5551 18.02 33.7361 18.839 32.6921 19.433C31.6481 20.027 30.4871 20.324 29.2091 20.324ZM29.2091 17.327C30.1091 17.327 30.8921 16.994 31.5581 16.328C32.2241 15.644 32.5571 14.636 32.5571 13.304C32.5571 11.972 32.2241 10.973 31.5581 10.307C30.8921 9.623 30.1181 9.281 29.2361 9.281C28.3181 9.281 27.5261 9.623 26.8601 10.307C26.2121 10.973 25.8881 11.972 25.8881 13.304C25.8881 14.636 26.2121 15.644 26.8601 16.328C27.5261 16.994 28.3091 17.327 29.2091 17.327ZM38.8005 20L34.8855 6.608H38.3145L40.6365 16.247L43.3365 6.608H47.1705L49.8705 16.247L52.2195 6.608H55.6485L51.7065 20H48.1155L45.2535 9.983L42.3915 20H38.8005ZM57.1909 4.529C56.5609 4.529 56.0389 4.34 55.6249 3.962C55.2289 3.584 55.0309 3.107 55.0309 2.531C55.0309 1.955 55.2289 1.487 55.6249 1.127C56.0389 0.748999 56.5609 0.559999 57.1909 0.559999C57.8209 0.559999 58.3339 0.748999 58.7299 1.127C59.1439 1.487 59.3509 1.955 59.3509 2.531C59.3509 3.107 59.1439 3.584 58.7299 3.962C58.3339 4.34 57.8209 4.529 57.1909 4.529ZM55.4629 20V6.608H58.9189V20H55.4629ZM65.56 20.324C64.372 20.324 63.328 20.135 62.428 19.757C61.528 19.361 60.808 18.821 60.268 18.137C59.728 17.453 59.404 16.661 59.296 15.761H62.779C62.887 16.283 63.175 16.733 63.643 17.111C64.129 17.471 64.75 17.651 65.506 17.651C66.262 17.651 66.811 17.498 67.153 17.192C67.513 16.886 67.693 16.535 67.693 16.139C67.693 15.563 67.441 15.176 66.937 14.978C66.433 14.762 65.731 14.555 64.831 14.357C64.255 14.231 63.67 14.078 63.076 13.898C62.482 13.718 61.933 13.493 61.429 13.223C60.943 12.935 60.547 12.575 60.241 12.143C59.935 11.693 59.782 11.144 59.782 10.496C59.782 9.308 60.25 8.309 61.186 7.499C62.14 6.689 63.472 6.284 65.182 6.284C66.766 6.284 68.026 6.653 68.962 7.391C69.916 8.129 70.483 9.146 70.663 10.442H67.396C67.198 9.452 66.451 8.957 65.155 8.957C64.507 8.957 64.003 9.083 63.643 9.335C63.301 9.587 63.13 9.902 63.13 10.28C63.13 10.676 63.391 10.991 63.913 11.225C64.435 11.459 65.128 11.675 65.992 11.873C66.928 12.089 67.783 12.332 68.557 12.602C69.349 12.854 69.979 13.241 70.447 13.763C70.915 14.267 71.149 14.996 71.149 15.95C71.167 16.778 70.951 17.525 70.501 18.191C70.051 18.857 69.403 19.379 68.557 19.757C67.711 20.135 66.712 20.324 65.56 20.324ZM71.7095 20V0.559999H75.1655V8.66C75.6155 7.922 76.2185 7.346 76.9745 6.932C77.7485 6.5 78.6305 6.284 79.6205 6.284C81.2765 6.284 82.5545 6.806 83.4545 7.85C84.3725 8.894 84.8315 10.424 84.8315 12.44V20H81.4025V12.764C81.4025 11.612 81.1685 10.73 80.7005 10.118C80.2505 9.506 79.5305 9.2 78.5405 9.2C77.5685 9.2 76.7585 9.542 76.1105 10.226C75.4805 10.91 75.1655 11.864 75.1655 13.088V20H71.7095Z"
            fill="#0E0E41"
          />
        </svg>
      </a>
    </Link>
  );
};

export default Logo;