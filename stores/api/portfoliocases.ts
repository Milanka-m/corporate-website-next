import { AxiosPromise } from "axios"
import { axios } from "../../core"

export default {
	show: (): AxiosPromise => 
		axios.get("api/portfoliocases?populate=images,navlink,detail,category,sociallink,portfoliolink"),
	
	showOne: (slug: string): AxiosPromise => 
		axios.get(`api/portfoliocases?filters[slug][$eq]=${slug}&populate=images,navlink,detail,category,sociallink,portfoliolink`)
}