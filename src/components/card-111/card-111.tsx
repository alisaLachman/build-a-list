import classNames from 'classnames';
import styles from './card-111.module.scss';
import { Icon } from '../icon/icon';

export interface Card111Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card111 = ({ className }: Card111Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Icon className={styles.icon} />
            <div className={styles.text_container}>
                <h4 className={styles.cards_headline}>Pay someone</h4>
                <p className={styles.card_paragraph}>To wallet, bank or mobile number</p>
            </div>
        </div>
    );
};
