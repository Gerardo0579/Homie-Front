import { FC, useContext, useEffect } from 'react'
import { HomieList } from '../HomieList/HomieList'
import { useParams } from 'react-router-dom'
import useGetRepos from '../../Hooks/useGetRepos/useGetRepos'
import { StoreContext } from '../Main/Main'
import HomieRepoSearchBar from './ReposList/HomieRepoSearchBar'
import { LoadingComponent } from '../HomieLoading/HomieLoading'
import {
  configURLGetRepos,
  UseGetReposParams
} from '../../Hooks/useGetRepos/configURLGetRepos'
import { observer } from 'mobx-react'

const HomieContent: FC = () => {
  const store = useContext(StoreContext)

  const { username } = useParams<{ username: string }>()
  const [data, loading, error, refetchRepos] = useGetRepos(
    configURLGetRepos({ username })
  )

  useEffect(() => {
    refetchRepos()
  }, [refetchRepos, username])

  useEffect(() => {
    store?._updateReposList(data, username)
    store?._updateTotalPages(data?.total_count)
  }, [data, store])

  useEffect(() => {
    const paramsObj: UseGetReposParams = {
      search: store?._searchRepoTextInput || undefined,
      type: store?._selectTypeInput || undefined,
      lang: store?._selectLanguageInput || undefined,
      sort: store?._selectSortInput || undefined,
      page: store?._currentPage || 1
    }

    refetchRepos({
      url: configURLGetRepos({ params: paramsObj, username: username })
    })
  }, [
    refetchRepos,
    store?._searchRepoTextInput,
    store?._selectLanguageInput,
    store?._selectSortInput,
    store?._selectTypeInput
  ])

  return (
    <>
      {store?._reposList_updated && (
        <>
          <HomieRepoSearchBar />
          <HomieList items={store._reposList} />
        </>
      )}

      {loading && <LoadingComponent tip="Searching for repositories" />}
    </>
  )
}

export default observer(HomieContent)
