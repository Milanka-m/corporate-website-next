import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import styles from "./Services.module.scss"
import classNames from "classnames"

const Services: React.FC = () => {
	return (
		<section className={styles.services}>
			<div className={styles.services__container}>
				<h1 className={styles.services__title}>
					Простые решения для
					<br />
					<span>Сложных задач</span>
				</h1>
				<ul className={styles.services__cards}>
					<Fade bottom>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/website-development-icon.webp'
										alt='website-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>
									Разработка Сайтов
								</h2>
								<p className={styles.services__cardText}>
									Дизайн и разработка сайтов. Гарантия, качество.
								</p>
								<Link href='/razrabotka-sajtov'>
									<a className={styles.services__link}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/seo-promotion-icon.webp'
										alt='seo-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>SEO продвижение</h2>
								<p className={styles.services__cardText}>
									Продвижение сайтов в Топ. Выше всех конкурентов
								</p>
								<Link href='/seo-prodvizhenie'>
									<a
										className={classNames(
											styles.services__link,
											styles.services__link_color_pink,
										)}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade bottom>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/social-media-marketing-icon.webp'
										alt='marketing-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>
									Маркетинг в соц. сетях
								</h2>
								<p className={styles.services__cardText}>
									Создание, оформление, ведение, раскрутка.
								</p>
								<Link href='/smm'>
									<a className={styles.services__link}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/mobile-application-icon.webp'
										alt='mobile-application'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>
									Мобильные приложения
								</h2>
								<p className={styles.services__cardText}>
									Оценим, спроектируем, разработаем.
								</p>
								<Link href='/mobilnye-prilozheniya'>
									<a
										className={classNames(
											styles.services__link,
											styles.services__link_color_pink,
										)}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade bottom>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/graphic-design-icon.webp'
										alt='graphic-design'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>
									Графический дизайн
								</h2>
								<p className={styles.services__cardText}>
									Каждый наш проект – это произведение искусства.
								</p>
								<Link href='/graficheskij-dizajn'>
									<a className={styles.services__link}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/outdoor-advertising-icon.webp'
										alt='outdoor-advertising'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>Наружная реклама</h2>
								<p className={styles.services__cardText}>
									Реклама специально для вашего бизнеса.
								</p>
								<Link href='/naruzhnaya-reklama'>
									<a
										className={classNames(
											styles.services__link,
											styles.services__link_color_pink,
										)}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade bottom>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/printing-house-icon.webp'
										alt='printing-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>Типография</h2>
								<p className={styles.services__cardText}>
									От создания макета до печати.
								</p>
								<Link href='/tipografya'>
									<a className={styles.services__link}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/additional-services-icon.webp'
										alt='additional-services-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>
									Дополнительные услуги
								</h2>
								<p className={styles.services__cardText}>
									Полный спектр услуг по интернет-маркетингу.
								</p>
								<Link href='/dopolnitelnye-uslugi'>
									<a
										className={classNames(
											styles.services__link,
											styles.services__link_color_pink,
										)}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
				</ul>
			</div>
		</section>
	)
}

export default Services
