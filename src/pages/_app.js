import '@/global.css'
import Layout from '@/components/layout';
import { MenuProvider } from '@/contexts/MenuContext';

export default function App({ Component, pageProps }) {
	return (
		<MenuProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MenuProvider>
	);
}
