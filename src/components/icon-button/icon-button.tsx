import { IconButtonProps, icons } from "./icon-button.props";
import React from "react";
import cn from 'classnames';
import styles from './icon-button.module.css';



const IconButton = ({ appearance, icon, className, ...props }: IconButtonProps): JSX.Element => {
    const IconComponent = icons[icon];

    return (
        <button 
            className={cn(styles.iconButton, className, {
                [styles.primary]: appearance == 'primary',
                [styles.white]: appearance == 'white',
            })}
            {...props}
            >
                <IconComponent />
            </button>
    )
}

export default IconButton;