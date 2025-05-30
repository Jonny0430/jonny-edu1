/* eslint-disable react/display-name */
import { TextAreaProps } from "./text-area.props";
import styles from "./text-area.module.css";
import cn from 'classnames';
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi
import { ForwardedRef, forwardRef } from "react";


const Input = forwardRef(({ className, error, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles.textAreaWrapper, className)}>
            <textarea className={cn(styles.textArea, {
                [styles.error]: error,
            })}
            ref={ref}
            {...props} />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
})

export default Input