import { JSX } from "react";
import cn from 'classnames';
import { TextProps } from "./text.props";
import styles from './text.module.css';


const Text = ({ size = 'm', children,}: TextProps): JSX.Element => {
    return (
        <p className={cn(styles.p, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l',
        })}
        >
            {children}
        </p>
    )
}

export default Text;