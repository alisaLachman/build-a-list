import classNames from 'classnames';
import { Icon } from '../icon/icon';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    title: string;
    pharahraphText?: string;
    color: 'yellow' | 'blue' | 'pink' | 'purple';
    selected: boolean;
}

export const Card = ({
    className,
    color = 'yellow',
    selected = true,
    title,
    pharahraphText,
}: CardProps) => {
    const myColor = typeof color === 'string' ? color : '';
    return (
        <div
            className={classNames(
                styles.root,
                { [styles.disabled]: !selected, [styles[myColor]]: color },
                className
            )}
        >
            <Icon className={styles.icon} iconType="heart" />
            <span className={styles.card_headline}>
                <h2>{title}</h2>
            </span>
            <span className={styles.card_paragraph}>
                <p>{pharahraphText}</p>
            </span>
        </div>
    );
};
