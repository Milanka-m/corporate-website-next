import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./OurContacts.module.scss"
import classNames from "classnames"

const OurContacts: React.FC = () => {
	return (
		<section className={styles.ourContacts}>
			<Fade bottom>
				<div className={styles.ourContacts__container}>
					<div className={styles.ourContacts__infoContainer}>
						<h2 className={styles.ourContacts__title}>
							Наши <span>Контакты</span>
						</h2>
						<p className={styles.ourContacts__text}>
							Посетите наше агентство ООО Ваша компания или отправьте нам
							электронное письмо в любое время. Если у вас есть вопросы,
							пожалуйста, не стесняйтесь обращаться к нам.
						</p>
						<ul className={styles.ourContacts__links}>
							<Fade bottom>
								<li>
									<div className={styles.ourContacts__cardText}>
										<span>
											<Image
												src='/images/map-icon.webp'
												alt='office-icon'
												width={60}
												height={60}
												objectFit='contain'
											/>
										</span>
										<article className={styles.ourContacts__info}>
											<span className={styles.ourContacts__infoTitle}>
												Офис
											</span>
											<p className={styles.ourContacts__infoText}>
												Белгород ул. Садовая 2а офис 100
											</p>
										</article>
									</div>
								</li>
							</Fade>
							<Fade top>
								<li>
									<a
										className={styles.ourContacts__link}
										href='mailto:dev@skillfond.ru'>
										<span>
											<Image
												src='/images/website-development-icon-3.webp'
												alt='support-icon'
												width={48}
												height={48}
												objectFit='contain'
											/>
										</span>
										<article className={styles.ourContacts__info}>
											<span
												className={classNames(
													styles.ourContacts__infoTitle,
													styles.ourContacts__infoTitle_color,
												)}>
												Поддержка
											</span>
											<p className={styles.ourContacts__infoText}>
												dev@skillfond.ru
											</p>
										</article>
									</a>
								</li>
							</Fade>
							<li>
								<a className={styles.ourContacts__link} href='tel:+37120082527'>
									<span>
										<Image
											src='/images/telephone-icon.webp'
											alt='telephone-icon'
											width={48}
											height={48}
											objectFit='contain'
										/>
									</span>
									<article className={styles.ourContacts__info}>
										<span
											className={classNames(
												styles.ourContacts__infoTitle,
												styles.ourContacts__infoTitle_color,
											)}>
											Телефон
										</span>
										<p className={styles.ourContacts__infoText}>
											+7 4722 777 235
										</p>
									</article>
								</a>
							</li>
							<li>
								<a
									className={styles.ourContacts__link}
									href='mailto:dev@skillfond.ru'>
									<span>
										<Image
											src='/images/email-icon.webp'
											alt='email-icon'
											width={48}
											height={48}
											objectFit='contain'
										/>
									</span>
									<article className={styles.ourContacts__info}>
										<span
											className={classNames(
												styles.ourContacts__infoTitle,
												styles.ourContacts__infoTitle_color,
											)}>
											Email
										</span>
										<p className={styles.ourContacts__infoText}>
											dev@skillfond.ru
										</p>
									</article>
								</a>
							</li>
						</ul>
					</div>
					<iframe 
						src="https://yandex.ru/map-widget/v1/?um=constructor%3A023a3171012229cb95823dc120321f8dd3200d51f6fcc0c683a77cf1008eb3e3&amp;source=constructor" 
						width="600" 
						height="450" 
						frameBorder="0">
					</iframe>
				</div>
			</Fade>
		</section>
	)
}

export default OurContacts
