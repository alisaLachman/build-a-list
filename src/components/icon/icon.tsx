import classNames from 'classnames';
import styles from './icon.module.scss';

export interface IconProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Icon = ({ className }: IconProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/707/707680.png"
                alt=""
                className={styles.flower}
            />
        </div>
    );
};
