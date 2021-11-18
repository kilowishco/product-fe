import { ReactElement, useLayoutEffect } from 'react';
import Head from 'next/head';

import Layout from '../../src/components/Shared/Layout';
import EmailVerify from '../../src/components/Auth/Verify';

import { useRouter } from 'next/router';

function AuthSignupVerifyPage(): ReactElement {
  const router = useRouter();
  let { email } = router.query;

  if (Array.isArray(email)) {
    email = email?.join('');
  }

  useLayoutEffect(() => {
    if (typeof window !== undefined && !email) {
      router.push('/');
    }
  }, [email, router]);

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
        <EmailVerify email={email} />
      </Layout>
    </>
  );
}

export default AuthSignupVerifyPage;
