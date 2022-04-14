import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import { Services, OurContacts } from "../../components"


const Uslugi: NextPage = () => {
  return (
    <Layout 
      title='Услуги &nbsp;— ООО Ваша компания' 
      desc='Разработка сайтов.SEO продвижение. Маркетинг в
      соц. сетях. Мобильные приложения. Графический дизайн.
      Наружная реклама. Типография. Дополнительные
      услуги.' 
      ogTitle='Услуги - ООО Ваша компания'>
        <Services />
        <OurContacts />
    </Layout>
  )
}

export default Uslugi