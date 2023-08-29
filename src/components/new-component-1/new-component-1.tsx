import classNames from 'classnames';
import styles from './new-component-1.module.scss';

export interface NewComponent1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent1 = ({ className }: NewComponent1Props) => {
    return <div className={classNames(styles.root, className)}>NewComponent1</div>;
};
