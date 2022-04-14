import type { GetServerSideProps, NextPage } from "next"
import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Layout from "../../layout/Layout"
import styles from "../index.module.scss"
import classNames from "classnames"
import {
	WebsiteDev,
	OrderItem,
	Popup,
	ApplicationForm,
	AdditionalMenu,
	Gallery,
} from "../../components"
import { IPortfolioCase } from "../../types"
import { portfoliocasesApi } from "../../stores/api"

interface IPrintingProps {
	cards: IPortfolioCase[]
}

const Printing: NextPage<IPrintingProps> = ({ cards }) => {

	const [isNavActive, setIsNavActive] = React.useState<string>("website")
	const [initialCards, setInitialCards] = React.useState<IPortfolioCase[]>([])
	const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (cards && cards.length > 0) {
			const cardsAllFilter = cards.filter((card) =>
				card.attributes.category!.some((i) => i.category === "website"),
			)
			setInitialCards(cardsAllFilter)
		}
	}, [cards])

	const handleModal = (): void => {
		setIsOpenPopup((pre) => !pre)
	}

	const handleCardClick = (param: string): void => {
		const cardsFilter = cards.filter((card) =>
			card.attributes.category!.some((i) => i.category === param),
		)
		setInitialCards(cardsFilter)
		if (cardsFilter.length > 0) {
			const filterActive = cardsFilter[0].attributes.category!.filter((i) => i.category === param)
			if (filterActive) {
				setIsNavActive(filterActive[0].category!)
			}
		}
	}
	
	return (
		<Layout
			title='Услуги типографии &nbsp;— ООО Ваша компания'
			desc='ООО Ваша компания профессионально занимается полиграфической деятельностью, 
      осуществляя печать рекламной, сувенирной, информационной и прочей продукции. 
      Мы предоставляем полный спектр услуг — от подготовки макета до печати.'
			ogTitle='Услуги типографии - ООО Ваша компания'>
			<WebsiteDev
				title='Услуги типографии'
				subtitle='От создания макета до печати'
				paragraph1='ООО Ваша компания профессионально занимается полиграфической 
          деятельностью, осуществляя печать рекламной, сувенирной, 
          информационной и прочей продукции. Мы предоставляем полный спектр 
          услуг — от подготовки макета до печати. Это избавляет клиентов от 
          необходимости искать отдельных исполнителей для выполнения тех 
          или иных работ. У нас вы можете заказать все виды современной 
          полиграфии:'
				textItem1='&bull; блокноты и брошюры, буклеты и визитки'
				textItem2='&bull; плакаты, баннеры, постеры, листовки'
				textItem3='&bull; календари, ежедневники'
				textItem4='&bull; этикетки, упаковочные материалы, бланки'
				textItem5='&bull; приглашения, удостоверения, конверты, грамоты'
				paragraph3='При оказании полиграфических услуг мы применяем 
          профессиональную печатную технику, резаки, ламинаторы, сшиватели. 
          Заказы выполняют квалифицированные дизайнеры, печатники, технологи, 
          которые следят за производством.'
				imgWebDev='/images/printing-house-img-1.webp'
			/>
			<section className={styles.orderItem}>
				<h2 className={styles.orderItem__title}>Вы можете заказать</h2>
				<div className={styles.orderItem__container}>
					<Fade bottom>
						<OrderItem
							handleModal={handleModal}
							cardTitle='Все для офиса'
							cardImg='/images/printing-house-img-2.webp'
							cardItemText1='Визитки'
							cardItemText2='Бланки'
							cardItemText3='Конверты'
							cardItemText4='Печати'
							cardItemText5='Папки'
						/>
					</Fade>
					<Fade right>
						<OrderItem
							handleModal={handleModal}
							cardTitle='Сувенирная продукция'
							cardImg='/images/printing-house-img-3.webp'
							cardItemText1='Ручки'
							cardItemText2='Кружки'
							cardItemText3='Календари'
							cardItemText4='Одежда с лого'
							cardItemText5='Бизнес подарки'
						/>
					</Fade>
					<Fade top>
						<OrderItem
							handleModal={handleModal}
							cardTitle='Упаковка'
							cardImg='/images/printing-house-img-4.webp'
							cardItemText1='Наклейки'
							cardItemText2='Этикетки'
							cardItemText3='Коробки'
							cardItemText4='Пакеты'
							cardItemText5='и др.'
						/>
					</Fade>
				</div>
			</section>

			<section className={styles.addPortfolio}>
				<div className={styles.addPortfolio__container}>
					<h2
						className={classNames(
							styles.addPortfolio__title,
							styles.addPortfolio__title_color,
						)}>
						Портфолио
					</h2>
					<AdditionalMenu
						isNavActive={isNavActive}
						handleCardClick={handleCardClick}
					/>
					<div className={styles.addPortfolio__content}>
						{cards.length > 0 ? <Gallery initialCards={initialCards} /> : <></>}
						<Link href='/portfolio'>
							<a
								className={classNames(
									styles.addPortfolio__cardLink,
									styles.addPortfolio__cardLink_background,
								)}>
								Посмотреть все работы
							</a>
						</Link>
					</div>
				</div>
			</section>
			<Popup isOpenPopup={isOpenPopup} handleModal={handleModal}>
				<ApplicationForm />
			</Popup>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const cards = await portfoliocasesApi.show()
	return {
		props: { cards: cards.data.data },
	}
}

export default Printing
