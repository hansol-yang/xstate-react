import { AppProps } from 'next/app';
import { AppShell } from '../components/AppShell';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppShell>
            <Component {...pageProps} />
        </AppShell>
    );
}
