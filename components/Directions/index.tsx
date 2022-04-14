import React from "react"
import Link from "next/link"
import Fade from 'react-reveal/Fade'
import styles from "./Directions.module.scss"

interface IDirectionsProps {
  title?: string
  spanItem1?: string
  spanItem2?: string
  spanItem3?: string
  spanItem4?: string
  spanItem5?: string
  spanItem6?: string
  spanItem7?: string
  spanItem8?: string
  textItem1?: string
  textItem2?: string
  textItem3?: string
  textItem4?: string
  textItem5?: string
  textItem6?: string
  textItem7?: string
  textItem8?: string
}

const Directions: React.FC<IDirectionsProps> = ({
  title,
  spanItem1,
  spanItem2,
  spanItem3,
  spanItem4,
  spanItem5,
  spanItem6,
  spanItem7,
  spanItem8,
  textItem1,
  textItem2,
  textItem3,
  textItem4,
  textItem5,
  textItem6,
  textItem7,
  textItem8
}) => {
	return (
    <section className={styles.directions}>
      <Fade bottom>
        <h2 className={styles.directions__title}>
          {title}
        </h2>
        <ul id={styles.directions__lists}>
          <li>
            <p className={styles.directions__item}>
              <Link href='/razrabotka-sajtov'>
                <a>{spanItem1}</a>
              </Link>
              {textItem1}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/seo-prodvizhenie'>
                <a>{spanItem2}</a>
              </Link>
              {textItem2}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/smm'>
                <a>{spanItem3}</a>
              </Link>
              {textItem3}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/mobilnye-prilozheniya'>
                <a>{spanItem4}</a>
              </Link>
              {textItem4}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/graficheskij-dizajn'>
                <a>{spanItem5}</a>
              </Link>
              {textItem5}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/naruzhnaya-reklama'>
                <a>{spanItem6}</a>
              </Link>
              {textItem6}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/tipografya'>
                <a>{spanItem7}</a>
              </Link>
              {textItem7}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/dopolnitelnye-uslugi'>
                <a>{spanItem8}</a>
              </Link>
              {textItem8}
            </p>
          </li>
        </ul>
      </Fade>
    </section>
	)
}

export default Directions