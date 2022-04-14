import classNames from "classnames"
import React from "react"
import Slider from "react-slick"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import styles from "./BanerSlider.module.scss"

const BanerSlider: React.FC = () => {
	const settings = {
		dots: true,
		focusOnSelect: false,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
		//adaptiveHeight: true,
		infinite: true,
		speed: 600,
		fade: true,
		arrows: false,
		cssEase: "ease-out",
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		LazyLoad: "progressive",
		pauseOnHover: false,
	}

	return (
		<div>
			<Slider {...settings}>
				<div>
					<span className={styles.baner__spanImg1}>
						<Image
							src='/images/img-slider-01.webp'
							alt='baner'
							width={750}
							height={565}
							objectFit='cover'
						/>
					</span>
					<Fade bottom>
						<div className={styles.baner__content}>
							<p className={styles.baner__title}>
								Разработка
								<br />
								<span>Сайтов</span>
							</p>
							<p className={styles.baner__paragraph}>
								SEO продвижение – Вам нужны позиции или продажи? Уникальная
								технология позволит привлечь целевых посетителей и эффективно
								преобразовать их в клиентов. В нашей SEO-мастерской используются
								только действенные инструменты интернет-маркетинга.
							</p>
							<ul className={styles.baner__links}>
								<li>
									<Link href='/portfolio'>
										<a className={styles.baner__link}>Наши работы</a>
									</Link>
								</li>
								<li>
									<Link href='/contact'>
										<a
											className={classNames(
												styles.baner__link,
												styles.baner__link_color,
											)}>
											Заказать сайт
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</Fade>
				</div>
				<div>
					<span className={styles.baner__spanImg2}>
						<Image
							src='/images/img-slider-02.webp'
							alt='baner'
							width={750}
							height={565}
							objectFit='cover'
						/>
					</span>
					<Fade bottom>
						<div
							className={classNames(
								styles.baner__content,
								styles.baner__content_position,
							)}>
							<p className={styles.baner__title}>
								SEO
								<br />
								<span className={styles.baner__spanTitle}>продвижение</span>
							</p>
							<p className={styles.baner__paragraph}>
								Вам нужны позиции или продажи? Уникальная технология позволит
								привлечь целевых посетителей и эффективно преобразовать их в
								клиентов. В нашей SEO-мастерской используются только действенные
								инструменты интернет-маркетинга.
							</p>
							<ul
								className={classNames(
									styles.baner__links,
									styles.baner__links_position,
								)}>
								<li>
									<Link href='/contact'>
										<a
											className={classNames(
												styles.baner__link,
												styles.baner__link_color,
											)}>
											Заказать Раскрутку
										</a>
									</Link>
								</li>
								<li>
									<Link href='/portfolio'>
										<a className={styles.baner__link}>Наши работы</a>
									</Link>
								</li>
							</ul>
						</div>
					</Fade>
				</div>
				<div>
					<span className={styles.baner__spanImg1}>
						<Image
							src='/images/img-slider-01.webp'
							alt='baner'
							width={750}
							height={565}
							objectFit='cover'
						/>
					</span>
					<Fade bottom>
						<div className={styles.baner__content}>
							<p className={styles.baner__title}>
								Маркетинг в<br />
								<span>
									Социальных{" "}
									<span className={styles.baner__textSpan}>сетях</span>
								</span>
							</p>
							<p className={styles.baner__paragraph}>
								Продвижение товаров и брендов в самых популярных социальных
								сетях. Услуги по разработке и реализации стратегий SMM
								продвижения. Раскрутка бренда, продукта и бизнеса.
							</p>
							<ul className={styles.baner__links}>
								<li>
									<Link href='/portfolio'>
										<a className={styles.baner__link}>Наши работы</a>
									</Link>
								</li>
								<li>
									<Link href='/contact'>
										<a
											className={classNames(
												styles.baner__link,
												styles.baner__link_color,
											)}>
											Заказать SMM
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</Fade>
				</div>
				<div>
					<span className={styles.baner__spanImg2}>
						<Image
							src='/images/img-slider-04.webp'
							alt='baner'
							width={750}
							height={565}
							objectFit='cover'
						/>
					</span>
					<Fade bottom>
						<div
							className={classNames(
								styles.baner__content,
								styles.baner__content_position,
							)}>
							<p className={styles.baner__title}>
								Мобильные
								<br />
								<span className={styles.baner__spanTitle}>приложения</span>
							</p>
							<p className={styles.baner__paragraph}>
								Это инвестиции с расчетом на будущую прибыль. Грамотно
								спроектированный продукт позволит сформировать аудиторию и
								увеличить продажи.
							</p>
							<ul
								className={classNames(
									styles.baner__links,
									styles.baner__links_position,
								)}>
								<li>
									<Link href='/contact'>
										<a
											className={classNames(
												styles.baner__link,
												styles.baner__link_color,
											)}>
											Заказать разработку
										</a>
									</Link>
								</li>
								<li>
									<Link href='/portfolio'>
										<a className={styles.baner__link}>Наши работы</a>
									</Link>
								</li>
							</ul>
						</div>
					</Fade>
				</div>
				<div>
					<span className={styles.baner__spanImg1}>
						<Image
							src='/images/img-slider-01.webp'
							alt='baner'
							width={750}
							height={565}
							objectFit='cover'
						/>
					</span>
					<Fade bottom>
						<div className={styles.baner__content}>
							<p className={styles.baner__title}>
								Графический
								<br />
								<span>Дизайн</span>
							</p>
							<p className={styles.baner__paragraph}>
								Услуги по созданию визуального брендинга. Дизайн листовок,
								буклетов, брошюр, визиток, логотипов, фирменного стиля. Мы
								реализуем сложные и интересные задачи. Услуги полиграфии.
							</p>
							<ul className={styles.baner__links}>
								<li>
									<Link href='/portfolio'>
										<a className={styles.baner__link}>Наши работы</a>
									</Link>
								</li>
								<li>
									<Link href='/contact'>
										<a
											className={classNames(
												styles.baner__link,
												styles.baner__link_color,
											)}>
											Заказать дизайн
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</Fade>
				</div>
				<div>
					<span className={styles.baner__spanImg2}>
						<Image
							src='/images/img-slider-04.webp'
							alt='baner'
							width={750}
							height={565}
							objectFit='cover'
						/>
					</span>
					<Fade bottom>
						<div
							className={classNames(
								styles.baner__content,
								styles.baner__content_position,
							)}>
							<p className={styles.baner__title}>
								Наружная
								<br />
								<span className={styles.baner__spanTitle}>Реклама</span>
							</p>
							<p className={styles.baner__paragraph}>
								Мы предоставляем полный комплекс услуг наружной и внутренней
								рекламы от разработки дизайн-макета до монтажа готовых изделий.
								Мы делаем рекламу, которая работает.
							</p>
							<ul
								className={classNames(
									styles.baner__links,
									styles.baner__links_position,
								)}>
								<li>
									<Link href='/contact'>
										<a
											className={classNames(
												styles.baner__link,
												styles.baner__link_color,
											)}>
											Заказать рекламу
										</a>
									</Link>
								</li>
								<li>
									<Link href='/portfolio'>
										<a className={styles.baner__link}>Наши работы</a>
									</Link>
								</li>
							</ul>
						</div>
					</Fade>
				</div>
				<div>
					<span className={styles.baner__spanImg1}>
						<Image
							src='/images/img-slider-01.webp'
							alt='baner'
							width={750}
							height={565}
							objectFit='cover'
						/>
					</span>
					<Fade bottom>
						<div className={styles.baner__content}>
							<p className={styles.baner__title}>
								<span>Типография</span>
							</p>
							<p className={styles.baner__paragraph}>
								Предоставляем качественные услуги типографии по печати и после
								печатной обработке. Мы используем лучшую бумагу и краски, ведь
								только качественная полиграфия способная разрекламировать ваши
								услуги или продукцию.
							</p>
							<ul className={styles.baner__links}>
								<li>
									<Link href='/portfolio'>
										<a className={styles.baner__link}>Наши работы</a>
									</Link>
								</li>
								<li>
									<Link href='/contact'>
										<a
											className={classNames(
												styles.baner__link,
												styles.baner__link_color,
											)}>
											Заказать распечатку
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</Fade>
				</div>
				<div>
					<span className={styles.baner__spanImg2}>
						<Image
							src='/images/img-slider-04.webp'
							alt='baner'
							width={750}
							height={565}
							objectFit='cover'
						/>
					</span>
					<Fade bottom>
						<div
							className={classNames(
								styles.baner__content,
								styles.baner__content_position,
							)}>
							<p
								className={classNames(
									styles.baner__title,
									styles.baner__title_size,
								)}>
								Дополнительные
								<br />
								<span className={styles.baner__spanTitle}>услуги</span>
							</p>
							<p className={styles.baner__paragraph}>
								Мы ценим наших клиентов, поэтому берём на себя техническую и
								информационную поддержку проектов.
							</p>
							<ul
								className={classNames(
									styles.baner__links,
									styles.baner__links_position,
								)}>
								<li>
									<Link href='/uslugi'>
										<a
											className={classNames(
												styles.baner__link,
												styles.baner__link_color,
											)}>
											Список услуг
										</a>
									</Link>
								</li>
								<li>
									<Link href='/portfolio'>
										<a className={styles.baner__link}>Наши работы</a>
									</Link>
								</li>
							</ul>
						</div>
					</Fade>
				</div>
			</Slider>
		</div>
	)
}

export default BanerSlider
