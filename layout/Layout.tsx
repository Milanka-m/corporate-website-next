import React from "react"
import styles from "./Layout.module.scss"
import NavBar from "./NavBar/NavBar"
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import Head from "next/head"
import classNames from "classnames"

interface ILayoutProps {
	title?: string
	desc?: string
	ogTitle?: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title, desc, ogTitle }) => {
	const [isNavBarOpen, setIsNavBarOpen] = React.useState<boolean>(false);
	const [isArrowUp, setIsArrowUp] = React.useState<boolean>(false);

	React.useEffect(() => {
    if (window.scrollY >= 800) {
      setIsArrowUp((pre) => !pre)
    }  
  }, [])

	const handleNavBtnClick = (): void => {
		setIsNavBarOpen((pre) => !pre)
	}

	const navBarOpened = `${isNavBarOpen && styles.navBar_opened}`

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={desc} />
				<meta name='og:title' content={ogTitle} />
				<link 
				href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&family=Raleway:wght@300;400;500;700;900&display=swap' 
				rel='stylesheet' 
				/>
				<link rel='icon' href='/favikon-skillfond.ico' />
			</Head>
			<div className={classNames(styles.page, navBarOpened)}>
				<NavBar />
				<div className={styles.root}>
					<Header 
						handleNavBtnClick={handleNavBtnClick}
					/>
					<Main>
						{children}
					</Main>
					<Footer/>
					<button 
						className={classNames(styles.upButton,
							{[styles.upButton_visibility]: isArrowUp })}
						onClick={() => window.scrollTo(0, 0)}
					>
					</button>
				</div>
			</div>
		</>
	)
}

export default Layout
