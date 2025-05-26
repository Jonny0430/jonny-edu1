/* eslint-disable react/display-name */
import { ForwardedRef } from "react";
import { InputProps } from "./input.props";
import styles from "./input.module.css";
import cn from 'classnames';
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi
import { forwardRef } from "react";




const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={styles.inputWrapper}>
            <input className={cn(styles.input, className, {
                [styles.error]: error,
            })}
            ref={ref}
            {...props} />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

export default Input;