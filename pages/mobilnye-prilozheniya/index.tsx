import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import { WebsiteDev, Process, ApplicationForm } from "../../components"
import styles from "../index.module.scss"

const MobileApp: NextPage = () => {
	return (
		<Layout
			title='Разработка мобильных приложений &nbsp;— ООО Ваша компания'
			desc='ООО Ваша компания создаст эффективное приложение для мобильных телефонов. 
      В мобильной разработке мы используем современные инструменты, 
      обеспечивающие высокий уровень безопасности, 
      а также создание практически любого функционала.'
			ogTitle='Разработка мобильных приложений - ООО Ваша компания'>
			<WebsiteDev
				title='Разработка мобильных приложений'
				subtitle='Оценим, спроектируем, разработаем'
				paragraph1='ООО Ваша компания создаст эффективное приложение для 
          мобильных телефонов. В мобильной разработке мы используем 
          современные инструменты, обеспечивающие высокий уровень 
          безопасности, а также создание практически любого функционала. 
          В итоге вы получаете готовое рабочее приложение под ключ и 
          сможете использовать его для внедрения в свой бизнес. 
          С помощью мобильных приложений вы сможете вывести бизнес 
          на новый уровень: проводить сделки, обучать сотрудников, 
          планировать и ставить задачи, закупать и доставлять товары 
          в максимально удобном для компании и клиента формате.'
				imgWebDev='/images/mobile-application-development.webp'>
				<div className={styles.mobileApp}>
					<p className={styles.mobileApp__text}>
						Для чего нужно мобильное приложение?
					</p>
					<ul id={styles.mobileApp__lists}>
						<li>
							<p className={styles.mobileApp__text}>
								<span>Для адаптации интернет-магазина. </span>
								Это эффективный и быстро растущий канал продаж: более 70%
								пользователей совершают покупки именно с мобильных устройств.
							</p>
						</li>
						<li>
							<p className={styles.mobileApp__text}>
								<span>
									Для создания упрощенных или адаптивных версий сайтов.{" "}
								</span>
								Подходит для информирования клиентов о компании, ваших товарах и
								услугах, действующих акциях.
							</p>
						</li>
						<li>
							<p className={styles.mobileApp__text}>
								<span>Для интеграции корпоративных порталов. </span>
								Это область специализированных корпоративных мобильных
								приложений для внутренних нужд компании.
							</p>
						</li>
					</ul>
				</div>
			</WebsiteDev>
			<Process
				cardTitle1='1. Аналитика'
				cardTitle2='2. Техническое задание'
				cardTitle3='3. Проектирование и дизайн'
				cardTitle4='4. Разработка'
				cardTitle5='5. Тестирование'
				cardTitle6='6. Запуск и поддержка'
				cardText1='Наши специалисты проводят аналитику, изучают 
          сферу бизнеса, изучают конкурентов, целевую аудиторию. 
          На основе собранных данных формируется четкий план действий, 
          рассчитывается стоимость. Аналитика позволяет сделать 
          качественный продукт, нацеленный на аудиторию.'
				cardText2='Мы составляем подробное описание функциональности 
          и дизайна будущего приложения. Описываем пользовательские 
          истории (User Story), составляем карту путешествия пользователей 
          (Customer Journey Map) и формируем технические требования к 
          сервису. То есть фиксируем, каким должно быть приложение, 
          что оно должно уметь и как это будет работать.'
				cardText3='Прототипы позволяют понять, как будет выглядеть 
          приложение. Прототип позволяет на ранних стадиях 
          (до программирования и тестирования) попробовать приложение 
          в действии. Заказчику видны все экраны, есть возможность 
          оценить (покликать) кнопки и другие элементы интерфейса. 
          На этом этапе можно и нужно понять, требует ли схема 
          взаимодействия приложения с пользователем каких-либо доработок.'
				cardText4='Далее начинается программирование мобильного приложения. 
          В разработке мобильных приложений участвует большая команда. 
          Это самая продолжительная и ответственная часть работы. Наша 
          цель – сделать приложения для мобильных устройств под конкретные 
          бизнес задачи.'
				cardText5='Проводится несколько этапов тестирования, ищутся 
          неточности в коде, имитируется деятельность потенциального 
          пользователя, определяется качество интерфейса. Если есть 
          недостатки, вносятся коррективы. При необходимости проводится 
          бета-тестирование с использованием реальных клиентов для проверки 
          нагрузки и поиска ошибок. Проверяется система безопасности.'
				cardText6='Когда приложение прошло тест, размещаем в App Store или 
          же в Google Play, если это Android приложение. Мы обучаем ваших 
          сотрудников пользоваться интерфейсом, работать с контентом. 
          Отдельно можно заказать услугу полного технического обеспечения 
          приложения. Также предлагаем услуги продвижения.'
			/>
			<WebsiteDev
				title='Зачем нужно мобильное приложение?'
				paragraph1='Сколько стоит создать мобильное приложение на 
          заказ? Цена на разработку мобильного приложения рассчитывается 
          индивидуально в зависимости от сложности, объема и сроков 
          работы. Разработчик оценивает временные затраты по проекту, 
          а аналитики устанавливают стоимость продукта.'
				imgWebDev='/images/why-do-need-a-mobile-app.webp'
			/>
			<section className={styles.application}>
				<div className={styles.application__container}>
					<div className={styles.application__heading}>
						<h2 className={styles.application__title}>Свяжитесь с нами!</h2>
						<p className={styles.application__subtitle}>
							Напишите нам и мы обсудим предстоящий проект! Специальное
							предложение: Бесплатный экспресс-аудит.
						</p>
					</div>
					<ApplicationForm />
				</div>
			</section>
		</Layout>
	)
}

export default MobileApp