import { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../src/components/Shared/Layout';
import Home from '../src/components/Home';

export default function HomePage(): ReactElement {
  return (
    <div>
      <Head>
        <title>Kilowish</title>
        <meta name="description" content="Social platform for gifting and receiving gifts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
