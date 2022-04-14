import React from "react"
import styles from "./AdditionalMenu.module.scss"
import classNames from "classnames"

interface IAdditionalMenuProps {
  isNavActive?: string
  handleCardClick: (param:string) => void
}

const AdditionalMenu: React.FC<IAdditionalMenuProps> = ({
  isNavActive,
  handleCardClick
}) => {
  
	return (
		<nav className={styles.additionalMenu__nav}>
      <ul className={styles.additionalMenu__navLinks}>
        <li>
          <p 
            className={classNames(styles.additionalMenu__navLink,
              {[styles.additionalMenu__navLink_active]: isNavActive === 'all' })}
            onClick={() => handleCardClick('all')}
          >
            Все
          </p>
        </li>
        <li>
          <p 
            className={classNames(styles.additionalMenu__navLink, 
              {[styles.additionalMenu__navLink_active]: isNavActive === 'smm'})}
            onClick={() => handleCardClick('smm')}
          >
            SMM
          </p>
        </li>
        <li>
          <p 
            className={classNames(styles.additionalMenu__navLink, 
              {[styles.additionalMenu__navLink_active]: isNavActive === 'design'})}
              onClick={() => handleCardClick('design')}
          >
            Графический дизайн
          </p>
        </li>
        <li>
          <p 
            className={classNames(styles.additionalMenu__navLink, 
              {[styles.additionalMenu__navLink_active]: isNavActive === 'advertisement'})}
              onClick={() => handleCardClick('advertisement')}
          >
            Наружная реклама
          </p>
        </li>
        <li>
          <p 
            className={classNames(styles.additionalMenu__navLink, 
              {[styles.additionalMenu__navLink_active]: isNavActive === 'website'})}
            onClick={() => handleCardClick('website')}
          >
            Разработка сайта
          </p>
        </li>
      </ul>
    </nav>
	)
}

export default AdditionalMenu
