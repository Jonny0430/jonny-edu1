/* eslint-disable @typescript-eslint/no-unused-vars */
import { SortEnum, SortProps } from "./sort.props";
import React from 'react';
import cn from 'classnames';
import styles from './sort.module.css';
import SortIcon from './sort.svg'

const Sort = ({ setSort, sort = SortEnum.Price, className, ...props}: SortProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sort)} {...props}>
            <span className={cn({ [ styles.active ]: sort == SortEnum.Rating})}>
                <SortIcon className={styles.sortIcon} /> Rating
            </span>

            <span className={cn({ [ styles.active ]: sort == SortEnum.Price })}>
                <SortIcon className={styles.sortIcon} /> Price
            </span>
        </div>
    )
}

export default Sort; 