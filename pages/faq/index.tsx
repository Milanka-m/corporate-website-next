import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import { 
  Questions
} from "../../components"

const СomplementaryServices: NextPage = () => {
  return (
    <Layout 
      title='Вопросы и ответы &nbsp;— ООО Ваша компания' 
      desc='Часто задаваемые вопросы. 
      По всем вопросам, ответы на которые вы не смогли найти, 
      обращайтесь в разделе контакты или звоните.'
      ogTitle='Вопросы и ответы - ООО Ваша компания'>
        <Questions />
    </Layout>
  )
}

export default СomplementaryServices