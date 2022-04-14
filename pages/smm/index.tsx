import type { GetServerSideProps, NextPage } from "next"
import React from "react"
import Link from "next/link"
import Layout from "../../layout/Layout"
import styles from "../index.module.scss"
import classNames from "classnames"
import {
	WebsiteDev,
	Advantage,
	AdditionalMenu,
	Cost,
	Popup,
	ApplicationForm,
	Gallery,
} from "../../components"
import { IPortfolioCase } from "../../types"
import { portfoliocasesApi } from "../../stores/api"

interface ISmmProps {
	cards: IPortfolioCase[]
}

const SmmPromotion: NextPage<ISmmProps> = ({ cards }) => {
	const [isNavActive, setIsNavActive] = React.useState<string>("smm")
	const [initialCards, setInitialCards] = React.useState<IPortfolioCase[]>([])
	const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (cards && cards.length > 0) {
			const cardsAllFilter = cards.filter((card) =>
				card.attributes.category!.some((i) => i.category === "smm"),
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
			title='SMM-продвижение в соц. сетях &nbsp;— ООО Ваша компания'
			desc='Привлечение внимания к бренду и продвижение.
      Вовлечение большой ЦА с помощью розыгрышей и конкурсов.
      Формирование положительного образа компании.
      Налаживание быстрой и качественной связи с клиентами.
      Увеличение дохода и сокращение расхода.
      Увеличение числа потенциальных клиентов и посетителей на сайт.'
			ogTitle='SMM-продвижение в соц. сетях - ООО Ваша компания'>
			<WebsiteDev
				title='SMM'
				subtitle='Создание, оформление, ведение, раскрутка.'
				paragraph1='лучшая компания ООО Ваша компания 
          международного формата. Наши специалисты с солидным 
          опытом работы создадут «вкусный», интересный контент, 
          который вызовет любовь и дикий интерес у потенциальных 
          клиентов. Наша главная цель – превратить паблик в 
          сильный маркетинговый и коммерческий инструмент.'
				textItem1='&bull; Привлечение внимания к бренду и продвижение'
				textItem2='&bull; Вовлечение большой ЦА с помощью розыгрышей и конкурсов'
				textItem3='&bull; Формирование положительного образа компании'
				textItem4='&bull; Налаживание быстрой и качественной связи с клиентами'
				textItem5='&bull; Увеличение дохода и сокращение расхода'
				textItem6='&bull; Увеличение числа потенциальных клиентов и посетителей на сайт'
				imgWebDev='/images/smm-img-1.webp'
			/>
			<Advantage
				heading='Почему стоит использовать SMM'
				cardtitle1='Отсутствие прямого 
          рекламного эффекта'
				cardtitle2='Настройка таргетинга'
				cardtitle3='Прозрачность'
				cardtitle4='Большой охват аудитории'
				cardtitle5='Удобство'
				cardtitle6='Эффект вирусного маркетинга'
				cardtitle7='Разные виды контента'
				cardtext1='Посты в социальных сетях, 
          обычно воспринимаются людьми как интересное 
          развлечение и не вызывают существенный негатив'
				cardtext2='Настройки осуществляются исходя из 
          возраста, интересов ЦА, географических и 
          социально - демографических характеристик'
				cardtext3='С помощью социальных сетей можно 
          отслеживать, что пишут клиенты, выявить их 
          интересы, вкусы и потребности'
				cardtext4='По статистике Marketing Sherpa 95% 
          пользователей интернета в мире зарегистрированы 
          в социальных сетях'
				cardtext5='Компании общаются с людьми на комфортной 
          для них площадке, тем самым привлекая новых клиентов 
          и поддерживая связь со старыми'
				cardtext6='Заинтересовав хотя бы одного человека, 
          ваш интернет-магазин, компания либо вебсайт могут 
          быстро обрести популярность'
				cardtext7='По средствам видео (развлечения, обучения), 
          аудио, изображения (иллюстрирования товаров или услуг), 
          информация'
				iconcard1='/images/smm-icon-1.webp'
				iconcard2='/images/smm-icon-2.webp'
				iconcard3='/images/smm-icon-3.webp'
				iconcard4='/images/smm-icon-4.webp'
				iconcard5='/images/smm-icon-5.webp'
				iconcard6='/images/smm-icon-6.webp'
				iconcard7='/images/smm-icon-7.webp'
			/>
			<Cost handleModal={handleModal} />
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

export default SmmPromotion
