import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import styles from "./Cases.module.scss"
import classNames from "classnames"

const Cases: React.FC = () => {
	return (
		<section className={styles.cases}>
			<div className={styles.cases__container}>
				<h1 className={styles.cases__title}>
					ООО Ваша компания – Лучшая компания
				</h1>
				<p className={styles.cases__subtitle}>
					Мы предлагаем самые современные решения маркетинга и веб-разработки.
					Работаем эффективно, креативно, быстро! Находим правильное решение для
					потребностей любого клиента!
				</p>
				<ul className={styles.cases__cards}>
					<li>
						<Fade bottom>
							<div className={styles.cases__card}>
								<Image
									src='/images/img-case-01.webp'
									alt='card'
									width={360}
									height={240}
									objectFit='contain'
								/>
								<article className={styles.cases__cardHeading}>
									<h2 className={styles.cases__cardTitle}>Экспертиза</h2>
									<p className={styles.cases__cardText}>
										Решая амбициозные задачи, мы создаем выдающиеся кейсы.
										Накапливаем опыт и наращиваем экспертизу. За счет этого
										говорим с клиентами на одном языке, лучше понимаем друг
										друга, что ускоряет бизнес-процессы.
									</p>
									<Link href='/portfolio'>
										<a className={styles.cases__cardLink}>Наши работы</a>
									</Link>
								</article>
							</div>
						</Fade>
					</li>
					<li>
						<Fade right>
							<div
								className={classNames(
									styles.cases__card,
									styles.cases__card_color_pink,
								)}>
								<Image
									src='/images/img-case-02.webp'
									alt='card'
									width={360}
									height={240}
									objectFit='contain'
								/>
								<article className={styles.cases__cardHeading}>
									<h2 className={styles.cases__cardTitle}>Технологии</h2>
									<p className={styles.cases__cardText}>
										Применяем передовые разработки, чтобы сокращать время на
										решение простых задач. Платформы и автоматизация существенно
										увеличивают скорость каждого действия, оптимизируя ресурсы
										клиента.
									</p>
									<Link href='/contact'>
										<a
											className={classNames(
												styles.cases__cardLink,
												styles.cases__cardLink_border,
											)}>
											Заказать сайт
										</a>
									</Link>
								</article>
							</div>
						</Fade>
					</li>
					<li>
						<Fade top>
							<div
								className={classNames(
									styles.cases__card,
									styles.cases__card_color_blue,
								)}>
								<Image
									src='/images/img-case-03.webp'
									alt='card'
									width={360}
									height={240}
									objectFit='contain'
								/>
								<article className={styles.cases__cardHeading}>
									<h2 className={styles.cases__cardTitle}>Забота</h2>
									<p className={styles.cases__cardText}>
										Стремимся к максимальному доверию. Соблюдение деловых
										договоренностей с клиентами приводит к доверию через
										взаимную ответственность, а доверие приводит к скорости – не
										нужно ничего перепроверять лишний раз.
									</p>
									<Link href='/o-nas'>
										<a className={styles.cases__cardLink}>О нас</a>
									</Link>
								</article>
							</div>
						</Fade>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Cases
