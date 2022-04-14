import type { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import Layout from "../../layout/Layout"
import { WebsiteSlider } from "../../components"
import styles from "./index.module.scss"
import classNames from "classnames"
import { portfoliocasesApi } from "../../stores/api"
import { IPortfolioCase } from "../../types"
import { useRouter } from "next/router"

interface ICurrentProps {
	keyses: IPortfolioCase[]
	cards: IPortfolioCase[]
}

const KeysCurrent: NextPage<ICurrentProps> = ({ keyses, cards }) => {
	const loc = "portfolio"
	const router = useRouter()
	const keysesData = keyses[0]

	const NextSite: React.FC = () => {
		return (
			<>
				{cards &&
					cards.length > 0 &&
						cards.map((item, idx) => {
						if (
							item.attributes.portfoliolink.portfoliolink === `/portfolio/${router.query.link}` &&
							idx <= cards.length - 2
						) {
							return (
								<div className={styles.portfolioСase__navContainer} key={idx}>
									<p
										className={classNames(
											styles.portfolioСase__text,
											styles.portfolioСase__text_position_right,
										)}>
										Следующий
									</p>
									<Link href={cards[idx + 1].attributes.portfoliolink.portfoliolink!}>
										<a className={styles.portfolioСase__linkNav}>
											<p>{cards[idx + 1].attributes.title}</p>
											<div
												className={classNames(
													styles.portfolioСase__navImg,
													styles.portfolioСase__navImg_position,
												)}
												style={{
													backgroundImage: `url(http://admin.skillfond.com${cards[idx + 1].attributes.images.data[0].attributes.url})`,
												}}>
												<span></span>
											</div>
										</a>
									</Link>
								</div>
							)
						}
					})}
			</>
		)
	}
	const PrevSite: React.FC = () => {
		return (
			<>
				{cards &&
					cards.length > 0 &&
					cards.map((item, idx) => {
						if (
							item.attributes.portfoliolink.portfoliolink === `/portfolio/${router.query.link}` &&
							idx >= 1
						) {
							return (
								<div className={styles.portfolioСase__navContainer} key={idx}>
									<p
										className={classNames(
											styles.portfolioСase__text,
											styles.portfolioСase__text_position_left,
										)}>
										Предыдущий
									</p>
									<Link href={cards[idx - 1].attributes.portfoliolink.portfoliolink!}>
										<a className={styles.portfolioСase__linkNav}>
											<div
												className={styles.portfolioСase__navImg}
												style={{
													backgroundImage: `url(http://admin.skillfond.com${cards[idx - 1].attributes.images.data[0].attributes.url})`,
												}}>
												<span></span>
											</div>
											<p>{cards[idx - 1].attributes.title}</p>
										</a>
									</Link>
								</div>
							)
						}
					})}
			</>
		)
	}

	return (
		<Layout
			title={`${keysesData.attributes.title} — ООО Ваша компания`}
			desc={`${keysesData.attributes.title}`}
			ogTitle={`${keysesData.attributes.title} — ООО Ваша компания`}>
			<section className={styles.portfolioСase}>
				<div className={styles.portfolioСase__container}>
					{loc.length > 0 && loc === "portfolio" ? (
						<ul className={styles.portfolioСase__navList}>
							{keysesData.attributes.navlink &&
								keysesData.attributes.navlink.map((item: any, idx: any) => (
								<li key={idx}>
									<Link href={item.link}>
										<a className={styles.portfolioСase__navLink}>
											<span>
												<Image
													src='/images/label-icon.webp'
													alt='label-icon'
													width={18}
													height={18}
													objectFit='contain'
												/>
											</span>
											{keysesData.attributes.category.slice(1)!.map((i: any) => i.categorytitle)![idx]}
										</a>
									</Link>
								</li>
							))}
						</ul>
					) : (
						<></>
					)}
					
					<h1 className={styles.portfolioСase__title}>{keysesData.attributes.title}</h1>
					<WebsiteSlider 
						images={keysesData.attributes.images.data.map((item) => `http://admin.skillfond.com${item.attributes.url}`)} 
					/>

						<h2 className={styles.portfolioСase__subtitle}>
							{keysesData.attributes.case}
						</h2>
						<ul className={styles.portfolioСase__socialLinks}>
							<li>
								<a 
									href={keysesData.attributes.sociallink[0].sociallink}  
									className={styles.portfolioСase__socialLink} 
									target='_blank' rel='noopener noreferrer'>
										<Image 
											src='/images/vk.webp' 
											alt='vk-icon' 
											width={26} 
											height={26}
										/>
								</a>
							</li>
						</ul>
						<h5 className={styles.portfolioСase__heading}>
							{keysesData.attributes.detail.slice(0,1).map((item) => item.title)}
						</h5>
						<p className={styles.portfolioСase__text}>
							{keysesData.attributes.detail.slice(0,1).map((item) => item.desc)}
						</p>
						<h5 className={styles.portfolioСase__heading}>
							{keysesData.attributes.detail.slice(1,2).map((item) => item.title)}
						</h5>
						<p className={styles.portfolioСase__text}>
							{keysesData.attributes.detail.slice(1,2).map((item) => item.desc)}
						</p>
						<h5 className={styles.portfolioСase__heading}>
							{keysesData.attributes.detail.slice(2,3).map((item) => item.title)}
						</h5>
						<p className={styles.portfolioСase__text}>
							{keysesData.attributes.detail.slice(2,3).map((item) => item.desc)}
						</p>

					<nav className={styles.portfolioСase__nav}>
						<PrevSite />
						<NextSite />
					</nav>
				</div>
			</section>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const cards = await portfoliocasesApi.show()
	const { link } = params!
    const data = await portfoliocasesApi.showOne(String(link))

	return {
		props: { keyses: data.data.data, cards: cards.data.data },
	}
}

export default KeysCurrent