import { FunctionComponent } from "react"
import { LayoutProps } from "./layout.props"
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi
import Footer from "./footer/footer"
import styles from './layout.module.css'
import Header from "./header/header"
import Sidebar from "./sidebar/sidebar"
import { AppContextProvider, IAppContext } from "../context/app.context"
import { ScrollUp } from "../components";





const Layout = ({ children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body}>{children}</div>
            <Footer className={styles.footer} /> 
            <ScrollUp />
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    }
}   