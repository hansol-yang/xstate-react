import { useRouter } from 'next/router';

export function Navbar() {
    const router = useRouter();
    const _onClickLogin = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push('/auth/login');
    };
    return (
        <nav>
            {/* <Link href='/auth/login'>
                <a>Login</a>
            </Link> */}
            <a href='#' onClick={_onClickLogin}>
                Login
            </a>
        </nav>
    );
}
