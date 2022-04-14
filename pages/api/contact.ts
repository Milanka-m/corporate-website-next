import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
type Data = {
	name: string
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
	const transporter = nodemailer.createTransport({
		port: 465 || 587,
		host: "smtp.yandex.ru",
		auth: {
			user: "dev@skillfond.ru",
			pass: "bxvnzaxbzmdkktbn",
		},
		secure: true,
	})
	const mailData = {
		from: "dev@skillfond.ru",
		to: "dev@skillfond.ru",
		subject: `Заявка с сайта от ${req.body.name}`,
		text: req.body.message + " | Sent from: " + req.body.email,
		html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
	}
	transporter.sendMail(mailData, (err: any, info: any) => {
		if (err) {
			console.log(err)
			return res.status(500).end()
		} else {
			return res.status(200).end()
		}
	})
	return res.status(200).end()
}
