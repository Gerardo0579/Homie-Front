import { MainStore } from '../../../../../../../Stores/MainStore'
import StoreLists from '../../../../../../../Stores/StoreLists'
import StoreRepos from '../../../../../../../Stores/StoreRepos'
import { repositoriesDummyData } from '../../../../../../../__TESTS__/Stores/Fixtures/RepositoriesDataDummy'

export const getMainStore = () => {
  const storeRepos = new StoreRepos()
  const storeLists = new StoreLists()
  const store = new MainStore(storeRepos, storeLists)

  return store
}
