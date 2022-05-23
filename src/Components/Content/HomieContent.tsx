import { FC, useContext, useEffect } from 'react'
import HomieReposList from '../HomieReposList/HomieReposList'
import { useParams } from 'react-router-dom'
import useGetRepos from '../../Hooks/useGetRepos/useGetRepos'
import { StoreContext } from '../Main/Main'
import HomieRepoSearchBar from './HomieReposSection/HomieRepoSearchBar'
import { LoadingComponent } from '../HomieLoading/HomieLoading'
import {
  configURLGetRepos,
  UseGetReposParams
} from '../../Hooks/useGetRepos/configURLGetRepos'
import { observer } from 'mobx-react'
import { MainStore } from '../../Stores/MainStore'
import { HomieAlert } from '../HomieAlert/HomieAlert'

const HomieContent: FC = () => {
  const { _storeRepos: storeRepos, _storeLists: storeLists }: MainStore =
    useContext(StoreContext)!

  const { username } = useParams<{ username: string }>()
  const [data, loading, error, refetchRepos] = useGetRepos(
    configURLGetRepos({ username })
  )

  useEffect(() => {
    refetchRepos()
  }, [refetchRepos, username])

  useEffect(() => {
    storeRepos?._updateReposList(data, username)
    storeRepos?._updateTotalPages(data?.total_count)
    if (data) storeLists?._createLists(data)
  }, [data, storeRepos])

  useEffect(() => {
    const paramsObj: UseGetReposParams = {
      search: storeRepos?._searchRepoTextInput || undefined,
      type: storeRepos?._selectTypeInput || undefined,
      lang: storeRepos?._selectLanguageInput || undefined,
      sort: storeRepos?._selectSortInput || undefined,
      page: storeRepos?._currentPage || 1
    }

    refetchRepos({
      url: configURLGetRepos({ params: paramsObj, username: username })
    })
  }, [
    refetchRepos,
    storeRepos?._currentPage,
    storeRepos?._searchRepoTextInput,
    storeRepos?._selectLanguageInput,
    storeRepos?._selectSortInput,
    storeRepos?._selectTypeInput
  ])

  return (
    <>
      <HomieRepoSearchBar />
      {!loading && storeRepos._reposList_updated() && (
        <>
          <HomieReposList items={storeRepos._reposList} />
        </>
      )}

      {!loading && storeRepos._reposList_empty() && (
        <>
          <HomieAlert
            status="warning"
            message="We did not find any repository"
          />
        </>
      )}

      {loading && <LoadingComponent tip="Searching for repositories" />}
    </>
  )
}

export default observer(HomieContent)
