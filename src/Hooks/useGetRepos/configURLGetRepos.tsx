const REPOS_PER_PAGE: number = process.env.REACT_APP_REPOS_PER_PAGE
  ? parseInt(process.env.REACT_APP_REPOS_PER_PAGE)
  : 30

const BASE_URL = 'https://api.github.com/search/repositories'
const Q_BASE = '#search# user:#username# in:description in:name'

export interface UseGetReposParams {
  search: string | undefined
  type: string | undefined
  lang: string | undefined
  sort: string | undefined
  page: number | undefined
}

interface UseGetReposProps {
  params?: UseGetReposParams
  username: string
}

export const configURLGetRepos = ({ params, username }: UseGetReposProps) => {
  const searchTerm = params?.search || ''
  const paramsRequest: UseGetReposParams = {
    search: configureQSearch(searchTerm, username),
    sort: params?.sort,
    type: params?.type,
    lang: params?.lang,
    page: params?.page
  }

  return `${BASE_URL}?${formatParams(paramsRequest)}`
}

const configureQSearch = (search: string, username: string) =>
  Q_BASE.replace('#search#', search).replace('#username#', username)

const formatParams = (params?: UseGetReposParams) => {
  const q = params?.search ? `q=${encodeURIComponent(params.search)}` : ''
  const type = encodeType(params?.type)
  const lang = encodeLang(params?.lang)
  const sort = encodeSort(params?.sort)
  const page = encodePage(params?.page)
  const per_page = encodePerPage()

  return `${q}${type}${lang}${sort}${page}${per_page}`
}

const encodeType = (type: string | undefined) => {
  switch (type) {
    case 'All': {
      return ''
    }
    case 'Archived': {
      return ' archived:true'
    }
    case 'Mirrors': {
      return ' mirror:true'
    }
    case 'Forks': {
      return ' forks:>=1'
    }
    default: {
      return ''
    }
  }
}
const encodeLang = (lang: string | undefined) =>
  lang !== undefined ? encodeURIComponent(` language:${lang}`) : ''
const encodeSort = (sort: string | undefined) =>
  sort !== undefined ? `&sort=${sort}` : ''
const encodePage = (page: number | undefined) =>
  page !== undefined ? `&page=${page}` : ''
const encodePerPage = () => `&per_page=${REPOS_PER_PAGE}`
