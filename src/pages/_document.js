import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='fr'>
            <Head>
                <title>Portfolio | Lenny 👋</title>
            </Head>
            <body className='relative bg-black min-h-svh p-2'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
