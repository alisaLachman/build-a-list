import classNames from 'classnames';
import styles from './card.module.scss';
import { Icon } from '../icon/icon';

export interface CardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Icon />
            <div className={styles.text_container}>
                <p className={styles.card_paragraph}>This is a paragraph.</p>
                <h4 className={styles.card_headline}>Heading 4</h4>
            </div>
        </div>
    );
};
