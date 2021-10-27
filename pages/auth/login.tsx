import { ReactElement } from 'react';
import Head from 'next/head';

import Layout from '../../src/components/Shared/Layout';
import Login from '../../src/components/Auth/Login';

function AuthLoginPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Kilowish: Create a wishlist - Get the gift you deserve</title>
        <meta
          name="description"
          content="A gift wishlist maker for birthdays, Christmas, weddings, graduation, and more! Just sign up and create a gift list in 2 mins."
        />
        <meta
          name="keywords"
          content="wishlist, wishlist maker, create a wishlist, gift list, gift registry."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Login />
      </Layout>
    </>
  );
}

export default AuthLoginPage;
