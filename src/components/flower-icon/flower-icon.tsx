import classNames from 'classnames';
import styles from './flower-icon.module.scss';

export interface Flower_iconProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Flower_icon = ({ className }: Flower_iconProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles.flower}
            />
        </div>
    );
};
