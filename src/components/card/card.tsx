/* eslint-disable react/display-name */
import { ForwardedRef } from "react";
import { CardProps } from "./card.props";
import styles from './card.module.css';
import cn from 'classnames';
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi
import { forwardRef } from "react";



const Card = forwardRef (
    ({ children, color = 'primary', className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        return (
            <div ref={ref}
            className={cn(styles.card, className, {
                [styles.primary]: color === 'primary',
            })}
            {...props}>
                {children}
            </div>
        );
    }
);

export default Card;