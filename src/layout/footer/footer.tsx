import { JSX } from "react";
import { FooterProps } from "./footer.props";
import styles from './footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi



const  Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>Jonny © 2023 - {format(new Date(), 'yyyy')}. All right reserver</div>
            <a href='#'>Terms of use</a>
            <a href='#'>Privacy policy</a>
        </footer>
    )
}

export default Footer;