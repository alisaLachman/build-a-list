import classNames from 'classnames';
import { Icon } from '../icon/icon';
import styles from './card.module.scss';
/**import styles for icon later */

export interface CardProps {
    className?: string;
    color?: 'yellow' | 'blue' | 'pink' | 'purple';
    c?: boolean;
}

export const Card = ({ className, color = 'yellow', c = true }: CardProps) => {
    return (
        <div className={classNames(styles.root, { [styles[color]]: color }, className)}>
            <Icon className={styles.icon} />
            <div className={styles.text_container}>
                <h4 className={styles.card_headline}>Pay someone</h4>
                <p className={styles.card_paragraph}>To wallet, bank or mobile number</p>
            </div>
        </div>
    );
};
