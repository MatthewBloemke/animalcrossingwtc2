import { Html, Head, Main, NextScript } from 'next/document';
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter';

export default function Document(props: any) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
