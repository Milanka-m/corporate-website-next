import React from "react"
import Image from "next/image"
import styles from "./OrderItem.module.scss"

interface IOrderItemProps {
  cardTitle?: string
  cardItemText1?: string
  cardItemText2?: string
  cardItemText3?: string
  cardItemText4?: string
  cardItemText5?: string
  cardImg: string
  handleModal: () => void
}

const OrderItem: React.FC<IOrderItemProps> = ({
  cardTitle,
  cardItemText1,
  cardItemText2,
  cardItemText3,
  cardItemText4,
  cardItemText5,
  cardImg,
  handleModal
}) => {
	return (
    <div className={styles.orderItem__card}>
      <Image
        src={cardImg}
        alt='card'
        width={509}
        height={361}
        objectFit='cover'
      />
      <article className={styles.orderItem__cardHeading}>
        <h3 className={styles.orderItem__cardTitle}>
            {cardTitle}
        </h3>
        <ul className={styles.orderItem__cardList}>
          <li>
            <p className={styles.orderItem__cardText}>
              {cardItemText1}
            </p>
          </li>
          <li>
            <p className={styles.orderItem__cardText}>
              {cardItemText2}
            </p>
          </li>
          <li>
          <p className={styles.orderItem__cardText}>
              {cardItemText3}
            </p>
          </li>
          <li>
            <p className={styles.orderItem__cardText}>
              {cardItemText4}
            </p>
          </li>
          <li>
            <p className={styles.orderItem__cardText}>
              {cardItemText5}
            </p>
          </li>
        </ul>
      </article>
      <button 
        className={styles.orderItem__cardBtn}
        onClick={handleModal}
      >
        Заказать
      </button>
    </div>
	)
}

export default OrderItem
