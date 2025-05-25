import { FunctionComponent } from "react"
import { LayoutProps } from "./layout.props"
import React from 'react';  // React komponentlarini ishlatish uchun import qilinadi
import Footer from "./footer/footer"
import styles from './layout.module.css'
import Header from "./header/header"
import Sidebar from "./sidebar/sidebar"
import { AppContextProvider, IAppContext } from "../context/app.context"
import { ScrollUp } from "../components";
import router, { useRouter } from "next/router";
import Seo from './seo/seo';





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

        const router = useRouter();
		console.log(router);
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                {router.asPath === '/' ? (
                    <Component {...props} />
               ) : (
					<Layout>
						<Component {...props} />
					</Layout>
				)}
            </AppContextProvider>
        )
    }
}   