import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ApplicationBtn } from "../../components"
import styles from "./NavBar.module.scss"

const NavBar: React.FC = () => {
	return (
		<div className={styles.navBar__container}>
			<div className={styles.navBar__navContainer}>
				<Link href='/'>
					<a>
						<Image
							src='/images/logo-skillfond.svg'
							alt='logo ООО Ваша компания'
							width={86}
							height={65}
						/>
					</a>
				</Link>
				<nav className={styles.navBar__nav}>
					<ul className={styles.navBar__navLinks}>
						<li>
							<Link href='/uslugi'>
								<a className={styles.navBar__navLink}>Услуги</a>
							</Link>
						</li>
						<li>
							<Link href='/portfolio'>
								<a className={styles.navBar__navLink}>Портфолио</a>
							</Link>
						</li>
						<li>
							<Link href='/o-nas'>
								<a className={styles.navBar__navLink}>О нас</a>
							</Link>
						</li>
						<li>
							<Link href='/faq'>
								<a className={styles.navBar__navLink}>FAQ</a>
							</Link>
						</li>
						<li>
							<Link href='/contact'>
								<a className={styles.navBar__navLink}>Контакты</a>
							</Link>
						</li>
						<li className={styles.navBar__langItem}>
							<a
								className={styles.navBar__navLink}
								href='#'
								target='_self'
								rel='noopener noreferrer'>
								<Image
									src='/images/ru-language-img.webp'
									alt='ru-language'
									width='18'
									height='12'
								/>
								<span className={styles.navBar__langSpan}>Русский</span>
							</a>
							<input id={styles.navBar__accordion} type='checkbox' />
							<label
								className={styles.navBar__label}
								htmlFor={styles.navBar__accordion}>
								<div className={styles.navBar__btnArrow}>
									<span className={styles.navBar__btnArrowLeft}></span>
									<span className={styles.navBar__btnArrowRight}></span>
								</div>
							</label>
							<ul className={styles.navBar__langSubMenu}>
								<li>
									<a
										className={styles.navBar__navLink}
										href='#'
										target='_self'
										rel='noopener noreferrer'>
										<Image
											src='/images/en-language-img.webp'
											alt='en-language'
											width='18'
											height='12'
										/>
										<span className={styles.navBar__langSpan}>Английский</span>
									</a>
								</li>
								<li>
									<a
										className={styles.navBar__navLink}
										href='#'
										target='_self'
										rel='noopener noreferrer'>
										<Image
											src='/images/lv-language-img.webp'
											alt='lv-language'
											width='18'
											height='12'
										/>
										<span className={styles.navBar__langSpan}>Латышский</span>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<ApplicationBtn />
			</div>
		</div>
	)
}

export default NavBar
