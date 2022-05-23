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
  const type = params?.type !== undefined ? `&type=${params.type}` : ''
  const lang = params?.lang !== undefined ? `&language=${params.lang}` : ''
  const sort = params?.sort !== undefined ? `&sort=${params.sort}` : ''
  const page = params?.page !== undefined ? `&page=${params.page}` : ''

  return `${q}${type}${lang}${sort}${page}`
}
