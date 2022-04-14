import React from "react"
import Image from "next/image"
import styles from "./Popup.module.scss"
import classNames from "classnames"

interface IPopupProps {
  isOpenPopup?: boolean
  handleModal: () => void
  children?: any
}

const Popup: React.FC<IPopupProps> = ({ 
  isOpenPopup,
  handleModal,
  children 
}) => {
	return (
	  <div className={classNames(styles.popup,
      {[styles.popup_opened]: isOpenPopup })}>
      <div className={styles.popup__container}>
        <button 
          className={styles.popup__close}
          onClick={handleModal}
          type="button" 
          aria-label="close popup">
            <Image
              src='/images/close-icon.png'
              alt='close-icon'
              width={24}
              height={24}
              objectFit='contain'
				  	/>
        </button>
        {children}
      </div>
    </div>
	)
}

export default Popup
