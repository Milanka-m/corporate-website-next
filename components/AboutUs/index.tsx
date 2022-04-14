import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import Count from "../Count/index"
import styles from "./AboutUs.module.scss"

const AboutUs: React.FC = () => {
	return (
		<section className={styles.aboutUs}>
			<div className={styles.aboutUs__container}>
				<Fade bottom>
					<div className={styles.aboutUs__content}>
						<h2 className={styles.aboutUs__title}>О нас</h2>
						<p className={styles.aboutUs__paragraph}>
							Лучшая компания ООО Ваша компания успешно работает уже более 9
							лет. Мы специализируемся на разработке комплексных работ по
							созданию уникального и узнаваемого образа компании. Агентство
							ООО Ваша компания предлагает самые современные решения маркетинга и
							веб-разработки на 2021 год. Мы работаем эффективно, креативно,
							быстро и помогаем найти правильное решение для потребностей любого
							клиента.
						</p>
						<p className={styles.aboutUs__paragraph}>
							Работая с нами, вы получите именно то, что хотите. А если еще не
							знаете, что хотите, то получите то, что вам действительно
							необходимо. Мы любим то, что мы делаем, поэтому каждый проект для
							нас лучший!
						</p>
						<Count />
						<Link href='/o-nas'>
							<a className={styles.aboutUs__cardLink}>Узнать больше</a>
						</Link>
					</div>
				</Fade>
				<Fade top>
					<span className={styles.aboutUs__img}>
						<Image
							src='/images/img-about-us.webp'
							alt='about-us'
							width={680}
							height={453}
							objectFit='contain'
						/>
					</span>
				</Fade>
			</div>
		</section>
	)
}

export default AboutUs
