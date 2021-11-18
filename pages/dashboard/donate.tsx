import { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../../src/components/Shared/Layout';
import Donate from '../../src/components/Dashboard/Donate';

export default function HomePage(): ReactElement {
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
        <Donate />
      </Layout>
    </>
  );
}
