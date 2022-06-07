import React from "react"
import classNames from "classnames"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import styles from "./Count.module.scss"

interface ICountProps {
	className?: any
} 

const Count: React.FC<ICountProps> = ({ className }) => {
	return (
    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
      {({ isVisible }) => (
        <div style={{ height: 100 }}>
          {isVisible 
          ? 
          (
            <ul className={styles.count}>
              <li className={styles.count__item}>
                <div className={styles.count__number}>
                  <CountUp
                    className={classNames(className, "customerСounter")}
                    end={690}
                    duration={4}
                    redraw={true}
                  >
                  </CountUp>
                </div>
                <span className={styles.count__text}>
                  довольных клиентов
                </span>
              </li>
              <li className={styles.count__item}>
                <div className={styles.count__number}>
                  <CountUp
                    className={classNames(className, "projectsСounter")}
                    end={700}
                    suffix="+"
                    duration={4}
                    redraw={true}
                  >
                  </CountUp>
                  
                </div>
                <span className={styles.count__text}>
                  проектов закрыто
                </span>
              </li>
              <li className={styles.count__item}>
                <div className={styles.count__number}>
                  <CountUp
                    className={classNames(className, "currentProjectsСounter")}
                    end={15}
                    suffix="+"
                    duration={2}
                    redraw={true}
                  >
                  </CountUp>
                </div>
                <span className={styles.count__text}>
                  текущих проектов
                </span>
              </li>
            </ul>    
          )
          : null}
        </div>
      )}
    </VisibilitySensor>
	)
}

export default Count