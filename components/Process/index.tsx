import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./Process.module.scss"
import classNames from "classnames"

interface IProcessProps {
	cardTitle1?: string
	cardTitle2?: string
	cardTitle3?: string
	cardTitle4?: string
	cardTitle5?: string
	cardTitle6?: string
	cardText1?: string
	cardText2?: string
	cardText3?: string
	cardText4?: string
	cardText5?: string
	cardText6?: string
}

const Process: React.FC<IProcessProps> = ({
	cardTitle1,
	cardTitle2,
	cardTitle3,
	cardTitle4,
	cardTitle5,
	cardTitle6,
	cardText1,
	cardText2,
	cardText3,
	cardText4,
	cardText5,
	cardText6,
}) => {
	return (
		<section className={styles.process}>
			<div className={styles.process__line}></div>
			<div className={styles.process__container}>
				<h2 className={styles.process__title}>Наш процесс</h2>
				<ul className={styles.process__cards}>
					<li className={styles.process__item}>
						<Fade bottom>
							<div className={styles.process__card}>
								<span className={styles.process__cardImage}>
									<Image
										src='/images/smm-icon-4.webp'
										alt='website-icon'
										width={80}
										height={80}
										objectFit='contain'
									/>
								</span>
								<span className={styles.process__cardTitle}>{cardTitle1}</span>
								<p className={styles.process__cardText}>{cardText1}</p>
							</div>
						</Fade>
						<div
							className={classNames(
								styles.process__block,
								styles.process__block_position_left,
							)}></div>
					</li>
					<li className={styles.process__item}>
						<div className={styles.process__block}></div>
						<Fade bottom>
							<div
								className={classNames(
									styles.process__card,
									styles.process__card_position_line,
								)}>
								<Image
									src='/images/additional-services-icon-6.webp'
									alt='seo-icon'
									width={80}
									height={80}
									objectFit='contain'
								/>
								<span className={styles.process__cardTitle}>{cardTitle2}</span>
								<p className={styles.process__cardText}>{cardText2}</p>
							</div>
						</Fade>
					</li>
					<li className={styles.process__item}>
						<Fade bottom>
							<div className={styles.process__card}>
								<span className={styles.process__cardImage}>
									<Image
										src='/images/smm-icon-3.webp'
										alt='website-icon'
										width={80}
										height={80}
										objectFit='contain'
									/>
								</span>
								<span className={styles.process__cardTitle}>{cardTitle3}</span>
								<p className={styles.process__cardText}>{cardText3}</p>
							</div>
						</Fade>
						<div
							className={classNames(
								styles.process__block,
								styles.process__block_position_left,
							)}></div>
					</li>
					<li className={styles.process__item}>
						<div className={styles.process__block}></div>
						<Fade bottom>
							<div
								className={classNames(
									styles.process__card,
									styles.process__card_position_line,
								)}>
								<Image
									src='/images/smm-icon-7.webp'
									alt='seo-icon'
									width={80}
									height={80}
									objectFit='contain'
								/>
								<span className={styles.process__cardTitle}>{cardTitle4}</span>
								<p className={styles.process__cardText}>{cardText4}</p>
							</div>
						</Fade>
					</li>
					<li className={styles.process__item}>
						<Fade bottom>
							<div className={styles.process__card}>
								<span className={styles.process__cardImage}>
									<Image
										src='/images/smm-icon-6.webp'
										alt='website-icon'
										width={80}
										height={80}
										objectFit='contain'
									/>
								</span>
								<span className={styles.process__cardTitle}>{cardTitle5}</span>
								<p className={styles.process__cardText}>{cardText5}</p>
							</div>
						</Fade>
						<div
							className={classNames(
								styles.process__block,
								styles.process__block_position_left,
							)}></div>
					</li>
					<li className={styles.process__item}>
						<div className={styles.process__block}></div>
						<Fade bottom>
							<div
								className={classNames(
									styles.process__card,
									styles.process__card_background_gradient,
								)}>
								<Image
									src='/images/additional-services-icon-1.webp'
									alt='seo-icon'
									width={80}
									height={80}
									objectFit='contain'
								/>
								<span className={styles.process__cardTitle}>{cardTitle6}</span>
								<p className={styles.process__cardText}>{cardText6}</p>
							</div>
						</Fade>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Process
