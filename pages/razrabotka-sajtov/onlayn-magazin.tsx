import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import { Landing, Price, Process, ApplicationForm } from "../../components"
import styles from "../../components/Price/Price.module.scss"
import stylesForm from "../index.module.scss"

const OnlineStore: NextPage = () => {
	return (
		<Layout
			title='Онлайн магазин. Разработка и поддержка сайтов &nbsp;— ООО Ваша компания'
			desc='Online shop позволяет продавать товары в интернете аналогично 
      обычным торговым точкам. Мы сделаем удобный онлайн-магазин для реализации 
      вашей продукции, оптимизируем дизайн под особенности товаров. 
      Для управления сайтом предусмотрена удобная система управления сайтом (CMS), 
      которая позволит вам без труда вносить необходимые изменения самостоятельно.'
			ogTitle='Онлайн магазин. Разработка и поддержка сайтов - ООО Ваша компания'>
			<Landing
				title='Онлайн магазин'
				subtitle='Модно. Стильно. Выгодно.'
				paragraph='Online shop позволяет продавать товары в интернете аналогично 
          обычным торговым точкам. Мы сделаем удобный онлайн-магазин для реализации 
          вашей продукции, оптимизируем дизайн под особенности товаров. Кроме прочего, 
          внешний вид этого проекта будет максимально адаптирован для работы с 
          использованием разных устройств – ноутбуков, компьютеров, смартфонов 
          или планшетов. Мы разработаем удобные «личные кабинеты» для каждого 
          покупателя, упорядочим каталог продукции и напишем уникальное описание 
          ко всем товарам, а также сможем организовать систему фильтров для быстрого 
          поиска нужного наименования.
          Заказывая интернет-магазин в нашем рекламном агентстве ООО Ваша компания, 
          вы запускаете разноплановую работу на всех уровнях создания сайта.
          Для управления сайтом предусмотрена удобная система управления сайтом 
          (CMS), которая позволит вам без труда вносить необходимые изменения самостоятельно.'
				img='/images/wine-shop-1.webp'
				heading='Интегрируем любые сервисы'
				cardtext1='CRM- и ERP-системы,
          базы данных'
				cardtext2='Коллтрекинг, чаты и 
          онлайн-консультанты'
				cardtext3='Сервисы SMS- и 
          email-рассылок'
				cardtext4='Скидки и купоны'
				iconcard1='/images/site-item-icon.webp'
				iconcard2='/images/site-item-icon.webp'
				iconcard3='/images/site-item-icon.webp'
				iconcard4='/images/site-item-icon.webp'
			/>
			<Price priceimg='/images/wine-shop-2.webp' titleprice='€1000'>
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
						<li>
							<p className={styles.price__item}>Системы доставки</p>
						</li>
						<li>
							<p className={styles.price__item}>Стикеры товаров</p>
						</li>
						<li>
							<p className={styles.price__item}>Всевозможные системы оплат</p>
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

export default OnlineStore
