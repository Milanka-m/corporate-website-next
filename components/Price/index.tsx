import React from "react"
import Link from "next/link"
import Fade from 'react-reveal/Fade';
import Image from "next/image"
import styles from "./Price.module.scss"

interface IPriceProps {
  priceimg: string
  titleprice?: string
}

const Price: React.FC<IPriceProps> = ({
  priceimg,
  titleprice,
  children
}) => {
	return (
      <section className={styles.price}>
        <div className={styles.price__container}>
          <Fade top>
            <article className={styles.price__imageContainer}>
              <span className={styles.price__image}>
                <Image
                  src={priceimg}
                  alt='casual-colleagues'
                  width={663}
                  height={442}
                  objectFit='cover'
                />
              </span>
              <p className={styles.price__text}>
                *По дизайну (внешнему виду) мы можем предложить вам следующие варианты работы:
                <ul id={styles.price__textList}>
                  <li>
                    <p className={styles.price__text}>
                      В соответствии с задачей создаем уникальный вариант дизайна.
                    </p>
                  </li>
                  <li>
                    <p className={styles.price__text}>
                      Вы предоставляете свой дизайн.
                    </p>
                  </li>
                  <li>
                    <p className={styles.price__text}>
                      Работа наших дизайнеров, только дизайн сайта от 100 Eur
                    </p>
                  </li>
                </ul>
              </p>
            </article>
          </Fade>
          <Fade bottom>
            <div className={styles.price__content}>
              <h2 className={styles.price__title}>
                Что входит в стоимость <span>{titleprice}</span>
              </h2>
              <p className={styles.price__text}>
                Указана минимальная цена
              </p>
                {children}
              <Link href='/contact'>
                <a className={styles.price__cardLink}>
                  заказать
                </a>
              </Link>
            </div>
          </Fade>
        </div>
      </section>
	)
}

export default Price