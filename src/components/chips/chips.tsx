import classNames from 'classnames';
import styles from './chips.module.scss';

export interface ChipsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Chips = ({ className }: ChipsProps) => {
    return <div className={classNames(styles.root, className)}>selected</div>;
};
