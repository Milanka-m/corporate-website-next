import type { GetServerSideProps, NextPage } from "next"
import React from "react"
import Link from "next/link"
import Layout from "../../layout/Layout"
import styles from "../index.module.scss"
import classNames from "classnames"
import {
	WebsiteDev,
	Products,
	AdditionalMenu,
	ApplicationForm,
	Gallery,
} from "../../components"
import { IPortfolioCase } from "../../types"
import { portfoliocasesApi } from "../../stores/api"

interface IGraphicProps {
	cards: IPortfolioCase[]
}

const GraphicDesign: NextPage<IGraphicProps> = ({ cards }) => {

	const [isNavActive, setIsNavActive] = React.useState<string>("design")
	const [initialCards, setInitialCards] = React.useState<IPortfolioCase[]>([])

	React.useEffect(() => {
		if (cards && cards.length > 0) {
			const cardsAllFilter = cards.filter((card) =>
				card.attributes.category!.some((i) => i.category === "design"),
			)
			setInitialCards(cardsAllFilter)
		}
	}, [cards])

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
			title='Графический дизайн &nbsp;— ООО Ваша компания'
			desc='Креативная команда ООО Ваша компания поможет 
      вам в развитии любого вашего бизнеса. 
      Мы сделаем ваш бренд, товар, магазин или другую организацию 
      максимально узнаваемой и стильной.'
			ogTitle='Графический дизайн - ООО Ваша компания'>
			<WebsiteDev
				title='Графический дизайн'
				subtitle='Мы создадим индивидуальный дизайн специально для вашей компании.'
				paragraph1='Креативная команда ООО Ваша компания поможет вам в развитии любого 
          вашего бизнеса. Мы сделаем ваш бренд, товар, магазин или другую организацию 
          максимально узнаваемой и стильной. Наши дизайнеры владеют множеством 
          методов для воплощения концепции вашего дела в визуальной форме с помощью 
          графических инструментов.'
				paragraph2='Мы понимаем, насколько важна зрительная составляющая в 
          развитии бизнеса – ваша продукция может быть нереально «вкусной» во 
          всех смыслах, качественной и удачной, но, если она обернута в 
          непривлекательную «упаковку», вряд ли ее будут так хорошо покупать. 
          И с другой стороны представим абстрактного конкурента, который двигает 
          мощную рекламу, а товары у него, мягко скажем, посредственные. 
          По закону первого впечатления, покупатель придет именно к нему, 
          потому что он сделал для этого больше.'
				imgWebDev='/images/graphic-design-scaled.webp'
			/>
			<Products />
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

export const getServerSideProps: GetServerSideProps = async () => {
	const cards = await portfoliocasesApi.show()
	return {
		props: { cards: cards.data.data },
	}
}

export default GraphicDesign
