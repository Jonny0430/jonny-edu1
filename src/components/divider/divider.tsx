import { DividerProps } from "./divider.props";
import cn from 'classnames';
import styles from './divider.module.css';
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi



const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
    return <hr className={cn(className, styles.divider)} { ...props } />
};

export default Divider