import { JSX } from "react"
import { SidebarProps } from "./sidebar.props"
import Menu from "../menu/menu";
import cn from 'classnames';
import styles from './sidebar.module.css';
import { Divider } from "../../components";
import Logo from '../logo.svg';
import Link from "next/link";


const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Link href={'/'}>
                <Logo />
                <Divider />
            </Link>
            <Menu  />
        </div>
    )
}
export default Sidebar