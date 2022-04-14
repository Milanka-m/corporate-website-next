import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import styles from "./Strategy.module.scss"

const Strategy: React.FC = () => {
	return (
		<section className={styles.strategy}>
			<div className={styles.strategy__container}>
				<Fade top>
					<Image
						src='/images/clients-scaled.webp'
						alt='clients-scaled'
						width={680}
						height={453}
						objectFit='contain'
					/>
				</Fade>
				<Fade bottom>
					<div className={styles.strategy__content}>
						<h2 className={styles.strategy__title}>
							Находите клиентов <span>быстрее</span>
						</h2>
						<p className={styles.strategy__paragraph}>
							Для заказа стратегии просто заполните заявку или позвоните.
							Менеджер по работе с клиентами выйдет на связь и подготовит
							персональное коммерческое предложение performance-marketing от
							ООО Ваша компания, составленное с учетом желаемых целей и
							возможностей.
						</p>
						<Link href='/o-nas'>
							<a className={styles.strategy__cardLink}>заказать</a>
						</Link>
					</div>
				</Fade>
			</div>
		</section>
	)
}

export default Strategy
