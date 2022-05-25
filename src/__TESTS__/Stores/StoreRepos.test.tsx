import StoreRepos from '../../Stores/StoreRepos'
import { RepositoriesData } from '../../Types/RepositoriesData'
import {
  extraReposArray,
  repositoriesDummyData,
  repositoriesEmptyDummyData
} from './Fixtures/RepositoriesDataDummy'

describe('StoreRepos', () => {
  const _repositoriesData = repositoriesDummyData
  const _emptyRepositoriesData = repositoriesEmptyDummyData
  const DUMMY_USERNAME = 'yknx4'

  const DEAFULT_REPOS_SIZE = 6
  const DEAFULT_TOTAL_PAGES = 2
  const DEAFULT_TOTAL_RESULTS = 6
  const DEAFULT_CURRENT_PAGE = 1

  const setup = (data: RepositoriesData) => {
    const store = new StoreRepos()
    store._updateReposList(data, DUMMY_USERNAME)
    return store
  }

  describe('Load of data successfuly', () => {
    it('Load basic data', () => {
      const store = setup(_repositoriesData)

      const results = store._reposList

      expect(results.length).toBe(DEAFULT_REPOS_SIZE)
    })

    it('Load empty data', () => {
      const store = setup(_emptyRepositoriesData)

      const results = store._reposList

      expect(results.length).toBe(0)
    })

    it('Update data', () => {
      const store = setup(_repositoriesData)

      expect(store._reposList.length).toBe(DEAFULT_REPOS_SIZE)

      store._updateReposList(_emptyRepositoriesData, DUMMY_USERNAME)

      expect(store._reposList.length).toBe(0)
    })
  })

  describe('Handle pagination correctly', () => {
    const _extraReposArray = extraReposArray

    const UPDATED_TOTAL_PAGES = 3
    const UPDATED_TOTAL_RESULTS = 11
    const UPDATED_CURRENT_PAGE = 2

    const setup_withData = () => {
      return setup(_repositoriesData)
    }

    it('Shows pagination info correctly', () => {
      const store = setup_withData()

      expect(store._totalPages).toBe(DEAFULT_TOTAL_PAGES)
      expect(store._totalResults).toBe(DEAFULT_TOTAL_RESULTS)
      expect(store._currentPage).toBe(DEAFULT_CURRENT_PAGE)
    })

    it('Update pagination info correctly', () => {
      const store = setup_withData()

      const extendedRepos = _repositoriesData
      extendedRepos.items.concat(_extraReposArray)
      extendedRepos.total_count += _extraReposArray.length

      store._updateCurrentPage(2)
      store._updateReposList(extendedRepos, DUMMY_USERNAME)

      expect(store._totalPages).toBe(UPDATED_TOTAL_PAGES)
      expect(store._totalResults).toBe(UPDATED_TOTAL_RESULTS)
      expect(store._currentPage).toBe(UPDATED_CURRENT_PAGE)
    })
  })

  describe('Update inputs correctly', () => {
    const UPDATED_INPUT_TEXT = 'and'
    const UPDATED_INPUT_TYPE = 'Forks'
    const UPDATED_INPUT_LANG = 'React'
    const UPDATED_INPUT_SORT = 'Stars'

    const setup_withData = () => {
      return setup(_repositoriesData)
    }

    it('Update inputs', () => {
      const store = setup_withData()

      store._updateCurrentPage(2)
      store._updateSearchRepoTextInput('and')
      expect(store._currentPage).toBe(DEAFULT_CURRENT_PAGE)
      expect(store._searchRepoTextInput).toBe(UPDATED_INPUT_TEXT)

      store._updateCurrentPage(2)
      store._updateSelectTypeInput('Forks')
      expect(store._selectTypeInput).toBe(UPDATED_INPUT_TYPE)

      store._updateCurrentPage(2)
      store._updateSelectLanguageInput('React')
      expect(store._selectLanguageInput).toBe(UPDATED_INPUT_LANG)

      store._updateCurrentPage(2)
      store._updateSelectSortInput('Stars')
      expect(store._selectSortInput).toBe(UPDATED_INPUT_SORT)
    })
  })
})
