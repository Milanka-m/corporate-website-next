import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./Products.module.scss"

const Products: React.FC = () => {
	return (
		<section className={styles.products}>
			<h2 className={styles.products__title}>У нас вы можете заказать</h2>
			<div className={styles.products__container}>
				<ul className={styles.products__cardList}>
					<li>
						<Fade bottom>
							<div className={styles.products__card}>
								<Image
									src='/images/graphic-design-products-1.webp'
									alt='card'
									width={580}
									height={386}
									objectFit='cover'
								/>
								<article className={styles.products__cardHeading}>
									<span className={styles.products__cardTitle}>от 100 €</span>
									<div className={styles.products__cardDescription}>
										<p className={styles.products__cardSelect}>Логотип</p>
										<input
											id={styles.products__cardSelectId1}
											type='checkbox'
										/>
										<label
											className={styles.products__cardSelectLabel}
											htmlFor={styles.products__cardSelectId1}>
											<div className={styles.products__cardSelectBtn}></div>
										</label>
										<div className={styles.products__cardSelectContainer}>
											<p className={styles.products__cardText}>
												Логотип – первое, что нужно сделать для своего проекта.
												Будь-то какой-либо товар, сеть магазинов, заведения
												общественного питания, онлайн-магазин или что-то другое
												– все должно иметь свое «лицо». Для проведения рекламной
												кампании это, прежде всего, логотипы и фирменные знаки –
												без них невозможно создать меткое представление о вашем
												бизнесе. Это часть стратегии, и в наших общих интересах
												сделать изображения такими, чтобы, видя их где бы то ни
												было, любой человек знал, что они представляют. А далее
												уже вы со своей стороны, обеспечивая достойное качество
												и сервис, сделаете репутацию своему бренду, но к этому
												времени его уже будут знать «в лицо».
											</p>
										</div>
									</div>
								</article>
							</div>
						</Fade>
					</li>
					<li>
						<Fade bottom>
							<div className={styles.products__card}>
								<Image
									src='/images/graphic-design-products-3.webp'
									alt='card'
									width={580}
									height={386}
									objectFit='cover'
								/>
								<article className={styles.products__cardHeading}>
									<span className={styles.products__cardTitle}>от 250 €</span>
									<div className={styles.products__cardDescription}>
										<p className={styles.products__cardSelect}>
											Корпоративный стиль
										</p>
										<input
											id={styles.products__cardSelectId3}
											type='checkbox'
										/>
										<label
											className={styles.products__cardSelectLabel}
											htmlFor={styles.products__cardSelectId3}>
											<div className={styles.products__cardSelectBtn}></div>
										</label>
										<div className={styles.products__cardSelectContainer}>
											<p className={styles.products__cardText}>
												Грамотно разработанная рекламная кампания – залог успеха
												и процветания каждого бизнеса. Неважно, чем вы
												занимаетесь, главное – правильно преподнести это
												потребителю. Оригинальный корпоративный стиль позволяет
												выделиться среди конкурентов, заявить о себе, чтобы ваш
												бизнес узнавали. В этой сфере для нас – безграничный
												простор для творчества. Мы создадим фирменные знаки,
												логотипы, сувенирную продукцию, наша креативная команда
												подберет методы графической реализации так, чтобы
												наиболее удачным образом рассказать о вашем деле. Это
												обязательно поможет достичь больших результатов.
											</p>
										</div>
									</div>
								</article>
							</div>
						</Fade>
					</li>
					<li>
						<Fade bottom>
							<div className={styles.products__card}>
								<Image
									src='/images/graphic-design-products-5.webp'
									alt='card'
									width={580}
									height={386}
									objectFit='cover'
								/>
								<article className={styles.products__cardHeading}>
									<span className={styles.products__cardTitle}>от 60 €</span>
									<div className={styles.products__cardDescription}>
										<p className={styles.products__cardSelect}>
											Буклеты и флаеры
										</p>
										<input
											id={styles.products__cardSelectId5}
											type='checkbox'
										/>
										<label
											className={styles.products__cardSelectLabel}
											htmlFor={styles.products__cardSelectId5}>
											<div className={styles.products__cardSelectBtn}></div>
										</label>
										<div className={styles.products__cardSelectContainer}>
											<p className={styles.products__cardText}>
												Буклеты — это один из наиболее популярных видов печатной
												продукции, незаменимый при проведении презентаций и
												рекламных акций. Яркая лицевая часть, вызывающая
												интерес, заставляющая изучить буклет от начала до конца,
												более спокойная внутренняя часть с хорошо читаемым,
												емким, но содержательным текстом, качественные
												фотографии для наглядности — вот основные моменты,
												которые следует учесть при создании буклета. Флаерная
												продукция поможет привлечь внимание к новому проекту или
												событию в вашей компании. При помощи стилизованных
												буклетов с необычным, броским и цепляющим дизайном,
												лучше всего пригласить клиентов на открытие любого
												заведения или нового магазина.
											</p>
										</div>
									</div>
								</article>
							</div>
						</Fade>
					</li>
				</ul>
				<ul className={styles.products__cardList}>
					<li>
						<Fade top>
							<div className={styles.products__card}>
								<Image
									src='/images/graphic-design-products-2.webp'
									alt='card'
									width={580}
									height={386}
									objectFit='cover'
								/>
								<article className={styles.products__cardHeading}>
									<span className={styles.products__cardTitle}>от 25 €</span>
									<div className={styles.products__cardDescription}>
										<p className={styles.products__cardSelect}>
											Визитная карточка
										</p>
										<input
											id={styles.products__cardSelectId2}
											type='checkbox'
										/>
										<label
											className={styles.products__cardSelectLabel}
											htmlFor={styles.products__cardSelectId2}>
											<div className={styles.products__cardSelectBtn}></div>
										</label>
										<div className={styles.products__cardSelectContainer}>
											<p className={styles.products__cardText}>
												Любой уважающий себя предприниматель должен иметь
												визитницу со стильными карточками, которые будут
												отражать его личный имидж или корпоративный стиль. Наша
												компания может создать для вас несколько вариантов
												визиток на все случаи жизни. Допустим, вам необходимо
												оставить свои контакты потенциальному партнеру – тогда
												карточка должна соответствовать стилю вашей компании. А
												если вы встретили своего старого друга, с которым не
												виделись со школы и хотите обменяться номерами
												телефонов, это лучше всего сделать при помощи личной
												визитки, выполненной в стиле, отличном от
												корпоративного. Наша компания ООО Ваша компания
												предоставляет услуги типографии.
											</p>
										</div>
									</div>
								</article>
							</div>
						</Fade>
					</li>
					<li>
						<Fade top>
							<div className={styles.products__card}>
								<Image
									src='/images/graphic-design-products-4.webp'
									alt='card'
									width={580}
									height={386}
									objectFit='cover'
								/>
								<article className={styles.products__cardHeading}>
									<span className={styles.products__cardTitle}>от 150 €</span>
									<div className={styles.products__cardDescription}>
										<p className={styles.products__cardSelect}>
											Этикетка и упаковка
										</p>
										<input
											id={styles.products__cardSelectId4}
											type='checkbox'
										/>
										<label
											className={styles.products__cardSelectLabel}
											htmlFor={styles.products__cardSelectId4}>
											<div className={styles.products__cardSelectBtn}></div>
										</label>
										<div className={styles.products__cardSelectContainer}>
											<p className={styles.products__cardText}>
												Упаковка товара – один из важнейших этапов его
												продвижения. Можно, конечно, просто обернуть все в
												бумажный пакет и приклеить логотип компании, в некоторых
												ситуациях работает и такой подход. Однако зачастую этого
												недостаточно, чтобы покупатель обратил на продукцию свое
												внимание. Поэтому мы предлагаем вам разработку
												совершенно уникальной и необычной упаковки или этикетки,
												которая подчеркнет достоинства вашего бренда, а может, и
												расскажет историю его создания. От нас вы можете ждать
												реализации любых ваших идей!
											</p>
										</div>
									</div>
								</article>
							</div>
						</Fade>
					</li>
					<li>
						<Fade top>
							<div className={styles.products__card}>
								<Image
									src='/images/graphic-design-products-6.webp'
									alt='card'
									width={580}
									height={386}
									objectFit='cover'
								/>
								<article className={styles.products__cardHeading}>
									<span className={styles.products__cardTitle}>от 150 €</span>
									<div className={styles.products__cardDescription}>
										<p className={styles.products__cardSelect}>
											Разработка меню
										</p>
										<input
											id={styles.products__cardSelectId6}
											type='checkbox'
										/>
										<label
											className={styles.products__cardSelectLabel}
											htmlFor={styles.products__cardSelectId6}>
											<div className={styles.products__cardSelectBtn}></div>
										</label>
										<div className={styles.products__cardSelectContainer}>
											<p className={styles.products__cardText}>
												Мы создадим для вашего заведения привлекательное и
												изящное меню, которое будет максимально отвечать стилю
												ресторана, кафе, пиццерии, суши-бара и т.д. Наши
												креативные специалисты разработают уникальный способ
												подачи информации, чтобы по максимуму привлечь клиента.
												Мы можем снабдить меню «вкусными» фотографиями блюд,
												создать нестандартное описание, либо сделать все
												максимально скромным и лаконичным – все зависит от ваших
												пожеланий, выбранной кухни и общей концепции заведения.
											</p>
										</div>
									</div>
								</article>
							</div>
						</Fade>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Products
