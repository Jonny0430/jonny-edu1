import { JSX } from "react";
import { TextAreaProps } from "./text-area.props";
import styles from "./text-area.module.css";
import cn from "classnames";
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi



const Input = ({ className, ...props }: TextAreaProps): JSX.Element => {
    return (
        <textarea className={cn(styles.textarea, className)} {...props} />
    )
};

export default Input;