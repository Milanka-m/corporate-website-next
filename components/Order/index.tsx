import React from "react"
import Fade from 'react-reveal/Fade';
import Image from "next/image"
import styles from "./Order.module.scss"
import classNames from "classnames"

interface IOrderProps {
  title?: string
  cardTitle1?: string
  cardTitle2?: string
  cardTitle3?: string
  cardTitle4?: string
  cardTitle5?: string
  cardTitle6?: string
  cardText1?: string
  cardText2?: string
  cardText3?: string
  cardText4?: string
  cardText5?: string
  cardText6?: string
  cardText7?: string
  cardText8?: string
  cardText9?: string
  cardItemText1?: string
  cardItemText2?: string
  cardItemText3?: string
  cardItemText4?: string
  cardItemText5?: string
  cardItemText6?: string
  cardItemText7?: string
  cardItemText8?: string
  cardItemText9?: string
  cardItemText10?: string
  cardImg1: string
  cardImg2: string
  cardImg3: string
  cardImg4: string
  cardImg5: string
  cardImg6: string
  handleModal: () => void
}

const Order: React.FC<IOrderProps> = ({
  title,
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardTitle4,
  cardTitle5,
  cardTitle6,
  cardText1,
  cardText2,
  cardText3,
  cardText4,
  cardText5,
  cardText6,
  cardText7,
  cardText8,
  cardText9,
  cardItemText1,
  cardItemText2,
  cardItemText3,
  cardItemText4,
  cardItemText5,
  cardItemText6,
  cardItemText7,
  cardItemText8,
  cardItemText9,
  cardItemText10,
  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,
  handleModal
}) => {
	return (
		<section className={styles.order}>
      <h2 className={styles.order__title}>
        {title}
      </h2>
      <div className={styles.order__container}>
          <Fade bottom>
            <div className={styles.order__card}>
              <Image
                src={cardImg1}
                alt='card'
                width={509}
                height={361}
                objectFit='cover'
              />
              <article className={styles.order__cardHeading}>
                <h3 className={styles.order__cardTitle}>
                  {cardTitle1}
                </h3>
                <p className={styles.order__cardText}>
                  {cardText1}
                  <ul className={styles.order__cardList}>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText1}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText2}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText3}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText4}
                      </p>
                    </li>
                  </ul>
                  {cardText2}
                </p>
              </article>
              <button 
                className={styles.order__cardBtn}
                onClick={handleModal}
              >
                Заказать
              </button>
            </div>
          </Fade>
          <Fade right>
            <div className={styles.order__card}>
              <Image
                 src={cardImg2}
                 alt='card'
                 width={509}
                 height={361}
                 objectFit='cover'
              />
              <article className={styles.order__cardHeading}>
                <h3 className={styles.order__cardTitle}>
                  {cardTitle2}
                </h3>
                <p className={styles.order__cardText}>
                  {cardText3}
                  <ul className={styles.order__cardList}>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText5}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText6}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText7}
                      </p>
                    </li>
                  </ul>
                  {cardText4}
                </p>
              </article>
              <button 
                className={styles.order__cardBtn}
                onClick={handleModal}
              >
                Заказать
              </button> 
            </div>
          </Fade>
          <Fade top>
            <div className={styles.order__card}>
              <Image
                src={cardImg3}
                alt='card'
                width={509}
                height={361}
                objectFit='cover'
              />
              <article className={styles.order__cardHeading}>
                <h3 className={styles.order__cardTitle}>
                  {cardTitle3}
                </h3>
                <p className={styles.order__cardText}>
                  {cardText5}
                  <ul className={styles.order__cardList}>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText8}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText9}
                      </p>
                    </li>
                    <li>
                      <p className={classNames(styles.order__cardText, 
                        styles.order__cardText_align)}>
                        {cardItemText10}
                      </p>
                    </li>
                  </ul>
                  {cardText6}
                </p>
              </article>
              <button 
                className={styles.order__cardBtn}
                onClick={handleModal}
              >
                Заказать
              </button>
            </div>
          </Fade>
          <Fade bottom>
            <div className={styles.order__card}>
              <Image
                src={cardImg4}
                alt='card'
                width={509}
                height={361}
                objectFit='cover'
              />
              <article className={styles.order__cardHeading}>
                <h3 className={styles.order__cardTitle}>
                  {cardTitle4}
                </h3>
                <p className={styles.order__cardText}>
                  {cardText7}
                </p>
              </article>
              <button 
                className={styles.order__cardBtn}
                onClick={handleModal}
              >
                Заказать
              </button>
            </div>
          </Fade>
          <Fade top>
            <div className={styles.order__card}>
              <Image
                 src={cardImg5}
                 alt='card'
                 width={509}
                 height={361}
                 objectFit='cover'
              />
              <article className={styles.order__cardHeading}>
                <h3 className={styles.order__cardTitle}>
                  {cardTitle5}
                </h3>
                <p className={styles.order__cardText}>
                  {cardText8}
                </p>
              </article>
              <button 
                className={styles.order__cardBtn}
                onClick={handleModal}
              >
                Заказать
              </button>
            </div>
          </Fade>
          <Fade top>
            <div className={styles.order__card}>
              <Image
                 src={cardImg6}
                 alt='card'
                 width={509}
                 height={361}
                 objectFit='cover'
              />
              <article className={styles.order__cardHeading}>
                <h3 className={styles.order__cardTitle}>
                  {cardTitle6}
                </h3>
                <p className={styles.order__cardText}>
                  {cardText9}
                </p>
              </article>
              <button 
                className={styles.order__cardBtn}
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

export default Order
