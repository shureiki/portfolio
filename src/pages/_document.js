import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='fr'>
            <Head />
            <body className='relative bg-black min-h-svh p-4 md:px-12 md:py-10'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
