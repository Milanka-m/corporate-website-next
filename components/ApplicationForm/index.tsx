import React from "react"
import classNames from "classnames"
import styles from "./ApplicationForm.module.scss"
import axios from "axios"

interface IContactForm {
	name?: string
	email?: string
	type?: string
	message?: string
}

const ApplicationForm: React.FC = () => {
	const [optionActive, setOptionActive] = React.useState<string>("")
	const [enable, setEnable] = React.useState<boolean>(true)
	const selectRef = React.useRef<HTMLInputElement>(null)
	const [formData, setFormData] = React.useState<IContactForm>({
		name: "",
		email: "",
		type: "Разработка сайта",
		message: "",
	})

	React.useEffect(() => {
		setOptionActive("Разработка сайта")
	}, [])

	const handleChange = (param: string): void => {
		setOptionActive(param)
		setFormData((pre) => ({ ...pre, type: param }))
		selectRef.current && selectRef.current.checked === false
			? (selectRef.current.checked = true)
			: (selectRef.current!.checked = false)
	}
	const handleChangeInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const field = e.target.id
		const val = e.target.value
		setFormData((pre) => ({ ...pre, [field]: val }))
	}
	const handleOpenContent = (): void => {
		selectRef.current && selectRef.current.checked === false
			? (selectRef.current.checked = true)
			: (selectRef.current!.checked = false)
	}
	const sendForm = async (e: any): Promise<void> => {
		e.preventDefault()
		setEnable(false)
		try {
			await axios.post("/api/contact", formData)
			alert("Сообщение отправлено! Скоро с Вами свяжется наш менеджер!")
			setFormData({
				name: "",
				email: "",
				type: "Разработка сайта",
				message: "",
			})
			setEnable(true)
		} catch (error) {
			throw new Error(`Ошибка отправки формы!!! Code: ${error}`)
		}
	}

	return (
		<form className={styles.form} name='application' onSubmit={sendForm}>
			<div className={styles.form__container}>
				<fieldset className={styles.form__inputContainer}>
					<section className={styles.form__section}>
						<input
							className={styles.form__input}
							type='text'
							name='name'
							id='name'
							placeholder='Имя*'
							minLength={2}
							maxLength={30}
							value={formData.name}
							onChange={handleChangeInput}
							required
						/>
					</section>

					<section className={styles.form__section}>
						<input
							className={styles.form__input}
							type='email'
							name='email'
							id='email'
							placeholder='Email*'
							value={formData.email}
							onChange={handleChangeInput}
							required
						/>
					</section>

					<section className={styles.form__section}>
						<div className={styles.form__select}>
							<div
								className={styles.form__selectTitle}
								onClick={handleOpenContent}>
								{optionActive}
							</div>
							<input
								ref={selectRef}
								id={styles.form__selectId}
								type='checkbox'
							/>
							<label
								className={styles.form__selectBtn}
								htmlFor={styles.form__selectId}></label>
							<div className={styles.form__selectContent}>
								<input
									id={styles.websiteDevelopment}
									className={styles.form__selectInput}
									type='radio'
									name='websiteSelect'
									value='Разработка сайта'
								/>
								<label
									onClick={() => handleChange("Разработка сайта")}
									htmlFor='websiteDevelopment'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Разработка сайта",
									})}>
									Разработка сайта
								</label>
								<input
									id={styles.websitePromotion}
									className={styles.form__selectInput}
									type='radio'
									name='websiteSelect'
									value='Продвижение сайта'
								/>
								<label
									onClick={() => handleChange("Продвижение сайта")}
									htmlFor='websitePromotion'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Продвижение сайта",
									})}>
									Продвижение сайта
								</label>
								<input
									id={styles.smmPromotion}
									className={styles.form__selectInput}
									type='radio'
									name='websiteSelect'
									value='SMM продвижение'
								/>
								<label
									onClick={() => handleChange("SMM продвижение")}
									htmlFor='smmPromotion'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "SMM продвижение",
									})}>
									SMM продвижение
								</label>
								<input
									id={styles.mobileApps}
									className={styles.form__selectInput}
									type='radio'
									name='websiteSelect'
									value='Мобильные приложения'
								/>
								<label
									onClick={() => handleChange("Мобильные приложения")}
									htmlFor='mobileApps'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Мобильные приложения",
									})}>
									Мобильные приложения
								</label>
								<input
									id={styles.graphicDesign}
									className={styles.form__selectInput}
									type='radio'
									name='websiteSelect'
									value='Графический дизайн'
								/>
								<label
									onClick={() => handleChange("Графический дизайн")}
									htmlFor='graphicDesign'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Графический дизайн",
									})}>
									Графический дизайн
								</label>
								<input
									id={styles.outdoorAdvertising}
									className={styles.form__selectInput}
									type='radio'
									name='websiteSelect'
									value='Наружная реклама'
								/>
								<label
									onClick={() => handleChange("Наружная реклама")}
									htmlFor='outdoorAdvertising'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Наружная реклама",
									})}>
									Наружная реклама
								</label>
								<input
									id={styles.printingHouse}
									className={styles.form__selectInput}
									type='radio'
									name='websiteSelect'
									value='Типография'
								/>
								<label
									onClick={() => handleChange("Типография")}
									htmlFor='printingHouse'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Типография",
									})}>
									Типография
								</label>
								<input
									id={styles.additionalServices}
									className={styles.form__selectInput}
									type='radio'
									name='websiteSelect'
									value='Дополнительные услуги'
								/>
								<label
									onClick={() => handleChange("Дополнительные услуги")}
									htmlFor='additionalServices'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Дополнительные услуги",
									})}>
									Дополнительные услуги
								</label>
							</div>
						</div>
					</section>

					<section className={styles.form__section}>
						<input
							className={classNames(
								styles.form__input,
								styles.form__input_size,
							)}
							type='text'
							name='message'
							id='message'
							placeholder='Ваше сообщение*'
							value={formData.message}
							onChange={handleChangeInput}
							minLength={2}
							maxLength={200}
							required
						/>
					</section>
				</fieldset>
			</div>
			<fieldset className={styles.form__handlers}>
				<button
					className={styles.form__button}
					type='submit'
					disabled={enable === false}>
					Отправить
				</button>
			</fieldset>
		</form>
	)
}

export default ApplicationForm
