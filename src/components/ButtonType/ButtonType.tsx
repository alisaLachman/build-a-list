import classNames from 'classnames';
import styles from './ButtonType.module.scss';

export interface ButtonTypeProps {
    className?: string;
    selected?: boolean;
}

export const ButtonType = ({ className, selected = true }: ButtonTypeProps) => {
    return <button className={classNames(styles.root, className, styles.disabled)}>chips</button>;
};
