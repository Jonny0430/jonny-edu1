import { JSX } from "react";
import { InputProps } from "./input.props";
import styles from "./input.module.css";
import cn from "classnames";
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi



const Input = ({ className, ...props }: InputProps): JSX.Element => {
    return (
        <input className={cn(styles.input, className)} {...props} />
    )
}

export default Input;