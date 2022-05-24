import { makeAutoObservable } from 'mobx'
import { HomieListType } from '../Types/HomieListType'
import {
  RepositoriesData,
  RepositoriesItemData
} from '../Types/RepositoriesData'

const REPOS_PER_PAGE: number = process.env.REACT_APP_REPOS_PER_PAGE
  ? parseInt(process.env.REACT_APP_REPOS_PER_PAGE)
  : 30

class StoreRepos {
  _reposList: HomieListType[] = []
  _searchRepoTextInput: string | undefined = undefined
  _selectTypeInput: string | undefined = undefined
  _selectLanguageInput: string | undefined = undefined
  _selectSortInput: string | undefined = undefined
  _totalPages: number = 1
  _totalResults: number = 0
  _currentPage: number = 1

  constructor() {
    makeAutoObservable(this)
  }

  _reposList_updated = () => {
    return this._reposList !== undefined && this._reposList.length > 0
  }

  _reposList_empty = () => {
    return this._reposList !== undefined && this._reposList.length === 0
  }

  _updateReposList = (reposRawData: RepositoriesData, username: string) => {
    if (reposRawData?.items === undefined) this._reposList = []
    else
      this._reposList = reposRawData.items.map((repo: RepositoriesItemData) => {
        return {
          id: repo.id,
          username: username,
          repo_name: repo.full_name,
          repo_url: repo.url,
          type: repo.private ? 'Private' : 'Public',
          is_forked: repo.fork,
          fork_url: repo.forks_url,
          description: repo.description,
          topics: repo.topics,
          language: repo.language,
          language_url: repo.languages_url,
          stars: repo.stargazers_count,
          stars_url: repo.stargazers_url,
          forks: repo.forks_count,
          forks_url: repo.forks_url,
          license_type: 'temp',
          last_update: new Date(repo.updated_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }
      })
  }

  _getResultsPerPage = () => REPOS_PER_PAGE

  _updateSearchRepoTextInput = (value: string) => {
    this._currentPage = 1
    this._searchRepoTextInput = value
  }

  _updateSelectTypeInput = (value: string) => {
    this._currentPage = 1
    this._selectTypeInput = value
  }

  _updateSelectLanguageInput = (value: string) => {
    this._currentPage = 1
    this._selectLanguageInput = value
  }

  _updateSelectSortInput = (value: string) => {
    this._currentPage = 1
    this._selectSortInput = value
  }
  _updateTotalPages = (totalRepos: number) => {
    this._totalPages = Math.ceil(totalRepos / REPOS_PER_PAGE)
    this._totalResults = totalRepos
  }

  _updateCurrentPage = (page: number) => {
    this._currentPage = page
  }
}

export default StoreRepos
