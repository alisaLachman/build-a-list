import classNames from 'classnames';
import styles from './new-componentd.module.scss';

/** Deep object docs */
export interface Deep {
    /** nested object docs */
    anObject: {
        withAnotherObject: {
            /** title  docs */
            title: string;
            age: number;
            name: string;
        };
    };
    withAnArray: Array<{ name: string }>;
    unionArray: Array<{ name: string } | string>;
}
