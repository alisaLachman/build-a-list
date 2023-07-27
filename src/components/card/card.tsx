import classNames from 'classnames';
import { Icon } from '../icon/icon';
import styles from './card.module.scss';
/**import styles for icon later */

export interface CardProps {
    className?: string;
    color?: 'yellow' | 'blue' | 'pink' | 'purple';
    selected: boolean;
}
/**how do I enter multiple classes */
export const Card = ({ className, color = 'yellow', selected = true }: CardProps) => {
    return (
        <div className={classNames(styles.root, { [styles.disabled]: !selected }, className)}>
            <Icon className={styles.icon} />
            <div className={styles.text_container}>
                <h4 className={styles.card_headline}>Project Library</h4>
                <p className={styles.card_paragraph}>manage your project Library easily</p>
            </div>
        </div>
    );
};


