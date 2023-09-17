import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <title>Pokemon, place where you can find your favorite pokemon.</title>
        <meta name="yandex-verification" content="400343582cd21f45" />
      </Head>
      <body>
        <noscript>
          <div style={{ textAlign: 'center' }}>
           For full access to the website you have to turn on the JavaScript.
            <a
              href="https://www.enable-javascript.com/ru/"
              style={{ color: 'blue', display: 'block', textDecoration: 'underline' }}
            >
              This is a document where you can check how to turn on the javascript.
            </a>
            .
          </div>
        </noscript>
        <Main />
        <NextScript />
      </body>
      <div id="myportal" />
    </Html>
  )
}
