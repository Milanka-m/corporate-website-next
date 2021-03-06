import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import { Landing, Price, Process, ApplicationForm } from "../../components"
import styles from "../../components/Price/Price.module.scss"
import stylesForm from "../index.module.scss"

const CorporateWebsite: NextPage = () => {
	return (
		<Layout
			title='Корпоративный сайт. Разработка и поддержка сайтов &nbsp;— ООО Ваша компания'
			desc='Корпоративный сайт представляет собой компанию, 
      его можно назвать полноценным «лицом» вашей фирмы.  
      При разработке корпоративных сайтов мы придерживаемся ряда критериев 
      - это грамотный дизайн и архитектура сайта, ориентированность на SEO 
      продвижение и адаптивность под все устройства.'
			ogTitle='Корпоративный сайт. Разработка и поддержка сайтов - ООО Ваша компания'>
			<Landing
				title='Корпоратативный'
				subtitle='Новый уровень в бизнесе'
				paragraph='Корпоративный сайт представляет собой компанию, 
          его можно назвать полноценным «лицом» вашей фирмы. 
          Корпоративный сайт состоит из нескольких разделов, таких 
          как подробные данные обо всех видах вашей деятельности, 
          история компании, условия сотрудничества для партнеров, 
          открытые вакансии для соискателей, предложения для клиентов, 
          новостная лента и другая информация, отражающая жизнь вашего 
          бизнеса. При разработке корпоративных сайтов мы придерживаемся 
          ряда критериев - это грамотный дизайн и архитектура сайта, 
          ориентированность на SEO продвижение и адаптивность под все 
          устройства. Для управления сайтом предусмотрена удобная 
          система управления сайтом (CMS), которая позволит вам без 
          труда вносить необходимые изменения самостоятельно.'
				img='/images/corporate-website-img-1.webp'
				heading='Для чего нужен корпоративный сайт'
				cardtext1='Формирование делового 
          имиджа и репутации'
				cardtext2='Информирование аудитории 
          о товарах и услугах'
				cardtext3='Получение обратной 
          связи от клиентов'
				cardtext4='Привлечение партнёров, 
          сотрудников'
				iconcard1='/images/site-item-icon.webp'
				iconcard2='/images/site-item-icon.webp'
				iconcard3='/images/site-item-icon.webp'
				iconcard4='/images/site-item-icon.webp'
			/>
			<Price priceimg='/images/corporate-website-img-2.webp' titleprice='€600'>
				<div className={styles.price__contentBonuses}>
					<ul className={styles.price__lists}>
						<li>
							<p className={styles.price__item}>Уникальный дизайн*</p>
						</li>
						<li>
							<p className={styles.price__item}>Адаптивная верстка</p>
						</li>
						<li>
							<p className={styles.price__item}>Наполнение сайта</p>
						</li>
						<li>
							<p className={styles.price__item}>Модуль обратного звонка</p>
						</li>
						<li>
							<p className={styles.price__item}>Форма онлайн заказа</p>
						</li>
						<li>
							<p className={styles.price__item}>Модуль онлайн оплаты</p>
						</li>
						<li>
							<p className={styles.price__item}>Онлайн-консультант</p>
						</li>
						<li>
							<p className={styles.price__item}>SSL сертификат</p>
						</li>
					</ul>
					<ul className={styles.price__lists}>
						<li>
							<p className={styles.price__item}>Parallax эффекты и анимация</p>
						</li>
						<li>
							<p className={styles.price__item}>Кросспостинг с соц. сетями</p>
						</li>
						<li>
							<p className={styles.price__item}>Корпоративная почта</p>
						</li>
						<li>
							<p className={styles.price__item}>SEO оптимизация сайта</p>
						</li>
						<li>
							<p className={styles.price__item}>Оптимизация загрузки</p>
						</li>
						<li>
							<p className={styles.price__item}>Полная веб аналитика</p>
						</li>
						<li>
							<p className={styles.price__item}>Система управления сайтом</p>
						</li>
						<li>
							<p className={styles.price__item}>Хостинг - 2 месяцa в подарок</p>
						</li>
					</ul>
				</div>
			</Price>
			<Process
				cardTitle1='1. Консультация'
				cardTitle2='2. Техническое задание'
				cardTitle3='3. Макет'
				cardTitle4='4. Верстка'
				cardTitle5='5. Тестирование'
				cardTitle6='6. Финал'
				cardText1='Агентство ООО Ваша компания проводит бесплатную консультацию 
          по созданию веб сайта. Наши специалисты помогут точно 
          определить, какой Интернет-ресурс вам необходим для 
          реализации поставленной задачи. Вы можете обратиться 
          к нам по телефону или оставить заявку на сайте, 
          мы свяжемся с вами в ближайшее время.'
				cardText2='Это основа, на которую полагается каждый специалист, 
          участвующий в разработке. Поэтому в составлении ТЗ 
          участие заказчика – необходимо. На этапе формирования 
          и обсуждения ТЗ также разрабатывается структура сайта, 
          его навигация, количество категорий и подкатегорий, 
          их последовательность размещения и т.д.'
				cardText3='Дизайн – это то, что видит посетитель в первую очередь, 
          он оценивает его и принимает решение остаться на странице 
          или закрыть вкладку. Важно отметить, что дизайнер 
          рисует дизайн не каждой страницы, а шаблоны нескольких 
          основных (рисует кнопки, баннеры и другие графические элементы).'
				cardText4='Дизайн получает жизнь, он становиться динамичным. 
          Ресурс подключается к системе управления, где создаются 
          страницы, вкладки меню, начинают работать кнопки. 
          Разрабатываются адаптивные версии сайта.'
				cardText5='Тестирование сайта — один из важных жизненных этапов, 
          после которого, предоставляется заказчику готовый проект 
          без ошибок, с хорошей читабельностью, воспринимаемой 
          легкостью, удобством и надежностью. Тестирование — 
          это отклонение фактического результата от ожидаемого, 
          другими словами — это процесс поиска багов (ошибок).'
				cardText6='По завершению работы готовый проект передается заказчику 
          вместе с логинами и паролями к системе управления. 
          После сдачи проекта клиент может заказать услугу 
          продвижения и поддержки проекта.'
			/>
			<section className={stylesForm.application}>
				<div className={stylesForm.application__container}>
					<div className={stylesForm.application__heading}>
						<h2 className={stylesForm.application__title}>Свяжитесь с нами!</h2>
						<p className={stylesForm.application__subtitle}>
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

export default CorporateWebsite
