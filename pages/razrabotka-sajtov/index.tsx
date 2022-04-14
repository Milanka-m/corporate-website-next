import type { GetServerSideProps, NextPage } from "next"
import React from "react"
import Link from "next/link"
import Layout from "../../layout/Layout"
import styles from "../index.module.scss"
import {
	WebsiteDev,
	MyWebsite,
	Вonuses,
	AdditionalServices,
	AdditionalMenu,
	Gallery,
	ApplicationForm,
} from "../../components"

import { IPortfolioCase } from "../../types"
import { portfoliocasesApi } from "../../stores/api"

interface IWebsiteDevProps {
	cards: IPortfolioCase[]
}

const WebsiteDevelopment: NextPage<IWebsiteDevProps> = ({ cards }) => {

	const [isNavActive, setIsNavActive] = React.useState<string>("website")
	const [initialCards, setInitialCards] = React.useState<IPortfolioCase[]>([])

	React.useEffect(() => {
		if (cards && cards.length > 0) {
			const cardsWebsiteFilter = cards.filter((card) =>
				card.attributes.category!.some((i) => i.category === "website"),
			)
			setInitialCards(cardsWebsiteFilter)
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
			title='Разработка и поддержка сайтов &nbsp;— ООО Ваша компания'
			desc='К вашим услугам – лендинг, корпоративные сайты компаний, интернет-магазины, онлайн-обучение. 
      Мы сделаем привлекательное «лицо» вашей компании, замотивируем клиента присоединиться к вам, 
      купить товар или подписаться на рассылку ваших новостей. Разработаем удобный функционал интернет-магазина, 
      чтобы покупателям хотелось приобретать вашу продукцию и рекомендовать ваш ресурс друзьям и знакомым.'
			ogTitle='Разработка и поддержка сайтов - ООО Ваша компания'>
			<WebsiteDev
				title='Дизайн и разработка сайтов.'
				subtitle='Контракт, гарантия, качество.'
				paragraph1='Специалисты лучшей компании ООО Ваша компания в 
          совершенстве владеют искусством создания продающих 
          сайтов – у нас есть большой опыт в разработке сайтов 
          разных направленности. Наши проекты являются мощнейшими 
          маркетинговыми инструментами для формирования имиджа 
          компании и дальнейшего успешного развития бизнеса. 
          В зависимости от требований заказчика, мы создадим 
          сайт любой сложности.'
				paragraph2='К вашим услугам – лендинг, корпоративные сайты компаний, 
          интернет-магазины, онлайн-обучение. Мы сделаем привлекательное 
          «лицо» вашей компании, замотивируем клиента присоединиться 
          к вам, купить товар или подписаться на рассылку ваших новостей. 
          Разработаем удобный функционал интернет-магазина, чтобы 
          покупателям хотелось приобретать вашу продукцию и рекомендовать 
          ваш ресурс друзьям и знакомым.'
				imgWebDev='/images/website-min-scaled.webp'
			/>
			<MyWebsite />
			<Вonuses />
			<AdditionalServices />
			<section className={styles.addPortfolio}>
				<div className={styles.addPortfolio__container}>
					<h2 className={styles.addPortfolio__title}>Портфолио</h2>
					<AdditionalMenu
						isNavActive={isNavActive}
						handleCardClick={handleCardClick}
					/>
					<div className={styles.addPortfolio__content}>
						{cards.length > 0 ? <Gallery initialCards={initialCards} /> : <></>}
						<Link href='/portfolio'>
							<a className={styles.addPortfolio__cardLink}>
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

export default WebsiteDevelopment
