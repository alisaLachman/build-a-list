import classNames from 'classnames';
import styles from './icon.module.scss';

export interface IconProps {
    className?: string;
    iconType: 'heart' | 'duck' | 'flower'| 'cloud';
}

export const Icon = ({ className, iconType }: IconProps) => {
    const iconTypeUrl = {
        heart: 'https://cdn-icons-png.flaticon.com/512/707/707680.png',
        duck: 'https://cdn-icons-png.flaticon.com/512/1012/1012754.png',
        flower: 'https://cdn-icons-png.flaticon.com/512/9111/9111681.png',
        cloud: 'https://cdn-icons-png.flaticon.com/512/1585/1585341.png',
    };

    return <img className={classNames(styles.root, className, iconType)} src={iconTypeUrl[iconType]} />;
};
