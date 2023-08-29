import classNames from 'classnames';
import styles from './icon-grid.module.scss';
import { Icon, IconType } from '../icon/icon';

export interface IconGridProps {
    className?: string;
}

const icons: IconType[] = ['cloud', 'flower', 'heart', 'duck'];


export const IconGrid = ({ className }: IconGridProps) => {
    return (
        <div className={classNames(styles.root, className, 'IconGrid')}>
            {icons.map((icon) => {
                const whatever = 'hello';
               
                return <Icon iconType="flower" />;
            })}

           
        </div>
    );
};
