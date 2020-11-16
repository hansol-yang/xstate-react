import { AppProps } from 'next/app';
import { AppShell } from '../components/AppShell';

import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppShell>
            <Component {...pageProps} />
        </AppShell>
    );
}
