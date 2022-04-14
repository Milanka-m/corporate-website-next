import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./Cost.module.scss"
import classNames from "classnames"

interface ICostProps {
	handleModal: () => void
}

const Cost: React.FC<ICostProps> = ({ handleModal }) => {
	return (
		<section className={styles.cost}>
			<div className={styles.cost__container}>
				<h2 className={styles.cost__title}>Стоимость</h2>
				<ul className={styles.cost__cards}>
					<Fade bottom>
						<li>
							<div className={styles.cost__card}>
								<span className={styles.cost__cardImage}>
									<Image
										src='/images/website-development-icon-1.webp'
										alt='website-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<span className={styles.cost__cardTitle}>€400</span>
								<h3 className={styles.cost__cardSubtitle}>Стандарт</h3>
								<ul className={styles.cost__cardList}>
									<li>
										<p className={styles.cost__cardText}>
											Дизайн-оформление сообщества
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Стратегия продвижения
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Анализ конкурентов</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Оформление и размещение постов 12 раз в мес. (3 раза в
											неделю)
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Проведение конкурсов, розыгрышей макс. 2 раза в месяц
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Копирайтинг</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Подготовка ежемесячного отчета
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Анализ страницы</p>
									</li>
								</ul>
								<p className={styles.cost__cardHeading}>Мин. срок – 3 месяца</p>
								<button className={styles.cost__cardBtn} onClick={handleModal}>
									Заказать
								</button>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.cost__card}>
								<span
									className={classNames(
										styles.cost__cardImage,
										styles.cost__cardImage_background,
									)}>
									<Image
										src='/images/website-development-icon-2.webp'
										alt='support-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<span className={styles.cost__cardTitle}>€550</span>
								<h3
									className={classNames(
										styles.cost__cardSubtitle,
										styles.cost__cardSubtitle_color,
									)}>
									Базовый
								</h3>
								<ul className={styles.cost__cardList}>
									<li>
										<p className={styles.cost__cardText}>
											Дизайн-оформление сообщества
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Стратегия продвижения
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Анализ конкурентов</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Оформление и размещение постов 16 раз в мес. (4 раза в
											неделю)
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Проведение конкурсов, розыгрышей макс. 3 раза в месяц
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Копирайтинг</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Подготовка ежемесячного отчета
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Анализ страницы</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Создание анимации / 1 в месяц
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Рекламный купон 10 Eur
										</p>
									</li>
								</ul>
								<p className={styles.cost__cardHeading}>Мин. срок – 2 месяца</p>
								<button className={styles.cost__cardBtn} onClick={handleModal}>
									Заказать
								</button>
							</div>
						</li>
					</Fade>
					<Fade bottom>
						<li>
							<div className={styles.cost__card}>
								<span className={styles.cost__cardImage}>
									<Image
										src='/images/website-development-icon-3.webp'
										alt='website-icon'
										width={60}
										height={60}
										objectFit='contain'
									/>
								</span>
								<span className={styles.cost__cardTitle}>€700</span>
								<h3 className={styles.cost__cardSubtitle}>Профессионал</h3>
								<ul className={styles.cost__cardList}>
									<li>
										<p className={styles.cost__cardText}>
											Дизайн-оформление сообщества
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Стратегия продвижения
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Анализ конкурентов</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Оформление и размещение постов 20 раз в мес. (5 раз в
											неделю)
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Проведение конкурсов, розыгрышей макс. 5 раз в месяц
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Копирайтинг</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Подготовка ежемесячного отчета
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Анализ страницы</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Создание анимации / 2 в месяц
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Рекламный купон 15 Eur
										</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>Воронка продаж</p>
									</li>
									<li>
										<p className={styles.cost__cardText}>
											Email рассылка / 3 письма
										</p>
									</li>
								</ul>
								<p className={styles.cost__cardHeading}>Мин. срок – 2 месяца</p>
								<button className={styles.cost__cardBtn} onClick={handleModal}>
									Заказать
								</button>
							</div>
						</li>
					</Fade>
				</ul>
				<span className={styles.cost__span}>
					* Рекламный бюджет оплачивается отдельно
				</span>
			</div>
		</section>
	)
}

export default Cost
