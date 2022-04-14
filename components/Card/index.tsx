import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Card.module.scss"
import { IPortfolioCase } from "../../types"

interface ICardProps {
   card: any
   key: any
   attributes: any
}

type ICard = IPortfolioCase & ICardProps

const Card: React.FC<ICard> = ({
	card
}) => {
	const loc = "portfolio"
	return (
		<li>
			<Link href={card.attributes.portfoliolink.portfoliolink}>
				<a className={styles.card}>
					<div
						className={styles.card__image}
						style={{ backgroundImage: `url(http://admin.skillfond.com${card.attributes.images.data[0].attributes.url})` }}>
						{loc.length > 0 && loc === "portfolio" ? (
							<ul className={styles.card__links}>
								{card.attributes.navlink &&
									card.attributes.navlink.map((item: any, idx: any) => (
										<li key={idx}>
											<Link href={item.link}>
												<a className={styles.card__navLink}>
													<span>
														<Image
															src='/images/label-icon.webp'
															alt='label-icon'
															width={18}
															height={18}
															objectFit='contain'
														/>
													</span>
												
													{card.attributes.category.slice(1)!.map((i: any) => i.categorytitle)![idx]}
												</a>
											</Link>
										</li>
									))}
							</ul>
						) : (
							<></>
						)}
						<h3 className={styles.card__title}>{card.attributes.title}</h3>
					</div>
				</a>
			</Link>
		</li>
	)
}

export default Card
