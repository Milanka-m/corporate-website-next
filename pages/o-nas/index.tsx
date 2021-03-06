import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import { 
  WebsiteDev,
  ApplicationForm,
  Directions
} from "../../components"
import styles from "./index.module.scss"

const About: NextPage = () => {
  return (
    <Layout 
      title='О нас &nbsp;— ООО Ваша компания' 
      desc='Наша лучшая компания ООО Ваша компания успешно работает уже более 8 лет. 
      За это время мы накопили огромный багаж опыта и знаний, 
      создали сотни сайтов и рекламных страниц, разработали несколько 
      десятков уникальных дизайнерских образов, чтобы бренды наших клиентов 
      стали максимально узнаваемыми среди конкурентов.'
      ogTitle='О нас - ООО Ваша компания'>
        <WebsiteDev 
          title='О нас'
          subtitle='Что делает компанию великой? Это просто. 
          Люди, которые здесь работают.'
          paragraph1='Наша лучшая компания ООО Ваша компания успешно работает 
          уже более 8 лет. За это время мы накопили огромный багаж опыта и знаний, 
          создали сотни сайтов и рекламных страниц, разработали несколько десятков 
          уникальных дизайнерских образов, чтобы бренды наших клиентов стали 
          максимально узнаваемыми среди конкурентов.
          Ведь для того, чтобы покупатель обратил внимание на вашу продукцию, 
          вы должны быть лучшими во всем – и в качестве товара, и в его эффектной 
          презентации.'
          paragraph2='Благодаря креативному подходу, мы сможем найти оптимальное решение, 
          которое идеально подойдет именно вам.
          Эффективность нашей работы заключается в использовании современных 
          маркетинговых методов, которые позволяют создать целенаправленную 
          и цепляющую рекламу вашей компании, расширить круг потребителей, 
          найти партнеров и решить другие проблемы развития бизнеса.'
          imgWebDev='/images/img-about-us-2.webp'
        >
          <Directions
            title='Мы работаем в таких направлениях:'
            spanItem1='Разработка сайтов '
            spanItem2='SEO продвижение '
            spanItem3='Маркетинг в соц. сетях '
            spanItem4='Мобильные приложения '
            spanItem5='Графический дизайн '
            spanItem6='Наружная реклама '
            spanItem7='Типография '
            spanItem8='Дополнительные услуги '
            textItem1='– Создание качественных сайтов и интернет –магазинов любой сложности 
            с уникальным дизайном и функционалом. Адаптивность под все устройства. 
            Вы получите индивидуальный дизайн, доменное имя, хостинг.'
            textItem2='– Вам нужны позиции или продажи? Уникальная технология позволит 
            привлечь целевых посетителей и эффективно преобразовать их в клиентов. 
            В нашей SEO-мастерской используются только действенные инструменты интернет-маркетинга.'
            textItem3='– Продвижение товаров и брендов в самых популярных социальных сетях. 
            Услуга по разработке и реализации стратегий SMM продвижения. Раскрутка бренда, 
            продукта и бизнеса.'
            textItem4='– Это инвестиции с расчетом на будущую прибыль. Грамотно спроектированный 
            продукт позволит сформировать аудиторию и увеличить продажи.'
            textItem5='– Услуги по созданию визуального брэндинга. Дизайн листовок, буклетов, 
            брошюр, визиток, логотипов, фирменного стиля. Мы реализуем сложные и интересные задачи.'
            textItem6='– предоставляем полный комплекс услуг наружной и внутренней рекламы от 
            разработки дизайн-макета до монтажа готовых изделий. Мы делаем рекламу, которая работает.'
            textItem7='– Предоставляем качественные услуги типографии по печати и после печатной 
            обработке. Мы используем лучшую бумагу и краски, ведь только качественная полиграфия 
            способная разрекламировать ваши услуги или продукцию.'
            textItem8='– Мы ценим наших клиентов, поэтому берём на себя техническую и информационную поддержку проектов.'
          />
        </WebsiteDev>
        <section className={styles.application}>
          <div className={styles.application__container}>
            <div className={styles.application__heading}>
              <h2 className={styles.application__title}>
                Свяжитесь с нами!
              </h2>  
              <p className={styles.application__subtitle}>
                Напишите нам и мы обсудим предстоящий проект!
                Специальное предложение: Бесплатный экспресс-аудит.
              </p>
            </div>
            <ApplicationForm />
          </div>
        </section>
    </Layout>
  )
}

export default About