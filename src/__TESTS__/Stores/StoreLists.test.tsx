import StoreLists from '../../Stores/StoreLists'
import {
  basicDummyReposIds,
  repositoriesDummyData
} from './Fixtures/RepositoriesDataDummy'

describe('StoreLists', () => {
  const _repositoriesData = repositoriesDummyData
  const _dummyIds = basicDummyReposIds
  const DUMMY_LIST_NAME = 'Test name'
  const DUMMY_LIST_DESCRIPTION = 'Tes description'
  const DEAFULT_LISTS_SIZE = 3

  const setup = () => {
    const store = new StoreLists()

    store._createLists(_repositoriesData)

    return store
  }

  it('creates new lists', () => {
    const store = setup()

    _dummyIds.forEach((id) => {
      const list = store._reposListGet(id)
      expect(list.lists.length).toBe(DEAFULT_LISTS_SIZE)
    })
  })

  it('Add new item to repos', () => {
    const store = setup()

    _dummyIds.forEach((id) => {
      store._reposListAdd(id, DUMMY_LIST_NAME, DUMMY_LIST_DESCRIPTION)

      const list = store._reposListGet(id)
      expect(list.lists.length).toBe(DEAFULT_LISTS_SIZE + 1)
    })
  })
})
