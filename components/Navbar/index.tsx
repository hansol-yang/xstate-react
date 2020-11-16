import { IconButton } from '../Button';

import styles from './Navbar.module.scss';

import { ReactComponent as IcoLogin } from '../../public/icons/login-24px.svg';
import { useRouter } from 'next/router';

export function Navbar() {
    const router = useRouter();
    const _onClickAuthButton = () => {
        router.push('/auth/login');
    };

    return (
        <header className={styles.Navbar}>
            <span className={styles.Navbar__title}>To do</span>
            <nav className={styles.Navbar__nav}>
                <IconButton
                    Icon={IcoLogin}
                    iconColor='#fff'
                    onClick={_onClickAuthButton}
                />
            </nav>
        </header>
    );
}
