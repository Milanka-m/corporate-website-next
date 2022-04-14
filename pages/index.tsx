import type { GetServerSideProps, NextPage } from "next"
import React from "react"
import Link from "next/link"
import Layout from "../layout/Layout"
import {
	BanerSlider,
	Cases,
	AboutUs,
	AdditionalMenu,
	Gallery,
	Strategy,
	PartnersSlider,
} from "../components"
import styles from "./index.module.scss"
import { IPortfolioCase } from "../types"
import { portfoliocasesApi } from "../stores/api"

interface IHomeProps {
	cards: IPortfolioCase[]
}

const Home: NextPage<IHomeProps> = ({ cards }) => {
	const [isNavActive, setIsNavActive] = React.useState<string>("all")
	const [initialCards, setInitialCards] = React.useState<IPortfolioCase[]>([])

	React.useEffect(() => {
		if (cards && cards.length > 0) {
			const cardsAllFilter = cards.filter((card) =>
				card.attributes.category!.some((i) => i.category === "all"),
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
			title='ООО Ваша компания &nbsp;— лучшая компания'
			desc='лучшая компания ООО Ваша компания успешно работает уже более 9 лет. 
      Мы специализируемся на разработке комплексных работ по созданию 
      уникального и узнаваемого образа компании. 
      Агентство ООО Ваша компания предлагает самые современные решения 
      маркетинга и веб-разработки.'
			ogTitle='ООО Ваша компания - лучшая компания'>
			<section className={styles.baner}>
				<BanerSlider />
			</section>
			<Cases />
			<AboutUs />
			<section className={styles.portfolio}>
				<div className={styles.portfolio__container}>
					<h2 className={styles.portfolio__title}>Портфолио</h2>
					<AdditionalMenu
						isNavActive={isNavActive}
						handleCardClick={handleCardClick}
					/>
					<div className={styles.portfolio__content}>
						{cards.length > 0 ? <Gallery initialCards={initialCards} /> : <></>}
						<Link href='/portfolio'>
							<a className={styles.portfolio__cardLink}>
								Посмотреть все работы
							</a>
						</Link>
					</div>
				</div>
			</section>
			<Strategy />
			<section className={styles.partners}>
				<div className={styles.partners__container}>
					<PartnersSlider />
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

export default Home
