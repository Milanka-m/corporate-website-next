import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import styles from "../index.module.scss"
import { 
  ApplicationForm,
  Contacts
} from "../../components"

const OurContacts: NextPage = () => {
  return (
    <Layout 
      title='Наши контакты &nbsp;— ООО Ваша компания' 
      desc='Свяжитесь с нами, чтобы узнать, 
      как наша компания может помочь вам развивать свой бизнес.
      Офис: Kr. Barona 88, k - 2 -3 , Rīga, LV -1001.
      Телефон: +37120082527, email: dev@skillfond.ru.
      Поддержка: dev@skillfond.ru.'
      ogTitle='Наши контакты - ООО Ваша компания'>
        <section className={styles.contacts}>
          <div className={styles.contacts__content}>
            <div className={styles.cotacts__containerForm}>
              <ApplicationForm />
            </div>
            <Contacts />
          </div>
        </section>
    </Layout>
  )
}

export default OurContacts