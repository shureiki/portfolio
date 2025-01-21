import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    const seasonColors = [
        '#3096ff', // Winter
        '#4A52E8', // Spring
        '#fff937', // Summer
        '#ff9930' // Autumn
    ];

    const now = new Date();
    const currentMonth = 12;
    // const currentMonth = now.getMonth() + 1;

    return (
        <Html
            lang='fr'
            style={{ '--accent-season': seasonColors[Math.floor(currentMonth / 3) % seasonColors.length] }}
        >
            <Head />
            <body className='relative bg-black p-4 md:h-svh md:px-12 md:py-10'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
