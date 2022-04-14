import React from "react"
import { IPortfolioCase } from "../../types"
import Card from "../Card/index"
import styles from "./Gallery.module.scss"

interface IGalleryProps {
	initialCards?: IPortfolioCase[]
}

const Gallery: React.FC<IGalleryProps> = ({ initialCards }) => {
	return (
		<ul className={styles.gallery}>
			{initialCards &&
				initialCards!.map((card) => {
					return (
						<Card
							key={card.id}
							card={card}
							attributes={card.attributes}
						/>
					)
				})}
		</ul>
	)
}

export default Gallery
