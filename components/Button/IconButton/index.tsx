import { FunctionComponent, SVGProps } from 'react';

import styles from './IconButton.module.scss';

type Prop = {
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    iconColor?: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};
export function IconButton({ Icon, iconColor, onClick }: Prop) {
    return (
        <button className={styles.IconButton} onClick={onClick}>
            <Icon style={{ fill: iconColor }} />
        </button>
    );
}
