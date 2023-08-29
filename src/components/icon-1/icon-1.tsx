import classNames from 'classnames';
import styles from './icon-1.module.scss';

export interface Icon1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Icon1 = ({ className }: Icon1Props) => {
    return <div className={classNames(styles.root, className)}>Icon1</div>;
};
