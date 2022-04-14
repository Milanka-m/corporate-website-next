import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./Contacts.module.scss"
import classNames from "classnames"

const Contacts: React.FC = () => {
	return (
		<Fade bottom>
			<div className={styles.contacts__container}>
				<h1 className={styles.contacts__title}>
					Наши <span>Контакты</span>
				</h1>
				<p className={styles.contacts__text}>
					Свяжитесь с нами, чтобы узнать, как наша компания может помочь вам
					развивать свой бизнес.
				</p>
				<ul className={styles.contacts__links}>
					<li>
						<div className={styles.contacts__cardText}>
							<span>
								<Image
									src='/images/map-icon.webp'
									alt='office-icon'
									width={50}
									height={47}
									objectFit='contain'
								/>
							</span>
							<ul className={styles.contacts__info}>
								<li>
									<a
										href='https://goo.gl/maps/xGkwPvi1btnJuK9k7'
										target='_blank'
										rel='noopener noreferrer'>
										<span className={styles.contacts__infoTitle}>Белгород</span>
										<p className={styles.contacts__infoText}>
											ул. Садовая 2а офис 100
										</p>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a
							className={styles.contacts__link}
							href='mailto:dev@skillfond.ru'>
							<span>
								<Image
									src='/images/email-icon.webp'
									alt='email-icon'
									width={50}
									height={50}
									objectFit='contain'
								/>
							</span>
							<article className={styles.contacts__info}>
								<span
									className={classNames(
										styles.contacts__infoTitle,
										styles.contacts__infoTitle_color,
									)}>
									Email
								</span>
								<p className={styles.contacts__infoText}>dev@skillfond.ru</p>
							</article>
						</a>
					</li>
					<li>
						<a className={styles.contacts__link} href='tel:+37120082527'>
							<span>
								<Image
									src='/images/telephone-icon.webp'
									alt='telephone-icon'
									width={50}
									height={50}
									objectFit='contain'
								/>
							</span>
							<article className={styles.contacts__info}>
								<span
									className={classNames(
										styles.contacts__infoTitle,
										styles.contacts__infoTitle_color,
									)}>
									Телефон
								</span>
								<p className={styles.contacts__infoText}>+7 4722 777 235</p>
							</article>
						</a>
					</li>
				</ul>
			</div>
		</Fade>
	)
}

export default Contacts
