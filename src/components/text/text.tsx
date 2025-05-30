import cn from 'classnames';
import { TextProps } from "./text.props";
import styles from './text.module.css';
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi


const Text = ({ size = 'm', children, ...props }: TextProps): JSX.Element => {
    return (
        <p className={cn(styles.p, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l',
        })}
            {...props}
        >
            {children}
        </p>
    )
}

export default Text;