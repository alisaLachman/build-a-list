import classNames from 'classnames';
import styles from './dropdown.module.scss';

export interface DropdownProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Dropdown = ({ className }: DropdownProps) => {
    return (
        <select>
            <option>Apple</option>
            <option>Banana</option>
            <option>Watermelon</option>
        </select>
    );
};
