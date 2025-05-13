import { JSX } from "react";
import { TextAreaProps } from "./text-area.props";
import styles from "./text-area.module.css";
import cn from "classnames";



const Input = ({ className, ...props }: TextAreaProps): JSX.Element => {
    return (
        <textarea className={cn(styles.textarea, className)} {...props} />
    )
};

export default Input;