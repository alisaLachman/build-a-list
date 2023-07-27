import classNames from 'classnames';
import styles from './chip.module.scss';

export interface ChipProps {
    className?: string;
    state?: boolean;
}

export const Chip = ({ 
    className, 
    state = true
    }: ChipProps) => {
    return;
    <div className={classNames(styles.root, { [styles.disabled]: state }, className)}>
        selected
    </div>;
};

