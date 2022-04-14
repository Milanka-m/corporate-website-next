import React from "react"
import Fade from 'react-reveal/Fade'
import Image from "next/image"
import styles from "./Advantage.module.scss"

interface IAdvantageProps {
  heading?: string
  cardtitle1?: string
  cardtitle2?: string
  cardtitle3?: string
  cardtitle4?: string
  cardtitle5?: string
  cardtitle6?: string
  cardtitle7?: string
  cardtext1?: string
  cardtext2?: string
  cardtext3?: string
  cardtext4?: string
  cardtext5?: string
  cardtext6?: string
  cardtext7?: string
  iconcard1: string
  iconcard2: string
  iconcard3: string
  iconcard4: string
  iconcard5: string
  iconcard6: string
  iconcard7: string
}

const Advantage: React.FC<IAdvantageProps> = ({
  heading,
  cardtitle1,
  cardtitle2,
  cardtitle3,
  cardtitle4,
  cardtitle5,
  cardtitle6,
  cardtitle7,
  cardtext1,
  cardtext2,
  cardtext3,
  cardtext4,
  cardtext5,
  cardtext6,
  cardtext7,
  iconcard1,
  iconcard2,
  iconcard3,
  iconcard4,
  iconcard5,
  iconcard6,
  iconcard7
}) => {
	return (
      <section className={styles.advantage}>
        <div className={styles.advantage__containerCards}>
          <h2 className={styles.advantage__title}>
            <span>
              {heading}
            </span>
          </h2>
          <ul className={styles.advantage__cards}>
            <Fade bottom>  
              <li>
                <div className={styles.advantage__card}>
                  <span className={styles.advantage__cardImage}>
                    <Image
                      src={iconcard1}
                      alt='website-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span> 
                  <h3 className={styles.advantage__cardTitle}>
                    {cardtitle1}
                  </h3>    
                  <p className={styles.advantage__cardText}>
                    {cardtext1}
                  </p>
                </div>
              </li>
            </Fade>
            <Fade top>
              <li>
                <div className={styles.advantage__card}>
                  <span className={styles.advantage__cardImage}>
                    <Image
                      src={iconcard2}
                      alt='speaker-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span> 
                  <h3 className={styles.advantage__cardTitle}>
                    {cardtitle2}
                  </h3>   
                  <p className={styles.advantage__cardText}>
                    {cardtext2}
                  </p>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className={styles.advantage__card}>
                  <span className={styles.advantage__cardImage}>
                    <Image
                      src={iconcard3}
                      alt='printing-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span> 
                  <h3 className={styles.advantage__cardTitle}>
                    {cardtitle3}
                  </h3>  
                  <p className={styles.advantage__cardText}>
                    {cardtext3}
                  </p>
                </div>
              </li>
            </Fade>
            <Fade top>
              <li>
                <div className={styles.advantage__card}>
                  <span className={styles.advantage__cardImage}>
                    <Image
                      src={iconcard4}
                      alt='seo-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span> 
                  <h3 className={styles.advantage__cardTitle}>
                    {cardtitle4}
                  </h3>  
                  <p className={styles.advantage__cardText}>
                   {cardtext4}
                  </p>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className={styles.advantage__card}>
                  <span className={styles.advantage__cardImage}>
                    <Image
                      src={iconcard5}
                      alt='printing-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span> 
                  <h3 className={styles.advantage__cardTitle}>
                    {cardtitle5}
                  </h3>  
                  <p className={styles.advantage__cardText}>
                    {cardtext5}
                  </p>
                </div>
              </li>
            </Fade>
            <Fade top>
              <li>
                <div className={styles.advantage__card}>
                  <span className={styles.advantage__cardImage}>
                    <Image
                      src={iconcard6}
                      alt='seo-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span> 
                  <h3 className={styles.advantage__cardTitle}>
                    {cardtitle6}
                  </h3>  
                  <p className={styles.advantage__cardText}>
                   {cardtext6}
                  </p>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className={styles.advantage__card}>
                  <span className={styles.advantage__cardImage}>
                    <Image
                      src={iconcard7}
                      alt='printing-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span> 
                  <h3 className={styles.advantage__cardTitle}>
                    {cardtitle7}
                  </h3>  
                  <p className={styles.advantage__cardText}>
                    {cardtext7}
                  </p>
                </div>
              </li>
            </Fade>
          </ul>
        </div>
      </section>
	)
}

export default Advantage