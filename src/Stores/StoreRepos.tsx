import { makeAutoObservable } from 'mobx'
import { HomieListType } from '../Types/HomieListType'
import {
  RepositoriesData,
  RepositoriesItemData
} from '../Types/RepositoriesData'

class StoreRepos {
  _reposList: HomieListType[] = []
  _searchRepoTextInput: string = ''
  _selectTypeInput: string = ''
  _selectLanguageInput: string = ''
  _selectSortInput: string = ''
  _totalPages: number = 1
  _currentPage: number = 1

  constructor() {
    makeAutoObservable(this)
  }

  _reposList_updated = () => {
    return this._reposList !== undefined && this._reposList.length > 0
  }

  _updateReposList = (reposRawData: RepositoriesData, username: string) => {
    this._reposList = reposRawData?.items.map((repo: RepositoriesItemData) => {
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

  _updateSearchRepoTextInput = (value: string) => {
    this._searchRepoTextInput = value
  }

  _updateSelectTypeInput = (value: string) => {
    this._selectTypeInput = value
  }

  _updateSelectLanguageInput = (value: string) => {
    this._selectLanguageInput = value
  }

  _updateSelectSortInput = (value: string) => {
    this._selectSortInput = value
  }
  _updateTotalPages = (totalRepos: number) => {
    const extraPage = totalRepos % 30 > 0 ? 1 : 0
    this._totalPages = totalRepos / 30 + extraPage
  }

  _updateCurrentPage = (page: number) => {
    this._currentPage = page
  }
}

export default StoreRepos
