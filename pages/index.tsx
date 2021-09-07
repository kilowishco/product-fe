import { ReactElement } from 'react';
import Head from 'next/head';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Kilowish</title>
        <meta name="description" content="Social platform for gifting and receiving gifts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-gray-900 text-center">Hello World</main>
    </div>
  );
}
