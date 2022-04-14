import React from "react"
import Fade from 'react-reveal/Fade';
import Image from "next/image"
import styles from "./OrderSmall.module.scss"
import classNames from "classnames"

interface IOrderSmallProps {
  title?: string
  cardTitle1?: string
  cardTitle2?: string
  cardTitle3?: string
  cardText1?: string
  cardText2?: string
  cardText3?: string
  cardItemText1?: string
  cardItemText2?: string
  cardItemText3?: string
  cardItemText4?: string
  cardItemText5?: string
  cardItemText6?: string
  cardItemText7?: string
  cardItemText8?: string
  cardItemText9?: string
  cardImg1: string
  cardImg2: string
  cardImg3: string
  handleModal: () => void
}

const OrderSmall: React.FC<IOrderSmallProps> = ({
  title,
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardText1,
  cardText2,
  cardText3,
  cardItemText1,
  cardItemText2,
  cardItemText3,
  cardItemText4,
  cardItemText5,
  cardItemText6,
  cardItemText7,
  cardItemText8,
  cardItemText9,
  cardImg1,
  cardImg2,
  cardImg3,
  handleModal
}) => {
	return (
		<section className={styles.orderSmall}>
      <h2 className={styles.orderSmall__title}>
        {title}
      </h2>
      <div className={styles.orderSmall__container}>
          <Fade bottom>
            <div className={styles.orderSmall__card}>
              <Image
                src={cardImg1}
                alt='card'
                width={509}
                height={361}
                objectFit='cover'
              />
              <article className={styles.orderSmall__cardHeading}>
                <h3 className={styles.orderSmall__cardTitle}>
                  {cardTitle1}
                </h3>
                <p className={styles.orderSmall__cardText}>
                  {cardText1}
                  <ul className={styles.orderSmall__cardList}>
                    <li>
                      <p className={classNames(styles.orderSmall__cardText, 
                        styles.orderSmall__cardText_align)}>
                        {cardItemText1}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.orderSmall__cardText, 
                        styles.orderSmall__cardText_align)}>
                        {cardItemText2}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.orderSmall__cardText, 
                        styles.orderSmall__cardText_align)}>
                        {cardItemText3}
                      </p>
                    </li>
                  </ul>
                </p>
              </article>
              <button 
                className={styles.orderSmall__cardBtn}
                onClick={handleModal}
              >
                Заказать
              </button>
            </div>
          </Fade>
          <Fade right>
            <div className={styles.orderSmall__card}>
              <Image
                 src={cardImg2}
                 alt='card'
                 width={509}
                 height={361}
                 objectFit='cover'
              />
              <article className={styles.orderSmall__cardHeading}>
                <h3 className={styles.orderSmall__cardTitle}>
                  {cardTitle2}
                </h3>
                <p className={styles.orderSmall__cardText}>
                  {cardText2}
                  <ul className={styles.orderSmall__cardList}>
                    <li>
                      <p className={classNames(styles.orderSmall__cardText, 
                        styles.orderSmall__cardText_align)}>
                        {cardItemText4}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.orderSmall__cardText, 
                        styles.orderSmall__cardText_align)}>
                        {cardItemText5}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.orderSmall__cardText, 
                        styles.orderSmall__cardText_align)}>
                        {cardItemText6}
                      </p>
                    </li>
                  </ul>
                </p>
              </article>
              <button 
                className={styles.orderSmall__cardBtn}
                onClick={handleModal}
              >
                Заказать
              </button> 
            </div>
          </Fade>
          <Fade top>
            <div className={styles.orderSmall__card}>
              <Image
                src={cardImg3}
                alt='card'
                width={509}
                height={361}
                objectFit='cover'
              />
              <article className={styles.orderSmall__cardHeading}>
                <h3 className={styles.orderSmall__cardTitle}>
                  {cardTitle3}
                </h3>
                <p className={styles.orderSmall__cardText}>
                  {cardText3}
                  <ul className={styles.orderSmall__cardList}>
                    <li>
                      <p className={classNames(styles.orderSmall__cardText, 
                        styles.orderSmall__cardText_align)}>
                        {cardItemText7}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.orderSmall__cardText, 
                        styles.orderSmall__cardText_align)}>
                        {cardItemText8}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.orderSmall__cardText, 
                        styles.orderSmall__cardText_align)}>
                        {cardItemText9}
                      </p>
                    </li>
                  </ul>
                </p>
              </article>
              <button 
                className={styles.orderSmall__cardBtn}
                onClick={handleModal}
              >
                Заказать
              </button>
            </div>
          </Fade>
      </div>
    </section>
	)
}

export default OrderSmall
