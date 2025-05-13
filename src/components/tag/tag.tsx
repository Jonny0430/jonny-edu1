'use client';

import { JSX } from "react";
import { TagProps } from "./tag.props"
import cn from 'classnames';
import styles from './tag.module.css';






const Tag = ({ size = 'm', color = 'primary', children, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
            [styles.green]: color === 'green',
        })}
            {...props}
        >
            {children}
        </div>
    );
};

export default Tag;