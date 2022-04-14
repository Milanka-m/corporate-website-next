import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./Bonuses.module.scss"

const Вonuses: React.FC = () => {
	return (
		<section className={styles.bonuses}>
			<div className={styles.bonuses__container}>
				<Fade top>
					<Image
						src='/images/casual-colleagues-using.webp'
						alt='casual-colleagues-using'
						width={663}
						height={442}
						objectFit='contain'
					/>
				</Fade>
				<Fade bottom>
					<div className={styles.bonuses__content}>
						<h2 className={styles.bonuses__title}>
							Что вы получите, если сайт <span>разработан ООО Ваша компания</span>
						</h2>
						<ul id={styles.bonuses__lists}>
							<li>
								<p className={styles.bonuses__item}>
									Предложим наиболее оптимальный вариант реализации проекта в
									рамках вашего бюджета
								</p>
							</li>
							<li>
								<p className={styles.bonuses__item}>
									Получите полноценный сайт, с индивидуальным дизайном и
									адаптированным под все устройства
								</p>
							</li>
							<li>
								<p className={styles.bonuses__item}>
									Сможете самостоятельно вносить изменения в сайт. Мы
									предоставим инструкцию бесплатно
								</p>
							</li>
							<li>
								<p className={styles.bonuses__item}>
									Получите полностью оптимизированный сайт, который будет готов
									к работе и к запуску
								</p>
							</li>
							<li>
								<p className={styles.bonuses__item}>
									Мы сможем предоставить вам комплексные услуги для успешной
									реализации проекта
								</p>
							</li>
							<li>
								<p className={styles.bonuses__item}>
									На сайт будут установлены дополнительные модули защиты от
									взлома и вируса
								</p>
							</li>
							<li>
								<p className={styles.bonuses__item}>
									Наш хостинг надежно защищен от различных видов атак, поэтому
									ваш сайт в безопастности
								</p>
							</li>
							<li>
								<p className={styles.bonuses__item}>
									Индивидуальный подход к каждому клиенту и сроки, указаные в
									договоре перед началом работ
								</p>
							</li>
						</ul>
					</div>
				</Fade>
			</div>
		</section>
	)
}

export default Вonuses
