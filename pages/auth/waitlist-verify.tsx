import { ReactElement, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Layout from '../../src/components/Shared/Layout';
import AuthWaitlistVerify from '../../src/components/Auth/WaitlistVerify';

import APIClient from '../../src/api/apiClient';
import { WaitlistVerifyProps } from '../../src/types';
import { useRouter } from 'next/router';

const api = new APIClient();

function AuthWaitlistVerifyPage({ verified, email }: WaitlistVerifyProps): ReactElement {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined && (verified || !email)) {
      router.push('/');
    }
  }, [verified, email, router]);

  return (
    <>
      <Head>
        <title>Kilowish: Create a wishlist - Get the gift you deserve</title>
        <meta
          name="description"
          content="A gift wishlist maker for birthdays, Christmas, weddings, graduation, and more! Just signup and create a gift list in 2 mins."
        />
        <meta
          name="keywords"
          content="wishlist, wishlist maker, create a wishlist, gift list, gift registry."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AuthWaitlistVerify email={email} verified={verified} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { email } = context.query;
  if (Array.isArray(email)) {
    email = email?.join('');
  }
  try {
    if (email) {
      const response = await api.checkWaitlist({ email });
      const { data } = response;

      if (data?.message === 'Email already verified in waitlist') {
        return {
          props: {
            verified: true,
            email,
          },
        };
      }
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      verified: false,
      email: email || '',
    },
  };
};

export default AuthWaitlistVerifyPage;
