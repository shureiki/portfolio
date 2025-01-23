import '@/global.css'

import Layout from '@/components/layout';

import { MenuProvider } from '@/contexts/MenuContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function App({ Component, pageProps }) {
	return (
		<MenuProvider>
			<ThemeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</MenuProvider>
	);
}
