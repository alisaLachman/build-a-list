import classNames from 'classnames';
import styles from './icon-grid.module.scss';
import { Icon, IconType } from '../icon/icon';

export interface IconGridProps {
    className?: string;
}

const icons: IconType[] = ['cloud', 'flower', 'heart', 'duck'];
const demoArray = [
    { abc: 'root', anotherKey: 'anotherValue' },
    { abc: 'whatever', anotherKey: 'anotherValue', yetAnotherKey: 'anotherValue' },
];

export const IconGrid = ({ className }: IconGridProps) => {
    return (
        <div className={classNames(styles.root, className, 'IconGrid')}>
            {icons.map((icon) => {
                const whatever = 'hello';
                if (icon === 'cloud') {
                    return <Icon iconType="cloud" />;
                }
                return <Icon iconType="flower" />;
            })}

            {demoArray.map((obj) => {
                return <>{obj.abc}</>;
            })}
        </div>
    );
};
