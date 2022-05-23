import { useContext } from 'react'
import { StoreContext } from '../../Components/Main/Main'
import { RequestParamsProps } from '../../Types/RequestParamProps'
import useManualRequest from '../Fetch/useManualRequest'

const BASE_URL = 'https://api.github.com/search/repositories'
const Q_BASE = '#search# user:#username# in:description in:name'
const DEFAULT_REQUEST: UseGetReposParams = {
  search: '',
  type: 'All',
  page: 1
}

interface UseGetReposParams {
  search: string
  type: 'All' | 'Sources' | 'Forks' | 'Archived' | 'Mirrors' | 'Templates'
  language?: string
  sort?: 'stars' | 'forks' | 'updated'
  page: number
}

interface UseGetReposProps {
  params?: UseGetReposParams
  username: string
}

const useGetRepos = ({
  params = DEFAULT_REQUEST,
  username
}: UseGetReposProps) => {
  const store = useContext(StoreContext)
  const searchTerm = params.search || ''
  const paramsRequest: RequestParamsProps = {
    q: configureQSearch(searchTerm, username),
    sort: params.sort,
    type: params.type,
    language: params.language,
    page: params.page
  }

  const [{ data, loading, error }, refetch] = useManualRequest(
    BASE_URL,
    paramsRequest
  )

  store?._updateReposList(data, username)
  return [data, loading, error, refetch]
}

const configureQSearch = (search: string, username: string) =>
  Q_BASE.replace('#search#', search).replace('#username#', username)

export default useGetRepos
