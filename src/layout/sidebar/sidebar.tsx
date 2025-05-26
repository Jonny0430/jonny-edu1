import { SidebarProps } from "./sidebar.props"
import Menu from "../menu/menu";
import styles from './sidebar.module.css';
import { Button, Divider } from "../../components";
import Logo from '../logo.svg';
import Jonny from '../jonny.svg';
import React from 'react'; 
import cn from 'classnames';
import Link from "next/link";
import Saerch from "../../components/search/search";


const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Link href={'/'}>
                {/* <Logo /> */}
                <button>Home</button>
                <Divider />
            </Link>
            <Saerch />
            <Menu  />
        </div>
    )
}
export default Sidebar