import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./Description.module.scss"

const Description: React.FC = () => {
	return (
		<section className={styles.description}>
			<div className={styles.description__container}>
				<article className={styles.description__block}>
					<Fade top>
						<Image
							src='/images/young-woman-making-presentation-office-1.webp'
							alt='young-woman-making-presentation-office'
							width={674}
							height={449}
							objectFit='contain'
						/>
					</Fade>
					<Fade bottom>
						<div className={styles.description__content}>
							<h2 className={styles.description__title}>
								Оказываем комплексное продвижение
							</h2>
							<p className={styles.description__paragraph}>
								Вы можете заказать отдельную услугу для продвижения сайта или же
								приобрести комплексное продвижение. Цель комплексного
								продвижения – попадание сайта в топ-10, устранение технических
								недочетов, увеличение ссылочной массы. Без комплексного
								продвижения возможность полноценного использования ресурса
								ограничена. Чтобы точно узнать, сколько стоит seo-продвижение
								сайта, проконсультируйтесь с представителем компании.
							</p>
							<p className={styles.description__paragraph}>
								Оставьте заявку на бесплатный аудит сайта и получите скидку 15%
								на месяц продвижения. Бесплатный seo-аудит - проверка
								эффективности работы вашего сайта, по итогам которой
								предоставляется отчет с описанием выявленных проблем и ошибок в
								функционировании сайта и предоставляются рекомендации по их
								устранению.
							</p>
						</div>
					</Fade>
				</article>
			</div>
		</section>
	)
}

export default Description
