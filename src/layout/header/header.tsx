import { JSX } from "react"
import { HeaderProps } from "./header.props"
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi

const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <div {...props}>Header</div>
    )
}
export default Header