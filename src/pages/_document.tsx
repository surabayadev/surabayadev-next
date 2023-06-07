import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body className="font-inter antialiased bg-white text-gray-900 tracking-tight">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
