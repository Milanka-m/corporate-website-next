import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import styles from "./MyWebsite.module.scss"
import classNames from "classnames"

const MyWebsite: React.FC = () => {
	return (
		<section className={styles.myWebsite}>
			<div className={styles.myWebsite__container}>
				<h2 className={styles.myWebsite__title}>Выберите свой сайт</h2>
				<ul className={styles.myWebsite__cards}>
					<Fade bottom>
						<li>
							<div className={styles.myWebsite__card}>
								<span className={styles.myWebsite__cardImage}>
									<Image
										src='/images/website-development-icon-1.webp'
										alt='website-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<span className={styles.myWebsite__cardTitle}>€350</span>
								<h3 className={styles.myWebsite__cardSubtitle}>Landing Page</h3>
								<p className={styles.myWebsite__cardHeading}>
									Одностраничный сайт за 3 дня
								</p>
								<Link href='/razrabotka-sajtov/landing-page'>
									<a className={styles.myWebsite__link}>Что входит в цену</a>
								</Link>
								<span className={styles.myWebsite__cardSpan}>Бонус</span>
								<p className={styles.myWebsite__cardText}>
									Закажите и получите 1 месяц хостинга бесплатно
								</p>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.myWebsite__card}>
								<span
									className={classNames(
										styles.myWebsite__cardImage,
										styles.myWebsite__cardImage_background,
									)}>
									<Image
										src='/images/website-development-icon-2.webp'
										alt='support-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<span className={styles.myWebsite__cardTitle}>€600</span>
								<h3
									className={classNames(
										styles.myWebsite__cardSubtitle,
										styles.myWebsite__cardSubtitle_color,
									)}>
									Корпоративный
								</h3>
								<p className={styles.myWebsite__cardHeading}>
									Многостраничный сайт за 5 дней
								</p>
								<Link href='/razrabotka-sajtov/korporativnyy-sajt'>
									<a className={styles.myWebsite__link}>Что входит в цену</a>
								</Link>
								<span className={styles.myWebsite__cardSpan}>Бонус</span>
								<p className={styles.myWebsite__cardText}>
									Закажите и получите 2 месяца хостинга бесплатно
								</p>
							</div>
						</li>
					</Fade>
					<Fade bottom>
						<li>
							<div className={styles.myWebsite__card}>
								<span className={styles.myWebsite__cardImage}>
									<Image
										src='/images/website-development-icon-3.webp'
										alt='website-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<span className={styles.myWebsite__cardTitle}>€850</span>
								<h3 className={styles.myWebsite__cardSubtitle}>Сложный сайт</h3>
								<p className={styles.myWebsite__cardHeading}>
									Многофункциональный сайт за 7 дней
								</p>
								<Link href='/razrabotka-sajtov/slozhnyy-sajt'>
									<a className={styles.myWebsite__link}>Что входит в цену</a>
								</Link>
								<span className={styles.myWebsite__cardSpan}>Бонус</span>
								<p className={styles.myWebsite__cardText}>
									Закажите и получите 2 месяца хостинга бесплатно
								</p>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.myWebsite__card}>
								<span
									className={classNames(
										styles.myWebsite__cardImage,
										styles.myWebsite__cardImage_background,
									)}>
									<Image
										src='/images/website-development-icon-4.webp'
										alt='support-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<span className={styles.myWebsite__cardTitle}>€1000</span>
								<h3
									className={classNames(
										styles.myWebsite__cardSubtitle,
										styles.myWebsite__cardSubtitle_color,
									)}>
									Интернет магазин
								</h3>
								<p className={styles.myWebsite__cardHeading}>
									Сайт для онлайн продаж за 10 дней
								</p>
								<Link href='/razrabotka-sajtov/onlayn-magazin'>
									<a className={styles.myWebsite__link}>Что входит в цену</a>
								</Link>
								<span className={styles.myWebsite__cardSpan}>Бонус</span>
								<p className={styles.myWebsite__cardText}>
									Закажите и получите 3 месяца хостинга бесплатно
								</p>
							</div>
						</li>
					</Fade>
				</ul>
			</div>
		</section>
	)
}

export default MyWebsite
