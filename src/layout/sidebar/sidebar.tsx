import { SidebarProps } from "./sidebar.props"
import Menu from "../menu/menu";
import styles from './sidebar.module.css';
import { Divider } from "../../components";
import Logo from '../logo.svg';
import React from 'react'; 
import cn from 'classnames';
import Link from "next/link";
import Saerch from "../../components/saerch/saerch";


const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Link href={'/'}>
                <Logo />
                <Divider />
            </Link>
            <Saerch />
            <Menu  />
        </div>
    )
}
export default Sidebar