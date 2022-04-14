import React from "react"
import styles from "./Questions.module.scss"

const Questions: React.FC = () => {
	return (
      <section className={styles.questions}>
        <div className={styles.questions__container}>
          <h1 className={styles.questions__title}>
            Часто задаваемые вопросы
          </h1>
          <p className={styles.questions__subtitle}>
            По всем вопросам, ответы на которые вы не смогли найти, обращайтесь в разделе контакты или звоните.
          </p>
          <ul className={styles.questions__list}>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Чем Вы отличаетесь от других специалистов и студий?
                </p>
              </div>
              <input id={styles.questions__itemSelectId1} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId1}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Отличаемся мы от других студий и компаний следующими преимуществами:
                </p>
                <ul id={styles.questions__itemSelectList}>
                  <li>
                    <p className={styles.questions__itemSelectListText}>
                      100% качество выполнения;
                    </p>
                  </li>
                  <li>
                    <p className={styles.questions__itemSelectListText}>
                      Приемлемые цены;
                    </p>
                  </li>
                  <li>
                    <p className={styles.questions__itemSelectListText}>
                      Быстрые сроки выполнения;
                    </p>
                  </li>
                  <li>
                    <p className={styles.questions__itemSelectListText}>
                      Гарантии, которые прикрепляются планами и договором, 
                      в котором прописываются все нюансы.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Где гарантия? А вдруг я оплачу счет, а Вы пропадете?
                </p>
              </div>
              <input id={styles.questions__itemSelectId2} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId2}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Этот момент полностью исключен. Мы зарегистрированное 
                  агентство в коммерческом реестре, являемся членом Латвийской 
                  торгово-промышленной палаты (ЛТПП). Работаем уже более 8 лет 
                  и у нас большая клиентская база, а также достаточно много 
                  постоянных клиентов. Более того, оплата проводится исключительно 
                  на проверенные и подтвержденные счета платежных систем. 
                  На странице Вы можете просмотреть портфолио проектов.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Вы работаете по предоплате?
                </p>
              </div>
              <input id={styles.questions__itemSelectId3} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId3}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Да, все работы исключительно проводятся по предоплате 
                  размером 50% или 100%, а также по индивидуальным 
                  договоренностям с каждым клиентом (сумма предоплаты 
                  обсуждается индивидуально с каждым клиентом).
                </p>
              </div>
            </li>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Если я постоянный клиент, Вы даете скидки?
                </p>
              </div>
              <input id={styles.questions__itemSelectId4} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId4}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Да, постоянным клиентам сумма скидки доходит более 
                  чем до -50%, а также некоторые услуги предоставляются 
                  совершенно бесплатно в качестве бонуса и дополнения услуг.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Какой порядок работ по разработке сайта?
                </p>
              </div>
              <input id={styles.questions__itemSelectId5} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId5}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Какой порядок работ по разработке сайта?
                  Обычно порядок работ следующий: 
                </p>
                <ul id={styles.questions__itemSelectList}>
                  <li>
                    <p className={styles.questions__itemSelectListText}>
                      Вначале Вы выбираете подходящий тариф сайта самостоятельно 
                      или с помощью контактного лица и отправляете заявку 
                      на разработку или обращением через контакты;
                    </p>
                  </li>
                  <li>
                    <p className={styles.questions__itemSelectListText}>
                      Мы с Вами связываемся и обсуждаем все вопросы. 
                      Вы заполняете Бриф (техническую анкету) на услуги; 
                    </p>
                  </li>
                  <li>
                    <p className={styles.questions__itemSelectListText}>
                      Далее отправляем Вам составленный договор по 
                      E-mail или WhatsApp, счет и реквизиты для оплаты; 
                    </p>
                  </li>
                  <li>
                    <p className={styles.questions__itemSelectListText}>
                      После поступления от Вас предоплаты, мы приступаем 
                      к работе, согласно договора;
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Какие сроки Вы даете на разработку сайтов?
                </p>
              </div>
              <input id={styles.questions__itemSelectId6} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId6}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Сроки разработки зависят от тарифного плана и 
                  самого сайта. Разработка сайта визитки: 7-12 
                  дней, разработка сайта бизнес: 12-14 дней, 
                  разработки интернет-магазина: 18-20 дней под ключ.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Как происходят отчёты?
                </p>
              </div>
              <input id={styles.questions__itemSelectId7} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId7}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Отчётность обрабатывается еженедельно, а также 
                  по первому запросу клиента о предоставлении 
                  отчета проделанной работы и достигнутых результатах.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Какие работы проводятся на сайте?
                </p>
              </div>
              <input id={styles.questions__itemSelectId8} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId8}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Для продвижения сайта проводится полный комплекс 
                  необходимых действий, начиная от технической и 
                  текстовой оптимизации страниц, наполнением уникальными 
                  SEO-текстами, и непосредственно, до работы над 
                  ссылочной массой, трафиковым наращиванием показателей 
                  и самих позиций сайта. Более детальная информация 
                  будет доступна для ознакомления в коммерческом 
                  предложении и договоре.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Смогу ли я в дальнейшем управлять редактировать сайт самостоятельно?
                </p>
              </div>
              <input id={styles.questions__itemSelectId9} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId9}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Да, конечно, Вам будет предоставлен доступ к системе 
                  управления сайтом CMS, интерфейс которого достаточно 
                  понятен и доступен, не требующий специфических знаний 
                  для процедуры редактирования.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.questions__item}>
                <p className={styles.questions__itemSelect}>
                  Каким образом можно заказать услуги продвижения?
                </p>
              </div>
              <input id={styles.questions__itemSelectId10} type='checkbox' />
              <label 
                className={styles.questions__itemSelectLabel}
                htmlFor={styles.questions__itemSelectId10}>
                  <div className={styles.questions__itemSelectBtn}>
                  </div>
              </label>
              <div className={styles.questions__itemSelectContainer}>
                <p className={styles.questions__itemText}>
                  Заказать услуги продвижения Вашего сайта Вы 
                  сможете на странице заполнив Online-заявку, 
                  а так же через WhatsApp или обратившись напрямую 
                  по контактам указанным на странице.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
	)
}

export default Questions