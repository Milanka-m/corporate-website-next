import React from "react"
import Fade from 'react-reveal/Fade'
import Image from "next/image"
import styles from "./Promotion.module.scss"

interface IPromotionProps {
  title?: string
  spanItem1?: string
  spanItem2?: string
  spanItem3?: string
  spanItem4?: string
  spanItem5?: string
  spanItem6?: string
  spanItem7?: string
  spanItem8?: string
  spanItem9?: string
  spanItem10?: string
  spanItem11?: string
  spanItem12?: string
  spanItem13?: string
  spanItem14?: string
  spanItem15?: string
  spanItem16?: string
  textItem1?: string
  textItem2?: string
  textItem3?: string
  textItem4?: string
  textItem5?: string
  textItem6?: string
  textItem7?: string
  textItem8?: string
  textItem9?: string
  textItem10?: string
  textItem11?: string
  textItem12?: string
  textItem13?: string
  textItem14?: string
  textItem15?: string
  textItem16?: string
  imgPromotion: string
}

const Promotion: React.FC<IPromotionProps> = ({
  title,
  spanItem1,
  spanItem2,
  spanItem3,
  spanItem4,
  spanItem5,
  spanItem6,
  spanItem7,
  spanItem8,
  spanItem9,
  spanItem10,
  spanItem11,
  spanItem12,
  spanItem13,
  spanItem14,
  spanItem15,
  spanItem16,
  textItem1,
  textItem2,
  textItem3,
  textItem4,
  textItem5,
  textItem6,
  textItem7,
  textItem8,
  textItem9,
  textItem10,
  textItem11,
  textItem12,
  textItem13,
  textItem14,
  textItem15,
  textItem16,
  imgPromotion
}) => {
	return (
      <section className={styles.promotion}>
        <div className={styles.promotion__container}>
          <Fade bottom>
            <div className={styles.promotion__content}>
              <h2 className={styles.promotion__title}>
                {title}
              </h2>
              <ul id={styles.promotion__lists}>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem1}</span>{textItem1}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem2}</span>{textItem2}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem3}</span>{textItem3}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem4}</span>{textItem4}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem5}</span>{textItem5}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem6}</span>{textItem6}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem7}</span>{textItem7}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem8}</span>{textItem8}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem9}</span>{textItem9}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem10}</span>{textItem10}
                  </p>
                </li>
                 <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem11}</span>{textItem11}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem12}</span>{textItem12}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem13}</span>{textItem13}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem14}</span>{textItem14}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem15}</span>{textItem15}
                  </p>
                </li>
                <li>
                  <p className={styles.promotion__item}>
                    <span>{spanItem16}</span>{textItem16}
                  </p>
                </li>
              </ul>
              
            </div>
          </Fade>
          <Fade top>
            <Image
              src={imgPromotion}
              alt='seo-promotion'
              width={630}
              height={630}
              objectFit='contain'
            />
          </Fade>
        </div>
      </section>
	)
}

export default Promotion