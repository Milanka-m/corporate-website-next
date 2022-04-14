import React from "react"
import classNames from "classnames"
import CountUp from 'react-countup';
import styles from "./Count.module.scss"

interface ICountProps {
	className?: any
} 

const Count: React.FC<ICountProps> = ({ className }) => {
	return (
    <ul className={styles.count}>
      <li className={styles.count__item}>
        <div className={styles.count__number}>
          <CountUp
            className={classNames(className, "customerСounter")}
            start={0}
            end={6}
            duration={1.3}
          >
          </CountUp>
          <CountUp
            className={classNames(className, "customerСounter")}
            start={0}
            end={9}
            duration={1.3}
          >
          </CountUp>
          <CountUp
            className={classNames(className, "customerСounter")}
            start={9}
            end={0}
            duration={1.3}
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
            start={0}
            end={7}
            duration={1.3}
          >
          </CountUp>
          <CountUp
            className={classNames(className, "projectsСounter")}
            start={9}
            end={0}
            duration={1.3}
          >
          </CountUp>
          <CountUp
            className={classNames(className, "projectsСounter")}
            start={9}
            end={0}
            duration={1.3}
            suffix="+"
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
            start={0}
            end={1}
            duration={.4}
          >
          </CountUp>
          <CountUp
            className={classNames(className, "currentProjectsСounter")}
            start={0}
            end={5}
            suffix="+"
            duration={1.5}
          >
          </CountUp>
        </div>
        <span className={styles.count__text}>
          текущих проектов
        </span>
      </li>
    </ul>    
	)
}

export default Count