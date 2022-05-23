import { FC, useContext, useEffect } from 'react'
import { HomieList } from '../HomieList/HomieList'
import { useParams } from 'react-router-dom'
import useGetRepos from '../../Hooks/useGetRepos/useGetRepos'
import { StoreContext } from '../Main/Main'
import { HomieRepoSearchBar } from './ReposList/HomieRepoSearchBar'
import { LoadingComponent } from '../HomieLoading/HomieLoading'

export const HomieContent: FC = () => {
  const store = useContext(StoreContext)

  const { username } = useParams<{ username: string }>()
  const [data, loading, error, refetchRepos] = useGetRepos({ username })

  useEffect(() => {
    refetchRepos()
  }, [refetchRepos])

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
