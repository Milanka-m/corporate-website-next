import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import styles from "./AdditionalServices.module.scss"

const AdditionalServices: React.FC = () => {
	return (
		<section className={styles.addServices}>
			<div className={styles.addServices__container}>
				<h2 className={styles.addServices__title}>Дополнительные услуги</h2>
				<ul className={styles.addServices__cards}>
					<Fade bottom>
						<li>
							<div className={styles.addServices__card}>
								<span className={styles.addServices__cardImage}>
									<Image
										src='/images/additional-services-icon-1.webp'
										alt='website-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h3 className={styles.addServices__cardTitle}>
									Поддержка сайта
								</h3>
								<p className={styles.addServices__cardText}>
									Комплексная услуга включающая в себя техническое и
									информационное обслуживание сайта
								</p>
								<Link href='/razrabotka-sajtov'>
									<a className={styles.addServices__link}>
										Подробнее
										<div className={styles.addServices__arrow}>
											<span className={styles.addServices__arrowLeft}></span>
											<span className={styles.addServices__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.addServices__card}>
								<span className={styles.addServices__cardImage}>
									<Image
										src='/images/additional-services-icon-2.webp'
										alt='seo-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h3 className={styles.addServices__cardTitle}>Копирайтинг</h3>
								<p className={styles.addServices__cardText}>
									На сайте будут уникальный контент и уникальные тексты на все
									100%
								</p>
								<Link href='/seo-prodvizhenie'>
									<a className={styles.addServices__link}>
										Подробнее
										<div className={styles.addServices__arrow}>
											<span className={styles.addServices__arrowLeft}></span>
											<span className={styles.addServices__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade bottom>
						<li>
							<div className={styles.addServices__card}>
								<span className={styles.addServices__cardImage}>
									<Image
										src='/images/additional-services-icon-3.webp'
										alt='marketing-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h3 className={styles.addServices__cardTitle}>
									Поисковое продвижение
								</h3>
								<p className={styles.addServices__cardText}>
									Увеличение целевых посетителей и заявок из посковых систем
								</p>
								<Link href='/smm'>
									<a className={styles.addServices__link}>
										Подробнее
										<div className={styles.addServices__arrow}>
											<span className={styles.addServices__arrowLeft}></span>
											<span className={styles.addServices__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.addServices__card}>
								<span className={styles.addServices__cardImage}>
									<Image
										src='/images/additional-services-icon-4.webp'
										alt='marketing-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h3 className={styles.addServices__cardTitle}>
									SMM сопровождение
								</h3>
								<p className={styles.addServices__cardText}>
									Способ привлечения аудитории по средствам социальных сетей
								</p>
								<Link href='/mobilnye-prilozheniya'>
									<a className={styles.addServices__link}>
										Подробнее
										<div className={styles.addServices__arrow}>
											<span className={styles.addServices__arrowLeft}></span>
											<span className={styles.addServices__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade bottom>
						<li>
							<div className={styles.addServices__card}>
								<span className={styles.addServices__cardImage}>
									<Image
										src='/images/additional-services-icon-5.webp'
										alt='website-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h3 className={styles.addServices__cardTitle}>
									Мобильное приложение
								</h3>
								<p className={styles.addServices__cardText}>
									Разработаем мобильное приложение, которое помозволит вам
									заработать
								</p>
								<Link href='/graficheskij-dizajn'>
									<a className={styles.addServices__link}>
										Подробнее
										<div className={styles.addServices__arrow}>
											<span className={styles.addServices__arrowLeft}></span>
											<span className={styles.addServices__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.addServices__card}>
								<span className={styles.addServices__cardImage}>
									<Image
										src='/images/additional-services-icon-6.webp'
										alt='speaker-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h3 className={styles.addServices__cardTitle}>Аудит сайта</h3>
								<p className={styles.addServices__cardText}>
									Оценим существующий сайт, повысим привлекательность для
									пользователей и посковых систем
								</p>
								<Link href='/naruzhnaya-reklama'>
									<a className={styles.addServices__link}>
										Подробнее
										<div className={styles.addServices__arrow}>
											<span className={styles.addServices__arrowLeft}></span>
											<span className={styles.addServices__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade bottom>
						<li>
							<div className={styles.addServices__card}>
								<span className={styles.addServices__cardImage}>
									<Image
										src='/images/additional-services-icon-7.webp'
										alt='printing-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<h3 className={styles.addServices__cardTitle}>
									Email рассылка
								</h3>
								<p className={styles.addServices__cardText}>
									Стимуляция спроса на ваш товар или услугу через песьма
								</p>
								<Link href='/tipografya'>
									<a className={styles.addServices__link}>
										Подробнее
										<div className={styles.addServices__arrow}>
											<span className={styles.addServices__arrowLeft}></span>
											<span className={styles.addServices__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.addServices__card}>
								<span className={styles.addServices__cardImage}>
									<Image
										src='/images/additional-services-icon-8.webp'
										alt='additional-services-icon'
										width={80}
										height={70}
										objectFit='contain'
									/>
								</span>
								<h3 className={styles.addServices__cardTitle}>
									Надежный хостинг
								</h3>
								<p className={styles.addServices__cardText}>
									Быстрый и надежный хостинг, работающий честно и окрыто для вас
								</p>
								<Link href='/dopolnitelnye-uslugi'>
									<a className={styles.addServices__link}>
										Подробнее
										<div className={styles.addServices__arrow}>
											<span className={styles.addServices__arrowLeft}></span>
											<span className={styles.addServices__arrowRight}></span>
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

export default AdditionalServices
