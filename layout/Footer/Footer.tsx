import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.scss"

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.footer__container}>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Ждем вас</span>
					<ul className={styles.footer__timeline}>
						<li>
							<p className={styles.footer__timeText}>Пн. – Пт.</p>
							<p className={styles.footer__timeText}>09 00 – 18 00</p>
						</li>
						<li>
							<p className={styles.footer__timeText}>Сб.</p>
							<p className={styles.footer__timeText}>выходной</p>
						</li>
						<li>
							<p className={styles.footer__timeText}>Вс.</p>
							<p className={styles.footer__timeText}>выходной</p>
						</li>
					</ul>
					<div className={styles.footer__label}>
						<span>
							<Image
								src='/images/arda-icon.webp'
								alt='arda-icon'
								width={90}
								height={56}
							/>
						</span>
					</div>
				</li>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Меню</span>
					<ul className={styles.footer__navLinks}>
						<li>
							<Link href='/o-nas'>
								<a className={styles.footer__navLink}>О нас</a>
							</Link>
						</li>
						<li>
							<Link href='/portfolio'>
								<a className={styles.footer__navLink}>Портфолио</a>
							</Link>
						</li>
						<li>
							<Link href='/faq'>
								<a className={styles.footer__navLink}>FAQ</a>
							</Link>
						</li>
						<li>
							<Link href='/privacy-policy'>
								<a className={styles.footer__navLink}>
									Политика конфиденциальности
								</a>
							</Link>
						</li>
					</ul>
					<ul className={styles.footer__socialLinks}>
						<li>
							<a
								href='https://www.facebook.com/skillfond/'
								className={styles.footer__socialLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/facebook-icon.webp'
									alt='facebook-icon'
									width={32}
									height={32}
								/>
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/skillfond/'
								className={styles.footer__socialLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/instagram-icon.webp'
									alt='instagram-icon'
									width={32}
									height={32}
								/>
							</a>
						</li>
						<li>
							<a
								href='https://telegram.org/'
								className={styles.footer__socialLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/telegram-icon.webp'
									alt='telegram-icon'
									width={32}
									height={32}
								/>
							</a>
						</li>
					</ul>
				</li>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Услуги</span>
					<ul className={styles.footer__navLinks}>
						<li>
							<Link href='/razrabotka-sajtov'>
								<a className={styles.footer__navLink}>Разработка сайтов</a>
							</Link>
						</li>
						<li>
							<Link href='/seo-prodvizhenie'>
								<a className={styles.footer__navLink}>Продвижение сайта</a>
							</Link>
						</li>
						<li>
							<Link href='/smm'>
								<a className={styles.footer__navLink}>Маркетинг в соц.сетях</a>
							</Link>
						</li>
						<li>
							<Link href='/mobilnye-prilozheniya'>
								<a className={styles.footer__navLink}>Мобильные приложения</a>
							</Link>
						</li>
						<li>
							<Link href='/graficheskij-dizajn'>
								<a className={styles.footer__navLink}>Графический дизайн</a>
							</Link>
						</li>
						<li>
							<Link href='/naruzhnaya-reklama'>
								<a className={styles.footer__navLink}>Наружная реклама</a>
							</Link>
						</li>
						<li>
							<Link href='/tipografya'>
								<a className={styles.footer__navLink}>Типография</a>
							</Link>
						</li>
						<li>
							<Link href='/dopolnitelnye-uslugi'>
								<a className={styles.footer__navLink}>Дополнительные услуги</a>
							</Link>
						</li>
					</ul>
				</li>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Контакты</span>
					<ul className={styles.footer__contactsList}>
						<li>
							<p className={styles.footer__timeText}>
								Белгород ул. Садовая 2а офис 100
							</p>
						</li>
						<li className={styles.footer__itemLink}>
							<a className={styles.footer__contactsLink} href='tel:+74722777235'>
								+7 4722 777 235
							</a>
						</li>
						<li className={styles.footer__itemLink}>
							<a
								className={styles.footer__contactsLink}
								href='mailto:dev@skillfond.ru'>
								dev@skillfond.ru
							</a>
						</li>
					</ul>
					<iframe 
						src="https://yandex.ru/map-widget/v1/?um=constructor%3A023a3171012229cb95823dc120321f8dd3200d51f6fcc0c683a77cf1008eb3e3&amp;source=constructor" 
						width="240" 
						height="150" 
						frameBorder="0">
					</iframe>
					
				</li>
			</ul>
			<p className={styles.footer__copyright}>
				&copy; {new Date().getFullYear()} ООО Ваша компания. Все права защищены.
			</p>
		</footer>
	)
}

export default Footer
