import React from "react"
import Link from "next/link"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./ProjectSupport.module.scss"

const ProjectSupport: React.FC = () => {
	return (
		<section className={styles.projectSupport}>
			<div className={styles.projectSupport__container}>
				<Fade top>
					<span className={styles.projectSupport__image}>
						<Image
							src='/images/complex-website-2.webp'
							alt='complex-website'
							width={588}
							height={393}
							objectFit='cover'
						/>
					</span>
				</Fade>
				<Fade bottom>
					<div className={styles.projectSupport__content}>
						<h2 className={styles.projectSupport__title}>
							Обеспечиваем поддержку
							<br />
							<span>каждому проекту</span>
						</h2>
						<ul id={styles.projectSupport__lists}>
							<li>
								<p className={styles.projectSupport__item}>
									Полный комплекс индивидуальной разработки под ключ
								</p>
							</li>
							<li>
								<p className={styles.projectSupport__item}>
									Проектирование и прототипирование интерфейса
								</p>
							</li>
							<li>
								<p className={styles.projectSupport__item}>
									Техническая поддержка и проектный аутсорсинг
								</p>
							</li>
						</ul>
						<Link href='/contact'>
							<a className={styles.projectSupport__cardLink}>заказать</a>
						</Link>
					</div>
				</Fade>
			</div>
		</section>
	)
}

export default ProjectSupport
