export interface ICards {
	id?: string
	title?: string
	images?: string[]
	imgnavlink?: string[]
	navlink?: string[]
	category?: string[]
	portfoliolink: string
	categorytitle?: string[]
	text?: string
}
export interface IBlogs {
	id?: string
	title?: string
	image?: string
	category?: string
	portfoliolink: string
}

export interface IPortfolioCase {
	id?: number
    attributes: {
      title?: string
      updatedAt?: string
      createdAt?: string
      publishedAt?: string
	  locale?: string
	  case?: string
	  slug?: string
	  images: {
		  data: [{
			  id?: number
			  attributes: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats: {
						thumbnail: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
						large: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
						medium: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
						small: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
					}
					hash?: string
					ext?: string
					mime?: string
					size?: number
					url?: string
					previewUrl?: null
					provider?: string
					provider_metadata?: null
					createdAt?: string
					updatedAt?: string
			  }
		  }]
	  }
	  navlink: [{
		  id?: number
		  link?: string
	  }]
	  detail: [{
		id?: number
		__component?: string
		title?: string
		desc?: string
	  }]
	  category: [{
		id?: number
		category?: string
		categorytitle?: string
	  }]
	  sociallink: [{
		  id?: number
		  socialname?: string
		  sociallink?: string
	  }]
	  portfoliolink: {
		  id?: number
		  portfoliolink?: string
	  }
    }
}